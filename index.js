let userName = document.getElementById("username");
let userEmail = document.getElementById("useremail");
let userid = document.getElementById("userid");
let friendsContainer = document.getElementById("friends");

function checkLogin() {
  let loggedUser = JSON.parse(localStorage.getItem("loggedinUser"));

  if (loggedUser) {
    userName.textContent = loggedUser.fullName;
    userEmail.textContent = loggedUser.email;
    userid.textContent = loggedUser.id;
  } else {
    Swal.fire({
      title: "Unauthorized Access",
      text: "Please login first!",
      icon: "warning",
      confirmButtonText: "Go to Login",
    }).then(() => {
      window.location.href = "/login-page/index.html";
    });
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

const users = JSON.parse(localStorage.getItem("users")) || [];
const loggedInUser = JSON.parse(localStorage.getItem("loggedinUser")) || [];

function showFriends() {
  const otherUsers = users.filter(user => user.id !== loggedInUser.id);
  if (!loggedInUser.friends) loggedInUser.friends = [];
  friendsContainer.innerHTML = "";
  otherUsers.map(user => {
    const isMyFriend = loggedInUser.friends.includes(user.id);
    const friendHTML = `
      <div id="fb" style="margin-bottom: 10px; border: 1px solid #ccc; padding: 10px;">
        <div id="fb-top"></div>
        <img src="https://5.imimg.com/data5/SELLER/Default/2024/9/450937057/QO/MA/WM/90162095/new-project-8-500x500.jpg" height="100" width="100" alt="User Image">
        <p id="info"><b>${user.fullName}</b><br>${user.email}<br><span>14 mutual friends</span></p>
        <div id="button-block">
          ${isMyFriend
        ? `<p style='color: white; background-color: green; padding: 5px;'>Already Added</p>`
        : `
              <div id="confirm" onClick="addFriend(${user.id})" style="cursor: pointer; color: white; background-color: blue; padding: 5px; display: inline-block; margin-right: 5px;">Confirm</div>
              <div id="delete" style="cursor: pointer; background-color: red; color: white; padding: 5px; display: inline-block;">Delete Request</div>
            `}
        </div>
      </div>
    `;
    friendsContainer.innerHTML += friendHTML;
  });
}
function addFriend(friendId) {
  if (!loggedInUser.friends.includes(friendId)) {
    loggedInUser.friends.push(friendId);
  }


  localStorage.setItem("loggedinUser", JSON.stringify(loggedInUser));


  const updatedUsers = users.map(user => {
    if (user.id === loggedInUser.id) {
      user.friends = loggedInUser.friends;
    }
    return user;
  });
  localStorage.setItem("users", JSON.stringify(updatedUsers));

  showFriends();
}

showFriends();
