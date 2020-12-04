/*
var modal = document.createElement("div");
modal.id = "modal";
modal.classList.add("modal");

var content = document.createElement("div");
content.classList.add("modal-content");

var span = document.createElement("span");
span.classList.add("close");
span.innerHTML = "&times;";

var contentFrame = document.createElement("iframe");
//contentFrame.setAttribute("src", "mealAndIngredientsInfo.html");
//contentFrame.setAttribute("width", "300");
//contentFrame.setAttribute("height", "300");

content.appendChild(span);
content.appendChild(contentFrame);
modal.appendChild(content);
document.body.appendChild(modal);
*/

$('#myingredients').on('click', 'li', function() {
  var ingredient = $(this).text();
  modal.style.display = "block";
  document.getElementById('ingredientname').innerHTML = ingredient;
  //console.log(ingredient);

  ///this is broken:
  var xmlhttp2 = new XMLHttpRequest();
  xmlhttp2.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var myArr = JSON.parse(this.responseText);

          //get # of items in array
          var count = myArr.Ingredients.length;

          iName = ingredient.toUpperCase();

          for(var i = 0; i < count; i++){
              if( iName == myArr.Ingredients[i].name.toUpperCase()){
                  $('#altslist').empty();
                  var iname = myArr.Ingredients[i].name;
                  var rating = myArr.Ingredients[i].rating;
                  var type = myArr.Ingredients[i].type;
                  var probs = myArr.Ingredients[i].problems;
                  var alts = myArr.Ingredients[i].alternatives;

                  document.getElementById("ingredientname").innerHTML = iname;
                  document.getElementById("irating").innerHTML = rating;
                  document.getElementById("itype").innerHTML = type;
                  document.getElementById("iprobs").innerHTML = probs;
                  for (var j = 0; j < alts.length; j++){
                      var alt = alts[j];
                      var listItem = document.createElement("li");
                      listItem.textContent = alt;
                      var altList = document.getElementById("altslist");
                      altList.appendChild(listItem);
                  }

                  break;
              //If nothing is found
              } else{
                  document.getElementById("ingredientname").innerHTML = "no matching results";
                  //make sure list of ingredients is cleared from previous searches
                  $('#altslist').empty();
                  $('#irating').empty();
                  $('#itype').empty();
                  $('#iprobs').empty();
              }
          }
      }
  };
  xmlhttp2.open("GET", "ingredients.json", true);
  xmlhttp2.send(); 
});
/*
var ingredientList = document.getElementById("myingredients");

ingredientList.onclick = function() {
  modal.style.display = "block";
}
*/
modal.onclick = function(event) {
  if(event.target == modal || event.target == span){
    modal.style.display = "none";
  }
}
