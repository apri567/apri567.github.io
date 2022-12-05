let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItemsContainer = document.getElementById('cartItemsContainer');
let checkoutBtn = document.getElementById('checkoutBtn');
let listOfItemsInCart = [];
let varId;

function CreateNewItemInCart (id) {
    this.text = document.getElementById(id + "-text");
    this.price = document.getElementById(id + "-price");
    this.newCartItem = document.createElement('div');

    this.newCartItem.className = `cart-item`;
    this.newCartItem.id = id;
    this.newCartItem.innerHTML = `<span class="fas fa-times" id="cross-${id}" onclick="removeItemInCart(${id})"></span><img src="images/${id}.png"><div class="content"><h3>${this.text.innerHTML}</h3><div class="price">${this.price.innerHTML}</div></div>`;
    checkoutBtn.style.display = 'inline-block';
    cartItemsContainer.prepend(this.newCartItem);
}

function create (id) {
    varId = id;
    let newCartItem = new CreateNewItemInCart(varId);
    listOfItemsInCart.push(newCartItem);
    for (let i of listOfItemsInCart) {
        alert(i.text.innerHTML);
    }
    alert(varId);
}

function removeItemInCart (id) {
    alert(varId);
    document.getElementById(varId).remove();
    for (let i = 0; i < listOfItemsInCart.length; i++) {
        // if (listOfItemsInCart[i].newCartItem.id == id) {
        //     alert('a');
        //     listOfItemsInCart.splice(i);
        // }
        if (listOfItemsInCart[i].newCartItem.id == varId) {
            alert('a');
            listOfItemsInCart.shift(i);
        }
        // alert(listOfItemsInCart[i].newCartItem.id);
        // alert(listOfItemsInCart[i].newCartItem.id);
    }
}

// let quantityOfItems = 0;
// let listOfItems = [];
// let price = '';
// let cross

// function createNewItemInCart (id) {
//     quantityOfItems += 1;
//     let text = document.getElementById(id + "-text");
//     let price = document.getElementById(id + "-price");
//     let cartItemsContainer = document.getElementById('cartItemsContainer');
//     let newCartItem = document.createElement('div');
//     let checkoutBtn = document.getElementById('checkoutBtn');
//     newCartItem.className = `cart-item`;
//     newCartItem.id = id;
//
//
//     newCartItem.innerHTML = `<span class="fas fa-times" id="cross-${id}" onclick="deleteItem(cross)"></span><img src="images/${id}.png"><div class="content"><h3>${text.innerHTML}</h3><div class="price">${price.innerHTML}</div></div>`;
//
//     checkoutBtn.style.display = 'inline-block';
//     cartItemsContainer.prepend(newCartItem);
//     console.log(newCartItem.innerHTML);
//     cross = document.getElementById(`cross-${id}`);
//     alert(cross.parentNode);
//     // cross.remove();
//     return false;
// }
// let home = document.getElementById('home');
// home.remove()


// function deleteItem (item) {
//     item.parentNode.remove();
// }

