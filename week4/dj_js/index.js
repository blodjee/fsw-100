
const colors = () => {
    const randomColor = Math.floor(Math.random()*16333).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }
  
  change.addEventListener("click", colors);
  colors();