function narcissistic(value){
    let ope = value.toString().split('');//individual digits
    var result;//true or flase
    var sum = 0;

    for (let i = 0; i < ope.length; i++) {
        sum = sum + Math.pow(parseInt(ope[i]), ope.length);
    }
    if (sum == value){
        result = true;
    }
    else{
        result = false;
    }
    //console.log(result);
    return result;
  }
  narcissistic(153);

  //Gets number, splits number, calculate each digit to the power of number.length and adds in new variable, compare new variable to value.