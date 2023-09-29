const loggedIn = localStorage.getItem("loggedIn") === "true"; //kollar om användaren är inloggad eller inte

function logIn() { //logga in funktion
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "Bella" && password === "qwe123") {
    document.getElementById("loginForm").classList.add("invisible");
    document.getElementById("welcomeMessage").classList.remove("invisible");
    document.getElementById("errorMessage").classList.add("invisible");
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", "Bella");
    localStorage.setItem("password", "qwe123");
  } else {
    document.getElementById("errorMessage").classList.remove("invisible");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }
}

if (loggedIn) { //uppdatera sidans utseende baserat på om användaren är inloggad eller inte
  document.getElementById("loginForm").classList.add("invisible");
  document.getElementById("welcomeMessage").classList.remove("invisible");
} else {
  document.getElementById("loginForm").classList.remove("invisible");
  document.getElementById("welcomeMessage").classList.add("invisible");
 }

function logOut() { //logga ut funktion
  localStorage.setItem("loggedIn", "false");
  document.getElementById("loginForm").classList.remove("invisible");
  document.getElementById("welcomeMessage").classList.add("invisible");
}


