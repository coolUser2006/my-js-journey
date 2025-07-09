const name = "himani"
const repocount = 50
//console.log (name+repocount +"value"):
console.log('Hello my name is${name} and my repo count is${repocount}');
const gameName = new String('Himani-hc-com')
//console.log(gameName[0]);
//console.log(gamename._proto_);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)  );
console.log(gameName.indexOf('t '));
const newString = gameName.substring(0,4    )
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   himani    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://himani.com/himani%20guptay"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));