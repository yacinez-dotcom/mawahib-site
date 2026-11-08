# Outil de contrôle — rendu de toutes les fiches, termes coupés, quiz.
# Usage : python3 controle_site.py <dossier du site>   (Playwright + Chromium préinstallés)
# Rapporte : erreurs et anomalies du socle, erreurs JS, termes du glossaire coupés au milieu d'un mot,
# et vérifie qu'un clic sur la bonne réponse de chaque quiz donne le score maximal.
import sys, json, os
from playwright.sync_api import sync_playwright
SITE=os.path.abspath(sys.argv[1] if len(sys.argv)>1 else '.'); URL="file://"+SITE+"/index.html"
with sync_playwright() as p:
    b=p.chromium.launch(args=["--allow-file-access-from-files"]); pg=b.new_page(); errs=[]
    pg.on("pageerror", lambda e: errs.append(str(e)))
    pg.goto(URL); pg.wait_for_timeout(1500)
    print(json.dumps(pg.evaluate("({erreurs:App.data.etat().erreurs, fiches:App.data.etat().fiches, termes:App.data.etat().termes, verifieAvecAlertes:App.data.anomalies().filter(a=>/marquée « verifie » avec/.test(a.message)).length, anomalies:App.data.anomalies().filter(a=>!/marquée « verifie » avec/.test(a.message)).map(a=>a.niveau+' '+(a.id||'')+' '+a.message)})"),ensure_ascii=False))
    ids=pg.evaluate("App.data.fiches().map(f=>f.id)"); coupes=0; quizKO=[]
    for id in ids:
        pg.goto(URL+"#/lecon/"+id); pg.reload(); pg.wait_for_timeout(500)
        r=pg.evaluate(r"""(()=>{const AR=/[؀-ۿ]/; const out=[];
          document.querySelectorAll('[data-vue=fiche] .b3-terme').forEach(t=>{
            const pt=t.previousSibling?t.previousSibling.textContent:'', nt=t.nextSibling?t.nextSibling.textContent:'';
            if((pt&&AR.test(pt.slice(-1)))||(nt&&AR.test(nt.charAt(0)))) out.push(pt.slice(-6)+'['+t.textContent+']'+nt.slice(0,6));
          }); return out;})()""")
        if r: coupes+=len(r); print("COUPÉ", id, json.dumps(r,ensure_ascii=False))
        bonnes=pg.evaluate(f"(App.data.fiches().find(f=>f.id==='{id}').quiz||[]).map(q=>q.bonne)")
        qs=pg.query_selector_all('.b5-question')
        for q,bn in zip(qs,bonnes): q.query_selector(f'.b5-choix[data-index="{bn}"]').click()
        if bonnes and pg.evaluate("document.querySelectorAll('.b5-choix--bonne').length")!=len(bonnes): quizKO.append(id)
    print("fiches :",len(ids),"| termes coupés :",coupes,"| quiz en échec :",quizKO or 0,"| erreurs JS :",errs or 0)
    b.close()
