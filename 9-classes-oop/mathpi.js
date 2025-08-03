const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descripter);
//console.log(Math.PI); // 3.141592653589793")
//Math.PI =5// TypeError: Cannot assign to read only property 'PI' of object '#<Math>'
//console.log(Math.PI); // 3.141592653589793

const burger ={
    name:'Cheeseburger',
    price: 5.99,
    ingredients: ['beef', 'cheese', 'lettuce', 'tomato'],
    isAvalilable: true
}

console.log(Object.getOwnPropertyDescriptor(burger, 'name'));

Object.defineProperty(burger,'name',{
    writable: false,
enumerable: false,


})
console.log(Object.getOwnPropertyDescriptor(burger, 'name'));

for (let index =0;index<Array.length;index++){
    const element = Array[index];
    console.log(element);
}