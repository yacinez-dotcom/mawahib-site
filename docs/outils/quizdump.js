/* Outil — affiche, pour chaque question de quiz, le choix désigné par « bonne », pour relire à la main que c'est le bon.
   Usage : node docs/outils/quizdump.js <partie.js> [id de la première fiche]   (ajouté à l'unité 52) */
const fs=require('fs');global.App={data:{ajouterFiches:a=>{global.F=a}}};
eval(fs.readFileSync(process.argv[2],'utf8'));
const from=process.argv[3]||'';let on=!from;
for(const f of F){ if(f.id===from) on=true; if(!on||!f.quiz) continue;
 f.quiz.forEach((q,i)=>console.log(f.id+' Q'+(i+1)+' ['+q.bonne+'] '+q.q+'\n   => '+q.choix[q.bonne]+'\n   all: '+q.choix.join(' | ')+'\n   exp: '+q.explication.slice(0,140)));}
