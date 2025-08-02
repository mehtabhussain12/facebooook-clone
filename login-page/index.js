
function alreadyLoggedin() {
  let loggedUser = JSON.parse(localStorage.getItem("loggedinUser"));
  if (loggedUser) {
    Swal.fire({
      title: "Already Logged In",
      text: "Redirecting you to your profile...",
      icon: "info",
      timer: 2000,
      showConfirmButton: false
    }).then(() => {
      window.location.href = "/index.html"; 
    });

  }
}
 alreadyLoggedin()
function LoginForm(event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let usersFromStorage = JSON.parse(localStorage.getItem("users")) || [];
  let savedUser = usersFromStorage.find((element) => element.email === email);

  if (savedUser && savedUser.password === password) {
    localStorage.setItem("loggedinUser", JSON.stringify(savedUser));

    Swal.fire({
      title: "Login Successful!",
      text: `Welcome back, ${savedUser.fullName}`,
      icon: "success",
      confirmButtonText: "Go to Your Profile"
    }).then(() => {
      window.location.href = "/index.html";
    });

  } else {
    Swal.fire({
      title: "Login Failed",
      text: "Invalid email or password",
      icon: "error",
      confirmButtonText: "Try Again"
    });
  }
}
