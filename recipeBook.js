window.addEventListener('DOMContentLoaded', function(event) {
    setupModal();
});
function loadRecipes(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var recipeListElement = document.getElementById("recipeList");
                for(var recipe of response.Recipes){
                    //<li><input type="radio">Soup</input></li>
                    var li = document.createElement("li");
                    var input = document.createElement("input");
                    input.setAttribute("type","radio");
                    li.appendChild(input);
                    li.appendChild(document.createTextNode(recipe.name));
                    recipeListElement.appendChild(li);
                    console.log(recipe.name);
                }
        }
    }
    xmlhttp.open("GET", "recipes.json", true);
    xmlhttp.send();
}
function loadRecipeBook(){}
function saveRecipeBook(){}
function addRecipe(recipe){}
function setupModal(){
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("addRecipeButton");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    loadRecipes();
}