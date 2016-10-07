
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
var salad = {
  label: "Salade composée",
  type: "entrée",
  prix: 8,
  img: "img/salad.jpg"
};
var steak = {
  label: "Steak",
  type: "plat",
  prix: 15,
  img: "img/steak.jpg"
};
var icecream = {
  label: "Coupe de glace",
  type: "dessert",
  prix: 5,
  img: "img/icecream.jpg"
};
var drink = {
  label: "Boisson",
  type: "Boisson",
  prix: 5,
  img: "img/drink.jpg"
};
var fish = {
  label: "Assiète de poisson",
  type: "plat",
  prix: 5,
  img: "img/fish.jpg"
};
var cheese = {
  label: "Assiète de fromage",
  type: "dessert",
  prix: 5,
  img: "img/cheese.jpg"
};




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
    console.log('click');
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
  total += article.prix;

  $('#totarticle').text("  " + panier.length + "  ");
  $('#totprice').text("   " + total.toString() + "   ");
  
  
  //
  //$('#texte-panier').text('J\'ai pris ' + panier.length + ' article(s) pour un total de ' +   + '€');
  ajouterLigneDetail(article);
  //$('#details-panier').show();
}


/*function supprimerArticle(article) {
  var i = 0;
  var firstId = -1;
  while((i < panier.length) && (firstId == -1)) {
    if(panier[i] == article) {
      firstId = i;
    }
    i++;
  }
  if(firstId >= 0) {
    delete panier[firstId];
  }
  rafraichirPanier();
}

*/


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
  
  var tdPrix = document.createElement("td");
  var prix = document.createElement("span");
  prix.textContent = article.prix.toString();
  tdPrix.appendChild(prix);
  tr.appendChild(tdPrix);
  
  document.getElementById('cart-detail-table').appendChild(tr);
}







