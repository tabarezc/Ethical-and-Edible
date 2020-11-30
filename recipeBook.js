var RecipeBook = {};
window.addEventListener('DOMContentLoaded', function(event) {
    setupModal();
    loadRecipeBook();
});
function loadRecipes(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            var recipeListElement = document.getElementById("recipeList");
                for(var recipe of response.Recipes){
                    var li = document.createElement("li");
                    var input = document.createElement("input");
                    input.setAttribute("type","radio");
                    input.setAttribute("name", "recipes");
                    input.setAttribute("value", recipe.name);
                    li.appendChild(input);
                    li.appendChild(document.createTextNode(recipe.name));
                    recipeListElement.appendChild(li);
                    //console.log(recipe.name);
                }
        }
    }
    xmlhttp.open("GET", "recipes.json", true);
    xmlhttp.send();
}
function loadRecipeBook(){
    RecipeBook = JSON.parse(window.localStorage.getItem("RecipeBook"));
}
function saveRecipeBook(){
    var recipeBookJson = JSON.stringify(RecipeBook);
    window.localStorage.setItem("RecipeBook", recipeBookJson);
}
function addRecipe(recipe, category){
    if(RecipeBook[category]){
        RecipeBook[category].push(recipe);
	}
    else{
     RecipeBook[category] = [];
     RecipeBook[category].push(recipe);
	}
}

function onAddRecipeClicked(){
    var category = document.getElementById("categorySelect").value;
    var recipe = document.querySelector('input[name = "recipes"]:checked').value;
    addRecipe(recipe, category);
    saveRecipeBook();
}
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