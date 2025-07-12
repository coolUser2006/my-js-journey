const user = {
    username: "himani",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
//user.welcomeMessage()
//user.username = "senorita"
//user.welcomeMessage()
console.log(this);
function  coffee() {
    let username = "himani";
    console.log(this.username);
}
coffee();


// const coffee= function() {
   // let username = "himani";
    //console.log(this.username);
// }

const coffeeArrow = () => {
    let username = "himani";
    console.log(this);
}

// coffee()
//const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "himani"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

