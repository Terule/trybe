//Exercício 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.
let a = 10
let b = 5

function sum(a, b) {
  return a + b
}

function sub(a, b) {
  return a - b
}

function mult(a, b) {
  return a * b
}

function div(a, b) {
  return a / b
}

function rest(a, b) {
  return a % b
}

console.log(
  'A soma é',
  sum(a, b) +
    '\n A subtração é' +
    sub(a, b) +
    '\n A multiplicação é' +
    mult(a, b) +
    '\n A divisão é' +
    div(a, b) +
    '\n O resto é',
  +rest(a, b)
)

//Exercício 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
const c = 10
const d = 5

function maior(c, d) {
  if (c > d) {
    return c
  } else {
    return d
  }
}

console.log('O maior número é', maior(c, d))

// Exercício 3 - Faça um programa que retorne o maior de três números.
const e = 10
const f = 5
const g = 3

function maior3(e, f, g) {
  if (e > f && e > g) {
    return e
  } else if (f > e && f > g) {
    return f
  } else {
    return g
  }
}

console.log('O maior número é', maior3(e, f, g))

//Exercício 4 - Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const h = 10

function positivo(h) {
  if (h > 0) {
    return 'positive'
  } else if (h < 0) {
    return 'negative'
  } else {
    return 'zero'
  }
}

console.log('O número é', positivo(h))

//Exercício 5 - Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
const i = 90
const j = 60
const k = 45

function angulo(i, j, k) {
  if (i + j + k == 180) {
    return true
  } else if (i + j + k != 180) {
    return false
  } else {
    return 'Erro'
  }
}

console.log('O triângulo é', angulo(i, j, k))

//Exercício 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

function chess(l) {
  switch (l.toLowerCase()) {
    case 'pawns':
      return 'Vertically forward one square, with the option to move two squares if they have not yet moved'
      break
    case 'bishops':
      return 'Diagonally any number of squares.'
      break
    case 'knight':
      return 'In an L shape'
      break
    case 'quween':
      return 'Diagonally, horizontally, or vertically any number of squares.'
      break
    case 'rooks':
      return 'Horizontally or vertically any number of squares.'
      break
    case 'king':
      return 'one square in any direction, so long as that square is not attacked by an enemy piece.'
      break
  }
}

console.log(chess('pawns'))

//Exercício 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
function grade(number) {
  if (number >= 90) {
    return 'A'
  } else if (number >= 80) {
    return 'B'
  } else if (number >= 70) {
    return 'C'
  } else if (number >= 60) {
    return 'D'
  } else if (number >= 50) {
    return 'E'
  } else {
    return 'F'
  }
}

console.log(grade(90))

//Exercício 8 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
const m = 10
const n = 5
const o = 3

function par(m, n, o) {
  if (m % 2 == 0 || n % 2 == 0 || o % 2 == 0) {
    return true
  } else {
    return false
  }
}

console.log(par(m, n, o))

//echo Exercício 9 - Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
const p = 10
const q = 5
const r = 3

function impar(p, q, r) {
  if (p % 2 != 0 || q % 2 != 0 || r % 2 != 0) {
    return true
  } else {
    return false
  }
}

console.log(impar(p, q, r))

//Exercício 10 - Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos. Sobre o custo do produto, incide um imposto de 20%
const custo = 10
const venda = 20
let quantiade = 1000

function lucro(custo, venda, quantiade) {
  return (venda - (custo + custo * 0.2)) * quantiade
}

console.log(lucro(custo, venda, quantiade))

//Exercício 11 - Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
const salarioBruto = 3000.0
const salarioBase = salarioBruto - INSS(salarioBruto)
const salarioLiquido = salarioBase - IR(salarioBase)

function INSS(salario) {
  if (salario <= 1556.94) {
    return salario * 0.08
  } else if (salario >= 1556.95 && salario <= 2594.92) {
    return salario * 0.09
  } else if (salario >= 2594.93 && salario <= 5189.82) {
    return salario * 0.11
  } else {
    return 621.04
  }
}

function IR(salario) {
  if (salario <= 1903.98) {
    return 0
  } else if (salario >= 1903.99 && salario <= 2826.65) {
    return salario * 0.075 - 142.8
  } else if (salario >= 2826.66 && salario <= 3751.05) {
    return salario * 0.15 - 354.8
  } else if (salario >= 3751.06 && salario <= 4664.68) {
    return salario * 0.225 - 636.13
  } else {
    return salario * 0.275 - 869.36
  }
}

console.log('O salário líquido é', salarioLiquido)
