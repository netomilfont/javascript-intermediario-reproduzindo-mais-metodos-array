//Método forEach --------
const arrayForEach = [10, 20, 30, 44, 55]; // array para iteração do método

//array em que nossa callback vai colocar os números multiplicados
const arrayVazio = [];
//nossa callback
function callbackForEach(element) {
  return arrayVazio.push(element * 2);
}

function forEach(array, callback) {
  for(let i = 0; i < array.length; i++) {

    callback(array[i])

  }
}

console.log(forEach(arrayForEach, callbackForEach));
console.log(arrayVazio);
console.log("---------------------------------")

//Método Find --------
const arrayFind = [12, true, "alfafa", 4, 5]; // array para iteração do método

//nossa primeira callback testa se o elemento é maior que 2 e menor que 12
function callbackFind(element) {
  if (element > 2 && element < 12) {
    return true;
  }
}

//nossa segunda callback testa se existe algum elemento maior que 15
function callbackFindTwo(element) {
  if (element > 15) {
    return true;
  }
}

function find(array, callback) {
  
  for(let i = 0; i < array.length; i++) {

    if(callback(array[i]) == true) {
      return array[i]
    } else if ( callback(array[i] == false)){
      return undefined
    }
  }
}
console.log(find(arrayFind, callbackFind));
console.log(find(arrayFind, callbackFindTwo));
console.log("---------------------------------")

//Método IndexOf --------

const arrayIndexOf = [595, 206, "apollo", false, null, undefined, 8]; // array para iteração do método

//primeira callback que procura algum elemento que seja uma string
function callbackIndexOf(element) {
  return typeof element === "string" && true;
}

//segunda callback que testa se existe algum elemento igual a 3 no array
function callbackIndexOfTwo(element) {
  return element == 3 && true;
}

function indexOf(array, callback) {
  
  for(let i = 0; i < array.length; i++) {

    if(callback(array[i]) == true) {
      return i
    } 
    
  }

  return -1
}
console.log(indexOf(arrayIndexOf, callbackIndexOf));
console.log(indexOf(arrayIndexOf, callbackIndexOfTwo));
console.log("---------------------------------")


//Método Includes --------

const arrayIncludes = [53, 2, "duck", NaN, 456, 7]; // array para iteração do método

//callback que procura algum elemento no array maior que 500
function callbackIncludesArray(element) {
  return element > 500 && true;
}

//callback que procura no elemento string se o conjunto de caracteres é encontrado
function callbackIncludesString(element) {
  return element === "duck" && true;
}

function includes(array, callback) {
  for(let i = 0; i < array.length; i++) {

    if(callback(array[i]) == true) {

      return true
    }
  }

  return false
}

console.log(includes(arrayIncludes, callbackIncludesArray));
console.log(includes(arrayIncludes, callbackIncludesString));
console.log("---------------------------------")

//Método some --------
const arrySome = [12, 82, 563, 414, null]; // array para iteração do método
const callbackSome = (element) => {
  return element > 82 && true;
};

const callbackSome2 = (element) => {
  if (element) {
    return false;
  }
};

function some(array, callback) {
  
  for(let i = 0; i < array.length; i++) {

    if(callback(array[i]) == true) {

      return true
    }
  }

  return false
}

console.log(some(arrySome, callbackSome));
console.log(some(arrySome, callbackSome2));
console.log("---------------------------------")


//Método Join --------

const arrayJoin = ["Fogo", "no", "Parquinho"]; // array para iteração do método

function join(array, value) {
  let string = ''
  for(let i = 0; i < array.length; i++) {

    if(array.length -1 == i) {
      string += array[i]
    } else if (array.length > i) {
      string += array[i] + value 
    }

  }

  return string
}

console.log(join(arrayJoin, " "));
console.log(join(arrayJoin, ""));
console.log(join(arrayJoin, "-"));
