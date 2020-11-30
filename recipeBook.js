function loadRecipes(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
                for(var recipe of response.Recipes){
                    console.log(recipe.name);
                }
        }
    }
    xmlhttp.open("GET", "recipes.json", true);
    xmlhttp.send();
}