function calculateAge(birth_year) {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Please enter your Year of Birth:', (birth_year) =>{
        rl.close();
    })
       
        let date = new Date()
        current_year =date.getFullYear()
        age = current_year -$[birth_year];


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
