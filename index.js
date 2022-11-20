/*function introduction(name) {
    return `Hi, my name is ${name}.`

}

function introductionNames(Aki, Sampi) {
  console.log(`The introduction names are ${Aki} and ${Sampi}.`);

}
const names=`${Aki}!, ${Sampi}!`; 

function introductionWithLanguage(name, language) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
function introductionWithLanguage(Ember_js, React) { 
    comsole.log(`Hi, my name is name and I am learning to program in ${language}.`);
}
const language=`${Ember.js}!, ${React}!`;
*/

function introduction(name) {
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language) {
 return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language="JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;  
}
