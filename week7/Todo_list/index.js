document.getElementById("addform").addEventListener("submit", function (e) {
    e.preventDefault();
    var title = document.getElementById("title").value;
    var desc = document.getElementById("desc").value;
    document.getElementById("addform").reset();
    var div = document.createElement("div");
    var titleSpan = document.createElement("span");
    titleSpan.textContent = title;
    div.appendChild(titleSpan);
    titleSpan.setAttribute("class", "title");
    var descSpan = document.createElement("span");
    descSpan.textContent = " - " + desc;
    div.appendChild(descSpan);
    descSpan.setAttribute("class", "desc");
    var deleteSpan = document.createElement("span");
    deleteSpan.textContent = " :: X";
    div.appendChild(deleteSpan);
    deleteSpan.setAttribute("class", "delete");
    document.getElementById("list").appendChild(div);
    deleteSpan.addEventListener("click", function(e){
        div.remove();
    })
} )