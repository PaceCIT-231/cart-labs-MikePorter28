let currentPrice=0, itemCount=0

function addToCart(cookie) {
    /* 
        PRICES
        peanut butter: 20
        sandies: 30
        party press: 35
        chocolate chip: 25
    */
   
   console.log('The user is adding this type of cookie to their cart: ' , cookie) 

   itemCount = itemCount + 1
   console.log(itemCount)
   //add 1 to the itemCount variable
   //add the correct price to the currentPrice variable
   if (cookie == "peanut butter") {
    currentPrice = currentPrice + 20
} else if (cookie == "sandies") {
    currentPrice = currentPrice + 30
} else if ( cookie == "party press") {
    currentPrice = currentPrice + 35
} else if (cookie = "chocolate chip") {
    currentPrice = currentPrice + 25
}


   console.log(currentPrice)
}

function checkout() {
    console.log('User is checking out.')
    //Let your customer know how many items they are purchasing and the price
    window.alert(`Item Count: ${itemCount} Total Cost: ${currentPrice}`)
}