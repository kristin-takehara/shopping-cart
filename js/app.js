//console.log("hello world");

var shoppingCart = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out no you.", price: 599.99}];

var pageTitle = document.createElement("h1");
pageTitle.id = "title";
pageTitle.innerHTML = "**ShoppingCart.io**";
document.body.appendChild(pageTitle);

var bigBox1 = document.createElement("div");
bigBox1.className = "box1";
document.body.appendChild(bigBox1);


for(var i=0; i<shoppingCart.length; i++){
var listProduct = document.createElement("div");
listProduct.className = "product1";
listProduct.innerHTML = shoppingCart[i].product;
bigBox1.appendChild(listProduct);

var listDescription = document.createElement("div");
listDescription.className = "description1";
listDescription.innerHTML = shoppingCart[i].description;
bigBox1.appendChild(listDescription);

var listPrice = document.createElement("div");
listPrice.className = "price1";
listPrice.innerHTML = shoppingCart[i].price;
bigBox1.appendChild(listPrice);
}


//subtotal

var any = 0;

for(var i = 0; i<shoppingCart.length; i++){
    any += shoppingCart[i].price;
}
 var listSubtotal = document.createElement("div");
  listSubtotal.id = "subtotal1";
  listSubtotal.innerHTML = "Subtotal " + any;
  bigBox1.appendChild(listSubtotal);

//eventlisteners