// Outil — contrôle structurel des fichiers de données (fiches, glossaire), sans le site : ordre des champs, valeurs permises, quiz, doublons.
// Usage : node verif.js data/glossaire.js data/lecons/tah/tah-01-p10.js …
const fs=require('fs'); const vm=require('vm');
const CH=['id','kitab','bab','fasl','ordre','titre','titre_ar','objectif','matn','regle_pratique','qualification','explication','aqwal','muatamad','tarjih_hattab','tanbihat','divergences','exemple','erreurs_frequentes','termes','quiz','ref','alertes','verification'];
const EN={hukm:['fard','wajib','sunna','mandub','mubah','makruh','haram'],nature:['rukn','shart','mubtil','adab','autre'],statut:['mashhur','rajih','qawl','shadh','non_precise'],verification:['verifie','a_revoir']};
let all=[], terms=[];
const App={data:{ajouterFiches:l=>all.push(...l), ajouterTermes:l=>terms.push(...l), manifeste:()=>{}, plan:()=>{}}};
for(const f of process.argv.slice(2)){ vm.runInNewContext(fs.readFileSync(f,'utf8'),{App}); }
const pos={0:0,1:0,2:0,3:0}; let err=0; const ids=new Set();
for(const x of all){
  if(x.type==='synthese'){ (x.quiz||[]).forEach(q=>pos[q.bonne]++); continue; }
  const k=Object.keys(x); if(x.type!=='terme' && JSON.stringify(k)!==JSON.stringify(CH)){console.log('ordre champs',x.id,k.join(','));err++;}
  if(ids.has(x.id)){console.log('doublon',x.id);err++;} ids.add(x.id);
  if(x.qualification){ if(!EN.hukm.includes(x.qualification.hukm)||!EN.nature.includes(x.qualification.nature)){console.log('qualif',x.id);err++;} }
  (x.aqwal||[]).forEach(a=>{ if(!EN.statut.includes(a.statut)){console.log('statut',x.id,a.statut);err++;} });
  if(!EN.verification.includes(x.verification)){console.log('verif',x.id);err++;}
  let prev=-1; if(x.quiz.length<3||x.quiz.length>5){console.log('nb quiz',x.id);err++;}
  x.quiz.forEach(q=>{ if(q.choix.length!==4||q.bonne<0||q.bonne>3){console.log('quiz',x.id);err++;} if(q.bonne===prev){console.log('même position consécutive',x.id);err++;} prev=q.bonne; pos[q.bonne]++; });
  if(!x.quiz.some(q=>/^Mise en situation/.test(q.q))){console.log('pas de mise en situation',x.id);err++;}
  for(const s of ['titre','titre_ar','objectif','regle_pratique','explication','muatamad','exemple']) if(typeof x[s]!=='string'||!x[s].trim()){console.log('vide',x.id,s);err++;}
  if(/[Ͱ-Ͽ]/.test(JSON.stringify(x))){console.log('caractère grec',x.id);err++;}
}
console.log('fiches',all.length,'termes',terms.length,'| A',pos[0],'| B',pos[1],'| C',pos[2],'| D',pos[3],'| erreurs',err);
if(terms.length){ const s=new Set(); let d=0; terms.forEach(t=>{ if(s.has(t.ar)){console.log('terme double',t.ar);d++;} s.add(t.ar); if(!t.ar||!t.translit||!t.def)console.log('terme incomplet',t.ar); if(!/[ً-ْ]/.test(t.ar))console.log('sans voyelle',t.ar);}); console.log('doublons',d); }
