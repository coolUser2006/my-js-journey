const myObject ={
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    c: 'C++'

}
for (const key in myObject) {
    //console.log('${key} :- ${myObject[key]}');
}
const programming = ['JavaScript', 'Python', 'Ruby', 'C++'          ]
for(const key in programming) {
   // console.log(`Index ${key} has value ${programming[key]}`);


}
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")



for (const key in map) {
    console.log(key);
}   