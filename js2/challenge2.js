
    const vowels = ['a','e','i','o','u','A','E','I','O','U']; // List of Vowels
    var vowelsOnly =[];// I  am declaring the array going to store the vowels
    var duplicateVowels = "";// declaring an empty string going to contain the number of the duplicated vowels
   
    function vowelCount(str1){
        for (const letter of str1) {
        for (const vowel of vowels) {
          if (vowel===letter) {
            if(vowelsOnly.includes(letter)){// checking if vowel already exists in our string
             ++duplicateVowels
            }else{
              vowelsOnly+= letter;
            }
            
          }
        } 
          }
          return ( `('${vowelsOnly}', ${duplicateVowels})`); 
        }
    
      console.log(vowelCount("Amaaaaazingg"));