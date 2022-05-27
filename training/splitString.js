var num = 123456;
var digits = num.toString().split('').map(iNum => parseInt(iNum, 10));
console.log(digits);

var number = 12354987;
output = [];
sNumber = number.toString();
for (let i = 0; i < sNumber.length; i++){
    output.push(+sNumber.charAt(i));
}
console.log(output);