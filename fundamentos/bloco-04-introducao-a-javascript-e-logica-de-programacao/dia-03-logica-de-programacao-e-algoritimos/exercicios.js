//1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Crie um algoritmo que retorne o fatorial de 10.
function factorialize(num) {
  if (num === 0 || num === 1) return 1
  for (var index = num - 1; index >= 1; index -= 1) {
    num *= index
  }
  return num
}
console.log(factorialize(9))

//Criar um algoritmo que inverte uma palavra utilizando um FOR.
function reverseWord(word) {
  var reverse = ''
  for (var index = word.length - 1; index >= 0; index -= 1) {
    reverse += word[index]
  }
  return reverse
}
console.log(reverseWord('casa'))

//Criar algoritmo que retorne a maior palavra em um array.
let array = [
  'java',
  'javascript',
  'python',
  'html',
  'css',
  'otorrinolaringologista'
]

function findLongestWord(array) {
  var longestWord = ''
  for (var index = 0; index < array.length; index += 1) {
    if (array[index].length > longestWord.length) {
      longestWord = array[index]
    }
  }
  return longestWord
}
console.log(findLongestWord(array))

//Criar algoritmo que retorne a menor palavra em um array.
function findShortestWord(array) {
  var shortestWord = ''
  for (var index = 0; index < array.length; index += 1) {
    if (shortestWord.length == 0) {
      shortestWord = array[index]
    } else if (array[index].length < shortestWord.length) {
      shortestWord = array[index]
    }
  }
  return shortestWord
}
console.log(findShortestWord(array))

//escreva um algoritmo que retorne o maior número primo entre 0 e 50.
function findBiggestPrime(num) {
  var biggestPrime = 0
  for (var index = 2; index <= num; index += 1) {
    if (isPrime(index)) {
      biggestPrime = index
    }
  }
  return biggestPrime
}

//funcão que determina se um número é primo
function isPrime(num) {
  for (var index = 2; index < num; index += 1) {
    if (num % index === 0) {
      return false
    }
  }
  return true
}
console.log(findBiggestPrime(100))

//fim
