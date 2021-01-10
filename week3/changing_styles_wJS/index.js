var data = ["dog", "cat", "mouse", "fish", "pig"];
var deet = "";
var i;
for (i = 0; i < data.length; i++) {
    deet += data[i] + "<br>";
}
document.getElementById("elem").innerHTML = deet;
document.getElementById("elem").style.fontSize = "20px";
document.getElementById("elem").style.fontWeight = "lighter";
document.getElementById("elem").style.fontFamily = "sans-serif";
document.getElementById("elem").style.color = "cornflowerblue";

document.getElementById("elem").classList.add("border");c