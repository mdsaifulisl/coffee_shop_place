let navbarz = document.querySelector('.navbarz');

document.querySelector('#menu-btn').onclick = () =>{
    navbarz.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


let searchForm = document.querySelector('.cearch-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbarz.classList.remove('active');
    cartItem.classList.remove('active');
}


let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbarz.classList.remove('active');
    searchForm.classList.remove('active');
   
}

window.onscroll = () =>{
    navbarz.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

//====================
// cart-item-container
//====================

let cart = document.querySelector("#cart-item");
let span = document.querySelector("#span");
var p = "";

span.addEventListener("click", ()=>{
        cart.innerHTML = p;  
});


let cart1 = document.querySelector("#cart-item1");
let span1 = document.querySelector("#span1");
span1.addEventListener("click", ()=>{
    cart1.innerHTML = p;
});


let cart2 = document.querySelector("#cart-item2");
let span2 = document.querySelector("#span2");
span2.addEventListener("click", ()=>{
    cart2.innerHTML = p;
});

let cart3 = document.querySelector("#cart-item3");
let span3 = document.querySelector("#span3");
span3.addEventListener("click", ()=>{
    cart3.innerHTML = p;
});


    