const name = "hitesh"
const repoCount = 50



console.log(`My name is ${name} repo count is ${repoCount}`)


const gameName = new String('Sharib-husain')

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase())

console.log(gameName);

console.log(gameName.charAt(3))

console.log(gameName.indexOf('a'))


const newstring = gameName.substring(0,3);

console.log(newstring)


const anotherstring = gameName.slice(-2,2);

console.log(anotherstring);



const stringone = "    sjarib    "


console.log(stringone);

console.log(stringone.trim());



const url = "http//sharib%usaincom%no"

console.log (url.replaceAll('%','-'))


console.log(gameName.split('-'))