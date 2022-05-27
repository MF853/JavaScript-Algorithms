function sum(a, b){
    return a + b;
}
let sum2 = (a, b) => a + b
//console.log(sum2( 1, 2));



function isPositive(number){
    return number >= 0
}
let isPositive2 = number => number >= 0
//console.log(isPositive2(1));



function randomNumber(){
    return Math.random()
}
let randomNumber2 = () => Math.random();
//console.log(randomNumber2());



document.addEventListener('click', function(){
    console.log('Click')
})

document.addEventListener('click', ()=>{
    console.log('Click')
})