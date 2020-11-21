
var modal = document.createElement("div");
modal.id = "modal";
modal.classList.add("modal");

var content = document.createElement("div");
content.classList.add("modal-content");

var span = document.createElement("span");
span.classList.add("close");
span.innerHTML = "&times;";

var contentFrame = document.createElement("iframe");
contentFrame.setAttribute("src", "mealAndIngredientsInfo.html");
//contentFrame.setAttribute("width", "300");
//contentFrame.setAttribute("height", "300");

content.appendChild(span);
content.appendChild(contentFrame);
modal.appendChild(content);
document.body.appendChild(modal);

var ingredientList = document.getElementById("myingredients");

ingredientList.onclick = function() {
  modal.style.display = "block";
}

modal.onclick = function(event) {
  if(event.target == modal || event.target == span){
    modal.style.display = "none";
  }
}