//Sorteio Mega Sena

let jogo = 6
let numerosEscolidos = [25, 9, 43, 34, 15, 57]

function megaSena(jogo, numerosEscolidos) {
  let numerosSorteados = []
  let acertos = 0

  function Sorteio() {
    let sorteio = Math.floor(Math.random() * 60) + 1

    return sorteio
  }

  //Verifica se o número sorteado está no array de números escolhidos
  function verificaNumero(numero) {
    for (let i = 0; i < numerosEscolidos.length; i++) {
      if (numero == numerosEscolidos[i]) {
        return true
      } else {
        return false
      }
    }
  }

  //sorteia um número e verifica se ele está no array de números sorteados. Se não estiver, adiciona na array de números sorteados
  while (numerosSorteados.length < jogo) {
    let sorteio = Sorteio()
    let verifica = verificaNumero(sorteio)

    if (verifica == false) {
      numerosSorteados.push(sorteio)
    }
  }

  //compara o array de números sorteados com o array de números escolhidos. 
  //Se o número sorteado estiver no array de números escolhidos, imprima na tela.
  for (let i = 0; i < numerosSorteados.length; i++) {
    for (let j = 0; j < numerosEscolidos.length; j++) {
      if (numerosSorteados[i] == numerosEscolidos[j]) {
        acertos += 1
      }
    }
  }
  return 'Números sorteados: ' + numerosSorteados + '\n' + 'Acertos: ' + acertos
}

console.log(
  'Números escolhidos: ' +
    numerosEscolidos +
    '\n' +
    megaSena(jogo, numerosEscolidos)
)
