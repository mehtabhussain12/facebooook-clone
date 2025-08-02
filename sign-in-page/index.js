class Person {
    constructor(fullName, email, password,id) {
        this.fullName = fullName;
        this.email = email;
        this.password = password
        this.id = id +1
    }
}
let id = 0
let users = JSON.parse(localStorage.getItem("users")) || [];
function RegisterForm(event) {
    event.preventDefault();

    let fullName = document.getElementById("new-username").value
    let email = document.getElementById("new-email").value
    let password = document.getElementById("new-password").value
   let exists = users.find((element) => element.email === email);
  if (exists) {
    alert("User already exists");
    return;
  }
    let newUser = new Person(fullName, email, password ,id);
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful!");
 window.location.href = "/login-page/index.html";

    document.getElementById("new-username").value = "";
    document.getElementById("new-email").value = "";
    document.getElementById("new-password").value = "";


}