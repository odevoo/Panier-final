
$( document ).ready(function() {
  $('#cart-detail').hide();
  $('#main').hide();
});

$('#btn-intro').click(function(){
  $('#intro').addClass('animated fadeOutDown none');
  $('#main').show();

});

var total = 0;
var panier = [];
var salad = {label: "Salade composée", type: "entrée", prix: 8, img: "img/salad.jpg", qt: 0};
var steak = {label: "Steak", type: "plat", prix: 15, img: "img/steak.jpg", qt: 0};
var icecream = {label: "Coupe de glace", type: "dessert", prix: 5, img: "img/icecream.jpg", qt: 0};
var drink = { label: "Boisson", type: "Boisson", prix: 5, img: "img/drink.jpg", qt: 0};
var fish = {label: "Assiète de poisson", type: "plat", prix: 5, img: "img/fish.jpg", qt: 0};
var cheese = {label: "Assiète de fromage", type: "dessert", prix: 5, img: "img/cheese.jpg", qt: 0};


$('#img-salad').on('click', clickAcheter);
$('#img-steak').on('click', clickAcheter);
$('#img-icecream').on('click', clickAcheter);
$('#img-drink').on('click', clickAcheter);
$('#img-fish').on('click', clickAcheter);
$('#img-cheese').on('click', clickAcheter);

$('#cart-top').on('click', function() {
  $('#cart-detail').toggle();
});




function clickAcheter() {
  if(this.id == 'img-salad') {
   
    ajouterArticle(salad);
  }
  if(this.id == 'img-steak') {
    ajouterArticle(steak);
  }
  if(this.id == 'img-icecream') {
    ajouterArticle(icecream);
  }
  if(this.id == 'img-drink') {
    ajouterArticle(drink);
  }
  if(this.id == 'img-fish') {
    ajouterArticle(fish);
  }
  if(this.id == 'img-cheese') {
    ajouterArticle(cheese);
  }
}

function ajouterArticle(article) {
  panier.push(article);
  //total += article.prix;

  updatepanier(article);


}

function updatepanier(article) {
  var totalPrix =0;
  for(var i = 0; i < panier.length; i++) {
    totalPrix += panier[i].prix;
    console.log(totalPrix);
  }

  $('#totarticle').text("  " + panier.length + "  ");
  $('#totprice').text("   " + totalPrix/*.toString()*/ + "   ");
  

  
  article.qt += 1;

  ajouterLigneDetail(article);

}


function ajouterLigneDetail(article) {
  var tr = document.createElement("tr");
  
  var tdImage = document.createElement("td");
  var img = document.createElement("img");
  img.src = article.img;
  tdImage.appendChild(img);
  tr.appendChild(tdImage);
  
  var tdLabel = document.createElement("td");
  var label = document.createElement("span");
  label.textContent = article.label;
  tdLabel.appendChild(label);
  tr.appendChild(tdLabel);
  
  var tdType = document.createElement("td");
  var type = document.createElement("span");
  type.textContent = article.type;
  tdType.appendChild(type);
  tr.appendChild(tdType);

  var tdqantity = document.createElement("td");
  var quantity = document.createElement("span");
  quantity.textContent = article.qt;
  tdqantity.appendChild(quantity);
  tr.appendChild(tdqantity);
  
  var tdPrix = document.createElement("td");
  var prix = document.createElement("span");
  prix.textContent = article.prix.toString();
  tdPrix.appendChild(prix);
  tr.appendChild(tdPrix);

  var tdPrixTotal = document.createElement("td");
  var prixTotal = document.createElement("span");
  prixTotal.textContent = article.prix*article.qt;
  tdPrixTotal.appendChild(prixTotal);
  tr.appendChild(tdPrixTotal);
  
  document.getElementById('cart-detail-table').appendChild(tr);
}



/*

function ajouterLigneDetail(article) {

var tr = $(document).append("<tr></tr>")
var tdImage = $(document).append("<td></td>");
var img = $(document).append("<img></img>");

  img.src = article.img;
  tdImage.appendChild(img);
  tr.appendChild(tdImage);


}

*/
