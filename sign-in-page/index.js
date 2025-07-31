class Person {
    fullName
    email
    password
    constructor(fullName, email, password) {
        this.fullName = fullName;
        this.email = email;
        this.password = password
    }
}

let users = JSON.parse(localStorage.getItem("users")) || [];
function RegisterForm(event) {
    event.preventDefault();
    let profile = document.getElementById("profile")
    let fullName = document.getElementById("new-username").value
    let email = document.getElementById("new-email").value
    let password = document.getElementById("new-password").value
   let exists = users.find((element) => element.email === email);
  if (exists) {
    alert("User already exists");
    return;
  }
    let newUser = new Person(fullName, email, password);
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful!");
   fullName.value = ""
    email.value = ""
    password.value = ""
  profile.innerHTML= users.fullName


}