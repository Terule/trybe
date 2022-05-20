let number1 = 5
for (let indexOne = 1; indexOne <= number1; indexOne += 1) {
  let line = ''
  for (let indexTwo = 1; indexTwo <= indexOne; indexTwo += 1) {
    line += '*'
  }
  console.log(line)
}

let number2 = 5
for (let indexOne = 0; indexOne <= number2; indexOne += 1) {
  let line = ''
  for (let indexTwo = number2; indexTwo >= 1; indexTwo -= 1) {
    if (indexTwo > indexOne){
      line += ' '
    } else{
      line += '*'
    }
  }
  console.log(line)
}



let pyramid = 10;
    let result = "";
    for(let i = 1 ; i <= pyramid ; i++) {
        for(j = pyramid ; j > i ; j--) {
          result += " ";
        }
        for(j = 1 ; j<= i ; j++) {
          result += '*' + " ";
        }
        result += "\n";
    }
    console.log(result);