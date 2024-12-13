// Fake giveaway popup for demonstration purposes ONLY
(function () {
    // Create the overlay
    let overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    overlay.style.zIndex = 9999;
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";

    // Create the popup container
    let popup = document.createElement("div");
    popup.style.backgroundColor = "#fff";
    popup.style.padding = "20px";
    popup.style.borderRadius = "10px";
    popup.style.textAlign = "center";
    popup.style.width = "90%";
    popup.style.maxWidth = "400px";
    popup.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";

    // Add the message
    let message = document.createElement("h2");
    message.textContent = "Congratulations!";
    message.style.color = "#333";

    let info = document.createElement("p");
    info.innerHTML = "<b>We are giving away a free Overwolf subscription!</b>";
    info.style.margin = "10px 0";
    info.style.fontSize = "16px";

    // Add input fields for the credit card form
    let inputName = document.createElement("input");
    inputName.type = "text";
    inputName.placeholder = "Enter your full name";
    inputName.style.width = "100%";
    inputName.style.margin = "10px 0";
    inputName.style.padding = "10px";
    inputName.style.border = "1px solid #ccc";
    inputName.style.borderRadius = "5px";

    let inputCardNumber = document.createElement("input");
    inputCardNumber.type = "text";
    inputCardNumber.placeholder = "Enter your credit card number";
    inputCardNumber.style.width = "100%";
    inputCardNumber.style.margin = "10px 0";
    inputCardNumber.style.padding = "10px";
    inputCardNumber.style.border = "1px solid #ccc";
    inputCardNumber.style.borderRadius = "5px";

    let inputExpiry = document.createElement("input");
    inputExpiry.type = "text";
    inputExpiry.placeholder = "Enter card expiry date (MM/YY)";
    inputExpiry.style.width = "100%";
    inputExpiry.style.margin = "10px 0";
    inputExpiry.style.padding = "10px";
    inputExpiry.style.border = "1px solid #ccc";
    inputExpiry.style.borderRadius = "5px";

    let inputCVV = document.createElement("input");
    inputCVV.type = "password";
    inputCVV.placeholder = "Enter CVV";
    inputCVV.style.width = "100%";
    inputCVV.style.margin = "10px 0";
    inputCVV.style.padding = "10px";
    inputCVV.style.border = "1px solid #ccc";
    inputCVV.style.borderRadius = "5px";

    // Add a submit button
    let button = document.createElement("button");
    button.textContent = "Submit";
    button.style.backgroundColor = "#007bff";
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.padding = "10px 20px";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";

    // On button click, show an alert for demonstration purposes
    button.onclick = function () {
        alert("This is a demonstration of potential phishing attacks!");
        document.body.removeChild(overlay);
    };

    // Append elements to the popup
    popup.appendChild(message);
    popup.appendChild(info);
    popup.appendChild(inputName);
    popup.appendChild(inputCardNumber);
    popup.appendChild(inputExpiry);
    popup.appendChild(inputCVV);
    popup.appendChild(button);

    // Append the popup to the overlay and display it
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
})();
