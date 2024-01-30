// regex

// pattern matching

// regular expressions
let pattern='pw'
let regexOne=new RegExp(pattern);
let flag='gi'
let regexTwo=new RegExp(pattern,flag);


// second method
let regexThree=/pw/;
let regexFour=/pw/gi;
const strCheak="this is Pw is Pw content Pw is go to pw";

// match
const result=regexOne.test(strCheak);
console.log(result);

const anotherReault=strCheak.match(regexTwo);
console.log(anotherReault);



// replace
const replaceResult=strCheak.replace(regexTwo,'**');
console.log(replaceResult);

// veburl
const webUrl="https://www.google.com";
const usableUrl=webUrl.replace(/www/,'-');
console.log(usableUrl);