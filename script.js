
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

//Coffee Items//

const coffeeMenu = {
    "product": [{
        "name": "mocha",
        "description": "mocha flavor",
        "price": 20,
        "discountedPrice": 15,
        "image": "images/mocha.jpg",
    },
    {
        "name": "frappe",
        "description": "praffe flavor",
        "price": 15,
        "discountedPrice": 10,
        "image": "images/frappe.jpg",
    },
    {
        "name": "espresso",
        "description": "espresso flavor",
        "price": 12,
        "discountedPrice": 10,
        "image": "images/espresso.jpg",

    },
    {
        "name": "cappuccino",
        "description": "cappuccino flavor",
        "price": 18,
        "discountedPrice": 15,
        "image": "images/cappuccino.jpg",
    },
    {
        "name": "milkshake",
        "description": "milkshake flavor",
        "price": 16,
        "discountedPrice": 15,
        "image": "images/coffeemilkshake.jpg",
    },
    {
        "name": "icedcoffee",
        "description": "icedcoffee",
        "price": 12,
        "discountedPrice": 10,
        "image": "images/icedcoffee.jpg",
    },
    {
        "name": "milkcoffee",
        "description": "milkcoffee",
        "price": 12,
        "discountedPrice": 10,
        "image": "images/img1.jpg",
    }
    ]
}

function showProducts() {
    for (let coffee of coffeeMenu.product){
        var cardElement=`<div class='card'>
        <div class="image-container"><img src="${coffee.image}" class="product-images" /></div>
        <div class="description">
          <div class="product-name">${coffee.name}</div>
          <div class="product-price">
            <div style="flex-grow:1">$${coffee.discountedPrice}    <span class="original-price">$${coffee.price}</span></div>
            <div><button class="order-button" onclick="addOrder(this)" >Order</button></div>
        </div>
        </div>
      </div>`
      document.getElementsByClassName('flex-container')[0].innerHTML+=cardElement;
    }
}
showProducts();

//modal script
// Select modal
var mpopup = document.getElementById('mpopupBox');

// Select close action element
var close = document.getElementsByClassName("close")[0];

// Open modal once the link is clicked
function openModal() {
    mpopup.style.display = "block";
};

// Close modal once close element is clicked
close.onclick = function() {
    mpopup.style.display = "none";
};

// Close modal when user clicks outside of the modal box
window.onclick = function(event) {
    if (event.target == mpopup) {
        mpopup.style.display = "none";
    }
};
function addOrder(addcoffee){
    var modalBody = document.getElementsByClassName("modal-body")[0];
    var orderPar = `${addcoffee.parentElement.parentElement.parentElement.getElementsByClassName('product-name')[0].innerHTML}<br>`
    modalBody.innerHTML+=orderPar;
}



