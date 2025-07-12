//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
     console.log("INNER: ", a);
    
}
//console.log(a); // 300
    // console.log(b); // ReferenceError: b is not defined
//console.log(c); // ReferenceError: c is not defined

function one() {
const username = "himani"
    function two() {
        const password = "12345"
        console.log(username); // himani   

}
//console.log(password); // ReferenceError: password is not defined
    two()


}
//one() // himani
if (true) {
    const username = "himani"
    if (username === "himani") {
        const password = " 12345"
         console.log(username +password);
    }
    // console.log(password);
}

// console.log(username);
//++++++++++++++++++interesting+++++++++++++++++++++++
console.log(addone(5))

function addone(num){
    return num + 1
}



