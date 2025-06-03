const activeUser = JSON.parse(localStorage.getItem("activeUser"))

  if (activeUser) {
    document.getElementById("user-name").textContent = activeUser.userName;
    document.getElementById("user-email").textContent = activeUser.email;
  } else {
    window.location.href = "login.html"; // or wherever your login page is
  }
