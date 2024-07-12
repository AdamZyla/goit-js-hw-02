// Zadanie 3. Sprawdzanie spamu


function checkForSpam(message){

    const lowerCaseMessage = message.toLowerCase();
    
return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale");

}


console.log(checkForSpam("Latest technology news")); 
console.log(checkForSpam("JavaScript weekly newsletter")); 
console.log(checkForSpam("Get best sale offers now!")); 
console.log(checkForSpam("Amazing SalE, only tonight!")); 
console.log(checkForSpam("Trust me, this is not a spam message")); 
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); 
console.log(checkForSpam("[SPAM] How to earn fast money?")); 


//         false
// VM133:9 false
// VM133:10 true
// VM133:11 true
// VM133:12 true
// VM133:13 true
// VM133:14 true