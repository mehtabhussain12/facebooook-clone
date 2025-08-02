
let userName = document.getElementById("username");
let userEmail = document.getElementById("useremail");
let userid = document.getElementById("userid")
function checkLogin() {
  let loggedUser = JSON.parse(localStorage.getItem("loggedinUser"));

  if (loggedUser) {
    userName.textContent = loggedUser.fullName;
    userEmail.textContent = loggedUser.email;
    userid.textContent = loggedUser.id

  } else {
   Swal.fire({
  title: "Unauthorized Access",
  text: "Please login first!",
  icon: "warning",
  confirmButtonText: "Go to Login",
}).then(() => {
  window.location.href = "/login-page/index.html";
});

    ;
  }
}
checkLogin();
function logout() {
  localStorage.removeItem("loggedinUser");

  Swal.fire({
    title: "Logged Out!",
    text: "You have been logged out successfully.",
    icon: "success",
    confirmButtonText: "Back to Login"
  }).then(() => {
    window.location.href = "/login-page/index.html";
  });
}

