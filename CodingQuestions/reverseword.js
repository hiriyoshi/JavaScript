let j = "world";
let l = [];
let resultss = [];
let vowel=0;
let consonant=0;

console.log("Your word is:",j);
for(const k of j){
    l.push(k);
}
for(let i = l.length-1;i>=0;i-- ){
    // removing a letter from the words
    // if(l[i] ==='l'){
    // }
    // else{
    //     resultss.push(l[i]);
    // }
    resultss.push(l[i]);
    if(l[i] ==='a' || l[i] ==='e' || l[i] ==='i' || l[i] ==='o' || l[i] ==='u' || l[i] ==='A' || l[i] ==='E' || l[i] ==='I' || l[i] ==='O' || l[i] ==='U'){
        vowel++;
    }
    else{
        consonant++;
    }
}
let rez="";
for(const opo of resultss){
    rez += opo;
}
console.log(`The reversed of your word is: ${rez}`);
console.log(`The number of vowels: ${vowel}`);
console.log(`The number of consonant: ${consonant}`);