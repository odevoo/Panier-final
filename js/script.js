
$( document ).ready(function() {
  $('#cart-detail').hide();
  $('#main').hide();
  $('#description-salad').hide();
  $('#description-steak').hide();
  $('#description-glace').hide();
  $('#description-boissons').hide();
  $('#description-poissons').hide();
  $('#description-fromage').hide();
});

$('#btn-intro').click(function(){
  $('#intro').addClass('animated fadeOutDown none');
  $('#main').show();

});

var panier = [];
var salad = {label: "Salade", type: "entrée", prix: 8, img: "img/salad.jpg"};
var steak = {label: "Steak", type: "plat", prix: 15, img: "img/steak.jpg"};
var icecream = {label: "Glace", type: "dessert", prix: 5, img: "img/icecream.jpg"};
var drink = { label: "Boisson", type: "Boisson", prix: 5, img: "img/drink.jpg"};
var fish = {label: "poisson", type: "plat", prix: 5, img: "img/fish.jpg"};
var cheese = {label: "fromage", type: "dessert", prix: 5, img: "img/cheese.jpg"};

var saladQt = {qt: 0};
var steakQt = {qt: 0};
var icecreamQt = {qt: 0};
var drinkQt = {qt: 0};
var fishQt = {qt: 0};
var cheeseQt = {qt: 0};

$('#img-Salade').on('mouseover', function(){  $('#description-salad').show(); });
$('#img-Steak').on('mouseover', function(){  $('#description-steak').show(); });
$('#img-Glace').on('mouseover', function(){  $('#description-glace').show(); });
$('#img-Boisson').on('mouseover', function(){  $('#description-boissons').show(); });
$('#img-poisson').on('mouseover', function(){  $('#description-poissons').show(); });
$('#img-fromage').on('mouseover', function(){  $('#description-fromage').show(); });
$('#description-salad').on('mouseout', function(){  $('#description-salad').hide(); });
$('#description-steak').on('mouseout', function(){  $('#description-steak').hide(); });
$('#description-glace').on('mouseout', function(){  $('#description-glace').hide(); });
$('#description-boissons').on('mouseout', function(){  $('#description-boissons').hide(); });
$('#description-poissons').on('mouseout', function(){  $('#description-poissons').hide(); });
$('#description-fromage').on('mouseout', function(){  $('#description-fromage').hide(); });

$('#btn-menu-salad').on('click', function() { ajouterArticle(salad, saladQt); });
$('#btn-menu-steak').on('click', function() { ajouterArticle(steak, steakQt); });
$('#btn-menu-glace').on('click', function() {  ajouterArticle(icecream, icecreamQt); });
$('#btn-menu-boissons').on('click', function() { ajouterArticle(drink, drinkQt); });
$('#btn-menu-poissons').on('click', function() { ajouterArticle(fish, fishQt); });
$('#btn-menu-fromage').on('click', function() { ajouterArticle(cheese, cheeseQt); });

$(document).on("click", "#addBtn-Salade", function(){ ajouterArticle(salad, saladQt); });
$(document).on('click', '#addBtn-Steak', function() { ajouterArticle(steak, steakQt); });
$(document).on('click', '#addBtn-Glace', function() {  ajouterArticle(icecream, icecreamQt); });
$(document).on('click', '#addBtn-Boisson', function() { ajouterArticle(drink, drinkQt); });
$(document).on('click', '#addBtn-poisson', function() { ajouterArticle(fish, fishQt); });
$(document).on('click', '#addBtn-fromage', function() { ajouterArticle(cheese, cheeseQt); });

$(document).on("click", "#reBtn-Salade", function(){ supprimerArticle(salad, saladQt); });
$(document).on('click', '#reBtn-Steak', function() { supprimerArticle(steak, steakQt); });
$(document).on('click', '#reBtn-Glace', function() {  supprimerArticle(icecream, icecreamQt); });
$(document).on('click', '#reBtn-Boisson', function() { supprimerArticle(drink, drinkQt); });
$(document).on('click', '#reBtn-poisson', function() { supprimerArticle(fish, fishQt); });
$(document).on('click', '#reBtn-fromage', function() { supprimerArticle(cheese, cheeseQt); });


$('#cart-top').on('click', function() {
  $('#cart-detail').toggle();
});


function ajouterArticle(article, articleQt) {
  panier.push(article);
  updatepanier(article, articleQt);
}

function updatepanier(article, articleQt) {
  var totalPrix =0;
  for(var i = 0; i < panier.length; i++) {
    totalPrix += panier[i].prix;
  }
  $('#totarticle').text("  " + panier.length + "  ");
  $('#totprice').text("   " + totalPrix + "   ");
  articleQt.qt += 1;
  ajouterLigneDetail(article, articleQt);
}


function ajouterLigneDetail(article, articleQt) {
  tr = $("<tr></tr>");

  if (articleQt.qt == 1) {
    var tdImage = $("<td></td>");
    var img = $("<img>");
    img.attr("src", article.img);
    tdImage.append(img);
    tr.append(tdImage);
    tr.attr("id", "TR-" + article.label);
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
    quantity.text(articleQt.qt);
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
    prixTotal.text(article.prix*articleQt.qt);
    prixTotal.attr("id", "PX-" + article.label);
    tdPrixTotal.append(prixTotal);
    tr.append(tdPrixTotal);

    var tdAddButton = $("<td></td>");
    addButton = $("<button></button>");
    addButton.text("Ajouter");
    addButton.attr("id", "addBtn-" + article.label);
    addButton.addClass("btn-cart");
    tdAddButton.append(addButton);
    tr.append(tdAddButton);

    var tdReButton = $("<td></td>");
    reButton = $("<button></button>");
    reButton.text("Retirer");
    reButton.attr("id", "reBtn-" + article.label);
    reButton.addClass("btn-cart");
    tdReButton.append(reButton);
    tr.append(tdReButton);

    
    $('#cart-detail-table').append(tr);
  }
  else if (articleQt.qt > 1) {
    $("#QT-" + article.label).text(articleQt.qt);
    $("#PX-" + article.label).text(article.prix*articleQt.qt);
  }
}


function supprimerArticle(article, articleQt) {
  var i = 0;
  var firstId = -1;
  if (articleQt.qt > 0) {

    while((i < panier.length) && (firstId == -1)) {
      if(panier[i] == article) {
        firstId = i;
      }
      i++;
    }
    if(firstId >= 0) {
      panier.splice(firstId, 1);
    }
    articleQt.qt--;
    updatePanierRemove(article, articleQt);

  }
}

function updatePanierRemove(article, articleQt){

  var totalPrix =0;
  for(var i = 0; i < panier.length; i++) {
    totalPrix += panier[i].prix;
  }
  $('#totarticle').text("  " + panier.length + "  ");
  $('#totprice').text("   " + totalPrix + "   ");

  supprimerLigneDetail(article, articleQt);

}

function supprimerLigneDetail(article, articleQt) {
  if (articleQt.qt > 0) {
    
    $("#QT-" + article.label).text(articleQt.qt);
    $("#PX-" + article.label).text(article.prix*articleQt.qt);

  }
  else if (articleQt.qt < 1) {
    
   $("#TR-" + article.label).closest('tr').remove();

 }

}




