class Person {
    constructor(name){
        this.name = name
    }

    printNameArrow(){
        setTimeout(() => {
            console.log('Arrow: ' + this.name)
        }, 100)
    }

    printNameFunciton(){
        setTimeout(function(){
            console.log('Funtion: ' + this.name)
        },100)
    }
}

let person = new Person('Bob')
person.printNameArrow()
person.printNameFunciton()
//console.log(this.name);