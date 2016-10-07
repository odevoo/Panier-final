
$( document ).ready(function() {
  $('#cart-detail').hide();
  $('#main').hide();
});

$('#btn-intro').click(function(){
  $('#intro').addClass('animated fadeOutDown none');
  $('#main').show();

});

var panier = [];
var salad = {label: "Salade", type: "entrée", prix: 8, img: "img/salad.jpg", qt: 0};
var steak = {label: "Steak", type: "plat", prix: 15, img: "img/steak.jpg", qt: 0};
var icecream = {label: "Glace", type: "dessert", prix: 5, img: "img/icecream.jpg", qt: 0};
var drink = { label: "Boisson", type: "Boisson", prix: 5, img: "img/drink.jpg", qt: 0};
var fish = {label: "poisson", type: "plat", prix: 5, img: "img/fish.jpg", qt: 0};
var cheese = {label: "fromage", type: "dessert", prix: 5, img: "img/cheese.jpg", qt: 0};


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
  updatepanier(article);
}

function updatepanier(article) {
  var totalPrix =0;
  for(var i = 0; i < panier.length; i++) {
    totalPrix += panier[i].prix;
    }

  $('#totarticle').text("  " + panier.length + "  ");
  $('#totprice').text("   " + totalPrix + "   ");
  
  article.qt += 1;

  ajouterLigneDetail(article);

}


function ajouterLigneDetail(article) {
  tr = $("<tr></tr>");

  if (article.qt == 1) {

  var tdImage = $("<td></td>");

  var img = $("<img>");
  img.attr("src", article.img);

  tdImage.append(img);

  tr.append(tdImage);
  

  var tdLabel = $("<td></td>");
  var label = $("<span></span>");
  label.text(article.label);
  tdLabel.append(label);
  tr.append(tdLabel);
  

  var tdType = $("<td></td>");
  var type = $("<span></span>");
  type.text(article.type);
  tdType.append(type);
  tr.append(tdType);

  

  var tdqantity = $("<td></td>");
  quantity = $("<span></span>");
  quantity.text(article.qt);
  quantity.attr("id", "QT-" + article.label);
  tdqantity.append(quantity);
  tr.append(tdqantity);
  
  

  var tdPrix = $("<td></td>");
  var prix = $("<span></span>");
  prix.text(article.prix.toString());
  tdPrix.append(prix);
  tr.append(tdPrix);

  var tdPrixTotal = $("<td></td>");
  prixTotal = $("<span></span>");
  prixTotal.text(article.prix*article.qt);
  prixTotal.attr("id", "PX-" + article.label);
  tdPrixTotal.append(prixTotal);
  tr.append(tdPrixTotal);
  
  $('#cart-detail-table').append(tr);

}
else if (article.qt > 1) {
  $("#QT-" + article.label).text(article.qt);
  $("#PX-" + article.label).text(article.prix*article.qt);
}

}

