class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase()
    }
set email(value){
    this._email = value
}
get password(){
    return `${this,password}himani`
}
set password(value){
    this._password= value
}
}
const himani = new User("guptahimani.ai","abc")
console.log(himani.email); // Output: GUPTAHIMANI.AI