//My Code
function descendingOrder(n){
    var num = n.toString().split('').map(iNum => parseInt(iNum, 10));
    num.sort();
    num.reverse();
    var numF = '';
    for(let i = 0; i < num.length; i++){
        numF = numF + num[i];
    }
    numF = parseInt(numF);
    return numF;
    }
    descendingOrder(9182732);

    //Code War Solution
function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
    }