class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const himani = new User("himani ")
//console.log(himani.createId()); // undefined, because createId is static
//onsole.log(User.createId()); // 123, static method can be called on the class itself

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}


const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());