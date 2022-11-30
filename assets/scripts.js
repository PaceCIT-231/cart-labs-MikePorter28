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
   

   document.getElementById("cartItems").innerHTML= itemCount

   if (cookie == "peanut butter") {
    currentPrice = currentPrice + 20
} else if (cookie == "sandies") {
    currentPrice = currentPrice + 30
} else if ( cookie == "party press") {
    currentPrice = currentPrice + 35
} else if (cookie = "chocolate chip") {
    currentPrice = currentPrice + 25
}

document.querySelector(".hoverText").innerHTML = currentPrice


   console.log(currentPrice)
}

function checkout() {
    console.log('User is checking out.')
    //Let your customer know how many items they are purchasing and the price

    prompt(`What is your Name and Address so we can ship your items to you?`)
    currentPrice = 0
    itemCount = 0

    document.getElementById("cartItems").innerHTML= itemCount
    document.querySelector(".hoverText").innerHTML = currentPrice

}

function darkMode() {
    document.querySelector("body").style.color = "white"
    document.querySelector("body").style.backgroundColor = "black"

} 