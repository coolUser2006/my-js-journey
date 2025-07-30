//let myName="Himani"
//let myAge=20
//consol.log(myName.trueLength);


let myBeauty=["dior","rhode"]
let BeautyPower={
    dior: "luxury",
    rhode: "affordable",

    getRhodePower : function(){
        console.log("Rhode is affordable and great for everyday use."); 
    }

}

Object.prototype.getDiorPower = function(){
    console.log("Dior is a luxury brand with high-quality products.");
}           
Array.prototype.getBeautyPower = function(){
    console.log("Beauty products enhance our appearance and boost confidence.");
}


//INHERITANCE
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"himani".trueLength()
"iceTea".trueLength()
