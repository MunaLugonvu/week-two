function calculateAge(birthYear) {
  
    
    rl.question('Please enter your Year of Birth:', (birthYear) =>{
       
        rl.close();
        
      
        let date = new Date()
        currentYear = date.getFullYear()
        age = currentYear - birthYear;


        if (age < 18) {
            console.log("You are a minor!");

        }

        else if (age > 36) {
            console.log("You are an elder!")
        }
        else {
            console.log("You are an adult!")
        }
    
       
    }
    )}; 

     const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    calculateAge()