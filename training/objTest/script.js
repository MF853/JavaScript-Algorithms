let object = {
    string: 'string', boolean: true, number: 1, array: ['array'], objectInterno:{objectInterno: 'objeto interno'}
};
console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, boolean, objectInterno} = object;
console.log(string,boolean,objectInterno);