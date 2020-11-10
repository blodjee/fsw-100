function getdetails() {
    var a = document.forms["details"]["name"].value;
    var b = document.forms["details"]["age"].value;
    var c = document.forms["details"]["pet"].value;
    alert("Hi my name is " + a + " " + "i am " + b + "years old, my favorite pet is " + c);
}
// document.getElementsByTagName("button").value = "";