class Person {
  constructor(fullName, email, password) {
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.id = generateId();
  }
}


function generateId() {
  const users = getAllUsers();
  return users.length + 1;
}


function getAllUsers() {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
}

function RegisterForm(event) {
  event.preventDefault(); 

  let fullName = document.getElementById("new-username").value.trim();
  let email = document.getElementById("new-email").value.trim();
  let password = document.getElementById("new-password").value.trim();

  let users = getAllUsers();

  let exists = users.find((element) => element.email === email);
  if (exists) {
    alert("User already exists");
    return;
  }

  let newUser = new Person(fullName, email, password);
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  console.log("User saved successfully with ID:", newUser.id);
  alert("Registration successful!");
  window.location.href = "/login-page/index.html";

  document.getElementById("new-username").value = "";
  document.getElementById("new-email").value = "";
  document.getElementById("new-password").value = "";
}
