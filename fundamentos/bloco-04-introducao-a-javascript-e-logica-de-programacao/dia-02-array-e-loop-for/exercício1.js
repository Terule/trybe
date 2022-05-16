let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

//Exercício 1 - Percorre o array imprimindo todos os valores nele contidos com a função console.log();
for (let number of numbers) {
  console.log(number)
}
console.log('\n')
console.log('----------------------------------------')
console.log('\n')
//Exercício 2 - Some todos os valores contidos no array e imprima o resultado.
let sum = 0
for (let number of numbers) {
  sum += number
}
console.log(sum)
console.log('\n')
console.log('----------------------------------------')
console.log('\n')
//Exercício 3 e 4 - Calcule e imprima a média aritmética dos valores contidos no array. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let average = sum / numbers.length
if (average > 20) {
  console.log('valor maior que 20')
} else {
  console.log('valor menor ou igual a 20')
}
console.log('\n')
console.log('----------------------------------------')
console.log('\n')

//Exercício 5 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let min = numbers[0]
for (let number of numbers) {
  if (number > min) {
    min = number
  }
}
console.log(min)
console.log('\n')
console.log('----------------------------------------')
console.log('\n')

//Exercício 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let odd = 0
for (let number of numbers) {
  if (number % 2 != 0) {
    odd += 1
  }
}
if (odd == 0) {
  console.log('nenhum valor ímpar encontrado')
} else {
  console.log(odd)
}
console.log('\n')
console.log('----------------------------------------')
console.log('\n')

//Exercício 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o
let menor = numbers[0]
for (let number of numbers) {
  if (number < menor) {
    menor = number
  }
}
console.log(menor)
console.log('\n')
console.log('----------------------------------------')
console.log('\n')

//Exercício 8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let numbers2 = []
for (let index = 1; index <= 25; index += 1) {
  numbers2.push(index)
}
console.log(numbers2)

console.log('\n')
console.log('----------------------------------------')
console.log('\n')

//Exercício 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
for (let number of numbers2) {
  console.log(number / 2)
}