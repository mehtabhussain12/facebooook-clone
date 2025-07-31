function LoginForm(event) {
  event.preventDefault();
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value

  let usersFromStorage = JSON.parse(localStorage.getItem("users")) || [];
  let savedUser = usersFromStorage.find((element) => element.email === email);

  if (savedUser && savedUser.password === password) {
    Swal.fire({
  title: "Login Successful!",
  text: "Welcome back, user",
  icon: "success"
});
 window.location.href = "profile-page/index.html";
    localStorage.setItem("loggedinUser", JSON.stringify(savedUser));

  } else {
    alert("Invalid email or password");
  }
  loginbtn.innerHTML= savedUser.fullName
    if (localStorage.getItem("loggedInUser")) {
    window.location.href = "profile-page/index.html";
}
}
