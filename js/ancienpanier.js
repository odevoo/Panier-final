var caddy = [];
var total = 0;

function clickfruit() {
  if(this.id == 'banana') {
  addfruit(1);
  }
  if(this.id == 'melon') {
  addfruit(2);
  }
  if(this.id == 'pear') {
  addfruit(3);
  }
}

document.getElementById('banana').addEventListener("click", clickfruit);
document.getElementById('melon').addEventListener("click", clickfruit);
document.getElementById('pear').addEventListener("click", clickfruit);

function addfruit(price) {

  total += price;
  caddy.push(price);

  document.getElementById('caddy-text').innerHTML = caddy.length;
  document.getElementById('price-text').innerHTML = total.toString();
  detail();
}

function detail() {
  var totalbanana = 0;
  var totalmelon = 0;
  var totalpear = 0;

  for(var i = 0; i < caddy.length; i++) {
  if(caddy[i] == 1) {
  totalbanana++;
  document.getElementById('text-banana').innerHTML = totalbanana;

  }
  if(caddy[i] == 2) {
  totalmelon++;
  document.getElementById('text-melon').innerHTML = totalmelon;

  }
  if(caddy[i] == 3) {
  totalpear++;
  document.getElementById('text-pear').innerHTML = totalpear;

  }
  }
}