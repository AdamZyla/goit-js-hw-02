// Zadanie 4. Dostawa towaru


function getShippingCost(country){


    switch(country){
        case "China":
            price = 100;
            break;

        case "Chile":
            price = 250;
            break;
        
        case "Australia":
            price = 170;
            break;

        case "Jamaica":
            price = 120;
            break;

        default:
            return "Sorry, there is no delivery to your country";
    }
    
    return `"Shipping to ${country} will cost ${price} credits"`;
    }

    console.log(getShippingCost("Australia"));
    console.log(getShippingCost("Germany"));
    console.log(getShippingCost("China"));
    console.log(getShippingCost("Chile"));
    console.log(getShippingCost("Jamaica"));
    console.log(getShippingCost("Sweden"));



//         "Shipping to Australia will cost 170 credits"
// VM263:30 Sorry, there is no delivery to your country
// VM263:31 "Shipping to China will cost 100 credits"
// VM263:32 "Shipping to Chile will cost 250 credits"
// VM263:33 "Shipping to Jamaica will cost 120 credits"
// VM263:34 Sorry, there is no delivery to your country