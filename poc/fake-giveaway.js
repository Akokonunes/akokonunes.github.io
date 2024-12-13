// Fake giveaway popup for demonstration purposes ONLY
(function () {
    // Create the overlay
    let overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
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
    info.textContent = "We are giving away a free Overwolf subscription!";
    info.style.margin = "10px 0";

    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter your credit card number";
    input.style.width = "100%";
    input.style.margin = "10px 0";
    input.style.padding = "10px";
    input.style.border = "1px solid #ccc";
    input.style.borderRadius = "5px";

    let button = document.createElement("button");
    button.textContent = "Submit";
    button.style.backgroundColor = "#007bff";
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.padding = "10px 20px";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";

    button.onclick = function () {
        alert("This is a demonstration of potential phishing attacks!");
        document.body.removeChild(overlay);
    };

    popup.appendChild(message);
    popup.appendChild(info);
    popup.appendChild(input);
    popup.appendChild(button);

    overlay.appendChild(popup);
    document.body.appendChild(overlay);
})();
