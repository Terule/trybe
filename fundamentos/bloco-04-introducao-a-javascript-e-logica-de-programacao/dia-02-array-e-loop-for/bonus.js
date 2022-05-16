let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Ordena o array em ordem crescente.

function cres(numbers){
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let temp = numbers[index]
      numbers[index] = numbers[secondIndex]
      numbers[secondIndex] = temp
    }
  }
}
return numbers
}

function decres(numbers){
  for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let temp = numbers[index]
        numbers[index] = numbers[secondIndex]
        numbers[secondIndex] = temp
      }
    }
  }
  return numbers
  }

console.log(cres(numbers));
console.log(decres(numbers));

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
function newArray(numbers){
let numbers2 = []

for (let index = 0; index < numbers.length; index += 1) {
  if(index == numbers.length - 1){
    numbers2.push(numbers[index]*2)
  } else {
    numbers2.push(numbers[index]*numbers[index+1])
  }
}
return numbers2;
}

console.log(newArray(numbers));