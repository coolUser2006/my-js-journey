function SetUsername(username) {
  this.username = username;
  console.log("called");

}
function createUser(username,email,password) {
  SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const beauty = new createUser("Himani", "guptahimani","123")
console.log(beauty);