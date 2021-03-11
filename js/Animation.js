
// AOS.init();

var regreso = document.getElementById("regreso");
var boxicon = document.getElementById("boxicon");
regreso.addEventListener("mouseover", () => {
    boxicon.className = "boxicon";
},  false)
regreso.addEventListener("mouseout", () => {
    boxicon.className = "boxicon2";
},  false)