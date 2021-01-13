document.getElementsByClassName("red-box")[0].addEventListener("mousemove", function(e){
    document.getElementsByClassName("red-box")[0].textContent = e.clientX+","+e.clientY;
})