const cart = {
    currentPrice: 0,
    items: [],
    addItem: function(cookie, price) {
        // add a cookie (string) to the items array
        this.items.push(cookie)

        //add the price (number) to the currentPrice properties
        this.currentPrice= this.currentPrice + price 


    },
    clear: function() {
        //reset the currentPrice and items properties
        this.currentPrice= 0
        this.items= []
    },

    getSummary: function() {
        let summary = `<p>Number of Items: ${this.items.length}</p>
            <h4>Details</h4>
            <p>${this.items.join('<br>')}</p>
            <p>Total Price: $${this.currentPrice}</p>`
        return summary
    },
}


function addToCart(cookie) {
    /* 
        PRICES
        peanut butter: 20
        sandies: 30
        party press: 35
        chocolate chip: 25
    */
   
   
   console.log('The user is adding this type of cookie to their cart: ' , cookie) 


   if (cookie == 'peanut butter'){cart.addItem(cookie, 20)}
   if (cookie == 'sandies') {cart.addItem(cookie, 30)}
   if (cookie == 'party press') {cart.addItem(cookie, 35)}
   if (cookie == 'chocolate chip') {cart.addItem(cookie, 25)}


document.querySelector(".hoverText").innerHTML = cart.currentPrice
    console.log(cart)
    document.getElementById("cartItems").innerHTML= cart.items.length
}

function checkout() {
    console.log('User is checking out.')
    
    window.alert(`Item Count: ${cart.items.length} Total Cost: ${cart.currentPrice}`)
    document.getElementById("summary-body").innerHTML= cart.getSummary
    document.getElementById("summary").style.display= block
    cart.clear()
    document.querySelector(".hoverText").innerHTML = cart.currentPrice
    console.log(cart)
    document.getElementById("cartItems").innerHTML= cart.items.length

}

function darkMode() {
    document.querySelector("body").style.color = "white"
    document.querySelector("body").style.backgroundColor = "black"

} 

function clearCart() {
    cart.clear()
    document.querySelector(".hoverText").innerHTML = cart.currentPrice
    console.log(cart)
    document.getElementById("cartItems").innerHTML= cart.items.length
}

clearcart.addEventListener("click", clearCart)