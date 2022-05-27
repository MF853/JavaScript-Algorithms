function toCamelCase(str){

var arr = str.split(/[-_]+/);
var newArr = [];

for (let i = 0; i < arr.length; i++) {
    if(i == 0){
        newArr[i] = arr[i];
    }
    else{
    newArr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
}
console.log(newArr.toString().replace(/,/g,''));
}
toCamelCase('the_stealth_warrior');