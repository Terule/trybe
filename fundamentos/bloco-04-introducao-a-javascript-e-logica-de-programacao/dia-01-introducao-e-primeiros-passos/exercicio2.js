let patientId = 50
let isEnrolled = true
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos'
}
const patientEmail = 'ana@email.com'

console.log(patientId + ' = ' + typeof patientId)
console.log(isEnrolled + ' = ' + typeof isEnrolled)
console.log(patientInfo.firstName + ' = ' + typeof patientInfo.firstName)
console.log(typeof patientAge)

console.log('--------------------------')

function calc(base, height) {
  const area = base * height
  const perimeter = base * 2 + height * 2

  return 'Area: ' + area + ' / Perimeter: ' + perimeter
}
console.log(calc(5, 5))
