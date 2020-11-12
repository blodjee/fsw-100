function showInput() {
    var btn = document.createElement("BUTTON");
    document.getElementById('display').innerHTML = document.getElementById("user_input").value;
    btn.innerHTML = "DELETE";
    document.getElementById("display").appendChild(btn);
    btn.style.margin = "0 30px";
    btn.addEventListener('click', () => {
      display.remove();
    });       

    var btn1 = document.createElement("BUTTON");
    document.getElementById('display1').innerHTML = document.getElementById("user_input1").value;
    btn1.innerHTML = "DELETE";
    document.getElementById("display1").appendChild(btn1);
    btn1.style.margin = "0 30px";
    btn1.addEventListener('click', () => {
        display1.remove();
    });

    var form = document.getElementById("myForm");
    form.reset();
}