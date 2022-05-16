const grade = Math.floor(Math.random() * 100) + 1

if (grade >= 80) {
  console.log(grade + ' Parabéns, você foi aprovada(o)!')
} else if (grade >= 60) {
  console.log(grade + ' Você está em nossa lista de espera!')
} else {
  console.log(grade + ' Você foi reprovada(o)!')
}
