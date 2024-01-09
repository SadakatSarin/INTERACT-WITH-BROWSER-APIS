const addProdcut = () => {
    

    const productField = document.getElementById('product-name');

    const quantityField = document.getElementById('product-quantity');


    const product = productField.value;

    const quantity = quantityField.value;

    productField.value = '';
    quantityField.value = '';

    // console.log(product,quantity);



    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);

    
}


const displayProduct = (product, quantity) => {
    

    const ul = document.getElementById('product-container');


    const li = document.createElement('li');

    li.innerText = ` ${product} ${quantity}`;

    ul.appendChild(li);


};



const getStoredShoppingCart = () => {
     
    const storedCart = localStorage.getItem('cart');
    let cart = {};
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }

    return cart;

}


const saveProductToLocalStorage = (product, quantity) => {
    
    const cart = getStoredShoppingCart();

    cart[product] = quantity;

    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);

    


}




const displayProductsFromLocalStorage = () => {
    
    const savedCart = getStoredShoppingCart();
    // console.log(savedCart);

    for (const product in savedCart) {
        
        const quantity = savedCart[product];

        console.log(product, quantity);
        
        displayProduct(product,quantity);
        
    }
}


        
    




const removeItem = () => {

    const removeInputField = document.getElementById('removeInput');

    const removeInputFieldValue = removeInputField.value;
    
    removeInputField.value = '';

   
    
    const storedCart = JSON.parse(localStorage.getItem('cart')) || {};
    
    if (removeInputFieldValue in storedCart) {
        delete storedCart[removeInputFieldValue];
        localStorage.setItem('cart', JSON.stringify(storedCart));

        console.log(`Key '${removeInputFieldValue}' removed from the cart.`);
    } else {
        console.log(`Key '${removeInputFieldValue}' not found in the cart.`);
    }

};




displayProductsFromLocalStorage();







//! multiple solution


// const removeItem = () => {



//     const removeInputField = document.getElementById('removeInput');

//     const removeInputFieldValue = removeInputField.value;
    
//     removeInputField.value = '';

//     console.log(removeInputField);
//     const storedCart = localStorage.getItem('cart');

//     const previousStoredCart = JSON.parse(storedCart);
    
    
//         if (previousStoredCart.hasOwnProperty(removeInputFieldValue)) {
            
//             delete previousStoredCart[removeInputFieldValue ];
    
//             localStorage.setItem('cart', JSON.stringify(previousStoredCart));
    
//             console.log(`Key '${removeInputFieldValue }' removed from the cart.`);
//         } else {
//             console.log(`Key '${removeInputFieldValue }' not found in the cart.`);
//         }

    

// };