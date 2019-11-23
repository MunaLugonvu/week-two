function fizzBuzz(list1, list2) {
    var sumArrayLengths=list1.length + list2.length;
    
    if(sumArrayLengths%3 == 0 && sumArrayLengths%5!== 0 ){
        return "fizz";
    }
    else if(sumArrayLengths%5 == 0 && sumArrayLengths%3!== 0){
        return "Buzz";
    }
    else if(sumArrayLengths %3 == 0 && sumArrayLengths%5== 0 ){
        return "fizzBuzz" ;
    }
    else if(sumArrayLengths%3!== 0 && sumArrayLengths%5 !== 0){
        return sumArrayLengths ;
    }
}
console.log(fizzBuzz([1, 2, 3,4,5,6,7,8], [1, 2, 3,4,5,6,7,]));

module.exports = fizzBuzz;