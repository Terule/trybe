function createElement(element, parent) {
  let tag = document.createElement(element)
  parent.appendChild(tag)
}

let selectBody = document.querySelector('body')
let numeros = [
  'um',
  'dois',
  'três',
  'quatro',
  'cinco',
  'seis',
  'sete',
  'oito',
  'nove',
  'dez'
]

createElement('h1', selectBody)
let selectH1 = document.querySelector('h1')
selectH1.innerText = 'Exercício 5.2 - JavaScript DOM'

createElement('main', selectBody)
let selectMain = document.querySelector('main')
selectMain.classList.add('main-content')

createElement('section', selectMain)
let selectSection = document.querySelector('section')
selectSection.classList.add('center-content')
createElement('p', selectSection)
let p = document.querySelector('p')
p.innerText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit in quaerat at quisquam voluptate officiis itaque iste ipsam, ab delectus autem sit non eligendi laboriosam quasi atque architecto. Laudantium, blanditiis?'

createElement('section', selectMain)
createElement('section', selectMain)
let listOfSection = document.querySelectorAll('section')
listOfSection[1].classList.add('left-content')
listOfSection[2].classList.add('right-content')
let selectCenter = document.querySelector('.center-content')
let selectLeft = document.querySelector('.left-content')
let selectRight = document.querySelector('.right-content')

createElement('img', selectLeft)
let selectImg = document.querySelector('img')
selectImg.src = 'https://picsum.photos/200'
selectImg.classList.add('small-image')

createElement('ul', selectRight)
let selectUl = document.querySelector('ul')
for (let index = 1; index <= 10; index += 1) {
  createElement('li', selectUl)
}

let listOfLi = document.querySelectorAll('li')
for (let index = 0; index < listOfLi.length; index += 1) {
  listOfLi[index].innerText = numeros[index]
}

for (let index = 1; index <= 3; index += 1) {
  createElement('h3', selectMain)
}

let listOfH3 = document.querySelectorAll('h3')
listOfH3[0].innerText = 'Loren'
listOfH3[1].innerText = 'Ipsum'
listOfH3[2].innerText = 'Dolor'

selectH1.className = 'title'

for (let index = 0; index < listOfH3.length; index += 1) {
  listOfH3[index].className = 'description'
}

selectMain.removeChild(selectLeft)
selectRight.style = 'margin-right: auto'

selectMain.style = 'background: green'

for (let index = 0; index < listOfLi.length; index += 1) {
  if (
    listOfLi[index].innerText === 'nove' ||
    listOfLi[index].innerText === 'dez'
  ) {
    selectUl.removeChild(listOfLi[index])
  }
}
