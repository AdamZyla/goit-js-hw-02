    // Zadanie 2. Formatowanie wiadomości

    function formatMessage(message, maxLength){

    if (message >= maxLength){
        return message;
    }
    else{
        return message.slice(0, maxLength) + "...";
    }

    }

    console.log(formatMessage("Curabitur ligula sapien", 16)); 
    console.log(formatMessage("Curabitur ligula sapien", 23)); 
    console.log(formatMessage("Vestibulum facilisis purus nec", 20)); 
    console.log(formatMessage("Vestibulum facilisis purus nec", 30)); 
    console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); 
    console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); 


// VM125:20 Curabitur ligula...
// VM125:21 Curabitur ligula sapien...
// VM125:22 Vestibulum facilisis...
// VM125:23 Vestibulum facilisis purus nec...
// VM125:24 Nunc sed turpis...
// VM125:25 Nunc sed turpis a felis in nunc fringilla...