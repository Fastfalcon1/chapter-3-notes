const readLine=require('readline-sync');
let words=[];

let word=readLine.question("whats your question");
words.push(word);
let answers=['of course','not quite','it could be'];

let randomNum = Math.floor(Math.random()*answers.length);
let answer = answers[randomNum];
console.log(answer);