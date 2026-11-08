// Outil de contrôle — répartition de la bonne réponse (A–D) dans les quiz.
// Usage : node quizstat.js <dossier du site>/data/lecons/*/*.js
global.App={data:{ajouterFiches:a=>{global.F=(global.F||[]).concat(a)}}};
const path=require('path'); for (const f of process.argv.slice(2)) require(path.resolve(f));
const c=[0,0,0,0]; for (const f of F) for (const q of (f.quiz||[])) c[q.bonne]++;
console.log('A',c[0],'| B',c[1],'| C',c[2],'| D',c[3]);
