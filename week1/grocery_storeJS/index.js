
       
    
        let shopper =  {
            man : "lobster",
            woman: "beef",
            price: 150,
            deduct: 25,
            isAvailable: true,
            gorceryCart: ["orange", "peach", "salchichas"],
            finalPrice: function() {
                return this.price - this.deduct
            },
            items: function() {
                return this.man + ' ' + this.woman
            }
           }
         console.log(shopper)

        document.getElementById("man").innerHTML = "The man bought a" + " " + shopper.man;
        document.getElementById("woman").innerHTML = "The woman bought a " + shopper.woman;
        document.getElementById("finalPrice").append(shopper.finalPrice());
        document.getElementById('items').innerHTML  = "Here are the items i bought this week" + " " + shopper.gorceryCart;

