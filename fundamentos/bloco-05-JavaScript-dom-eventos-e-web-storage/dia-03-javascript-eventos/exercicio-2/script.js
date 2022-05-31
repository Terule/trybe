function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado'
  ]
  const weekDaysList = document.querySelector('.week-days')

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index]
    const dayListItem = document.createElement('li')
    dayListItem.innerHTML = days

    weekDaysList.appendChild(dayListItem)
  }
}

createDaysOfTheWeek()

// Escreva seu código abaixo.

const selectDaysUl = document.querySelector('#days')

function createMonthDays() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
  ]
  for (let index = 0; index < dezDaysList.length; index += 1) {
    const day = document.createElement('li')
    day.innerText = dezDaysList[index]
    day.classList.add('day')
    selectDaysUl.appendChild(day)

    if (
      dezDaysList[index] === 24 ||
      dezDaysList[index] === 25 ||
      dezDaysList[index] === 31
    ) {
      day.classList.add('holiday')
    }
    if (
      dezDaysList[index] === 4 ||
      dezDaysList[index] === 11 ||
      dezDaysList[index] === 18 ||
      dezDaysList[index] === 25
    ) {
      day.classList.add('friday')
    }
  }
  let listOfLi = document.querySelectorAll('.day')
  listOfLi[0].style.opacity = '40%'
  listOfLi[1].style.opacity = '40%'
}

createMonthDays()

const selectButtonsContainer = document.querySelector('.buttons-container')

function createButton(btnName, id, parent) {
  let button = document.createElement('button')
  button.innerText = btnName
  button.id = id
  parent.appendChild(button)
}

createButton('Feriado', 'btn-holiday', selectButtonsContainer)

let listOfHoliday = document.querySelectorAll('.holiday')
const btnHolidays = document.querySelector('#btn-holiday')

function colorHoliday() {
  for (let index = 0; index < listOfHoliday.length; index += 1) {
    if (listOfHoliday[index].style.background === '') {
      listOfHoliday[index].style.background = 'green'
      listOfHoliday[index].style.color = 'white'
    } else {
      listOfHoliday[index].style.background = ''
      listOfHoliday[index].style.color = ''
    }
  }
}
btnHolidays.addEventListener('click', colorHoliday)

createButton('Sexta-feira', 'btn-friday', selectButtonsContainer)

let listOfFriday = document.querySelectorAll('.friday')
const btnFriday = document.querySelector('#btn-friday')

function textFriday() {
  const array = ['4', '11', '18', '25']
  for (let index = 0; index < listOfFriday.length; index += 1) {
    if (listOfFriday[index].innerText === array[index]) {
      listOfFriday[index].innerText = 'sexta-feira'
    } else {
      listOfFriday[index].innerText = array[index]
    }
  }
}
btnFriday.addEventListener('click', textFriday)

let selectDays = document.querySelectorAll('.day')
function zoomIn() {
  for (let index = 0; index < selectDays.length; index += 1) {
    selectDays[index].addEventListener('mouseenter', function () {
      selectDays[index].style.fontSize = '30px';
    })
  }
}
zoomIn()

function zoomOut() {
  for (let index = 0; index < selectDays.length; index += 1) {
    selectDays[index].addEventListener('mouseleave', function () {
      selectDays[index].style.fontSize = ''
    })
  }
}
zoomOut()

const selectTaskContainer = document.querySelector('.my-tasks')
function createTaskSpam(string,parent){
  let task = document.createElement('spam')
  task.innerText = string
  parent.appendChild(task)
}
function createTaskDiv(taskColor,parent){
  let taskDiv = document.createElement('div')
  taskDiv.classList.add('task')
  taskDiv.style.backgroundColor = taskColor
  parent.appendChild(taskDiv)
}

createTaskSpam('Cozinhar',selectTaskContainer)
createTaskDiv('blue',selectTaskContainer)
createTaskSpam('Programar',selectTaskContainer)
createTaskDiv('green',selectTaskContainer)

function selectTaskColor() {
  let tasks = document.getElementsByClassName('task')
  for (let task of tasks) {
        task.addEventListener('click', function () {
        if (task.className === 'task'){
          task.classList.add('selected')
        } else {
          task.classList.remove('selected')
        }
      })
  }
}
selectTaskColor()

function addTaskColorToDay() {
  let tasksSelected = document.getElementsByClassName('task selected')
  for (let index = 0; index < selectDays.length; index += 1) {
    selectDays[index].addEventListener('click', function () {
      if (tasksSelected.length < 1) {
        alert('Selecione pelo menos uma tarefa')
      } else if (tasksSelected.length > 1) {
        alert('Mais de uma tarefa selecionada. Selecione apenas 1 por vês')
      } else {
        if (selectDays[index].style.backgroundColor === '') {
          selectDays[index].style.backgroundColor = tasksSelected[0].style.backgroundColor
          selectDays[index].style.color = 'white'
        }else{
          selectDays[index].style.backgroundColor = ''
          selectDays[index].style.color = ''
        }
      }
    })
  }
}
addTaskColorToDay()
