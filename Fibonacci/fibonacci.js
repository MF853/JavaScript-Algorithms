function fibonacci(num){
    console.log('Fibonacci Sequence:')
    let a = 1, b = 0, nextTerm;
    let array = [];
    for(let i = 0; i < num; i++){
        nextTerm = a + b;
        b = a;
        a = nextTerm;
        array.push(nextTerm);
    }
    console.log(array);
}
var input = prompt("Enter number of terms: ");
fibonacci(input);
// 1,1,2,3,5,8,13,21,34,55