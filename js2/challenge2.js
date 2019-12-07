function vowelCount(str1)

{
    var vowelList = 'aeiouAEIOU';
    var vCount = 0;
   
    
    for(var x = 0; x < str1.length ; x++)
    {
      if (vowelList.indexOf(str1[x]) !== -1)
      {
        vCount += 1;
  
      }
    
    }
    return vCount;
  }
  
  function showOnlyVowels(string) {
     return Array.prototype.filter.call(string, char => "aeiou".includes(char)).join("")
    
            
   }
    
         
    
    console.log(showOnlyVowels("Junior"), vowelCount("Junior")) ;
  