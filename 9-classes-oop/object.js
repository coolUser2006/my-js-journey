function multiplyby5(num){
    return num*5

}
multiplyby5.power = 2

console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype);

function createUser(username,score){
    this.username  = username
    this.score = score
}

createUser.prototype.increment = function (){
   this. score++
}
createUser.prototype.printMe = function(){
    console.log('score is${this.score};')
}
const book = new createUser("robin",24)
const code = createUser("alex",30)

book.printMe()
