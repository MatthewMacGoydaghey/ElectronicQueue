
let divs = document.querySelectorAll('.terminal-operationDiv')
    let terminalDiv = document.querySelector('.terminal-operationsGrid')
    let terminalUpperText = document.querySelector('.terminal-upperText')
    let num = 1;

    let nameInput = document.querySelector('.nameInput')
    let inputButton = document.querySelector('.inputButton')
    
    let display = document.querySelector('.infoDisplay-clientsDiv')

let clients = [];


class View {
  constructor(value) {
this.value = value
  }



  setEvents() {
    let divs = document.querySelectorAll('.terminal-operationDiv')
    let terminalDiv = document.querySelector('.terminal-operationsGrid')
    let terminalUpperText = document.querySelector('.terminal-upperText')

  divs.forEach((div) => {
  div.addEventListener('click', () => {
  let view = new View()
  view.setNameInput(div)
  })
  })}

setNameInput(div) {
  terminalUpperText.innerHTML = '<p style="margin-left: 55px;">Enter your name</p>'
  terminalDiv.innerHTML = `<div class="input-div">
  <p class="p-text" style="margin-bottom: 20px">${div.innerText}-type operation</p>
  <div class="inputInnerDiv"><input class="nameInput" type="text"></div>
  <button class="inputButton" onclick="
  let view = new View()
  view.displayClient('${div.innerText}')
  view.returnMenu()
  view.updatePCs()
 ">Enter</button>
  </div>`
  }


  displayClient(Type, Op) {
    if (Op === undefined) {
      let date = new Date()
      
let input = document.querySelector('.nameInput')
if (input.value === '') {
  input.value = 'Unknown'
}
let object = {
  number: num,
  name: input.value,
  opType: Type,
  time: `${date.getHours()}:${date.getMinutes()}`
}

let controller = new Controller()
controller.displayClient(object)
num++}

let divs = document.querySelectorAll(`.infoDisplay-clientDiv`)
display.innerHTML = '';
  for (let i = 1; i <= clients.length; i++) {
    let obj = clients[i - 1]
    let clas;
    for (let div of divs) {
      if (div.classList[1] === `num${obj.number}`) {
        if(div.classList.contains('highlighted')) {
         clas = 'highlighted'
        } else {
          clas = '-'
        }}}
let Cdiv = `<div class="infoDisplay-clientDiv num${obj.number} ${clas}">
<div class="display-numberC"><p style="margin-left: 5px;">№${obj.number}</p></div>
<div class="display-nameC"><p style="margin-left: 5px">${obj.name}</p></div>
<div class="display-opTypeC"><p style="margin-left: 10px">${obj.opType}</p></div>
<div class="display-timeC"><p style="margin-left: 20px;">${obj.time}</p></div>
</div>`
display.innerHTML += Cdiv
}

if (Type === 'highlight') {
  let divs = document.querySelectorAll(`.infoDisplay-clientDiv`)
  let n = 0;
  for (let div of divs) {
  if (div.classList.contains(`num${clients[n].number}`) && !div.classList.contains('highlighted')) {
    div.classList.add('highlighted')
    break
  } else {
    n++
  }
  }
  }

}


  returnMenu() {
    terminalDiv.innerHTML = `
  <div class="terminal-operationDiv"><p class="terminal-operationText">A</p></div>
  <div class="terminal-operationDiv"><p class="terminal-operationText">B</p></div>
  <div class="terminal-operationDiv"><p class="terminal-operationText">C</p></div>
  <div class="terminal-operationDiv"><p class="terminal-operationText">D</p></div>`
  terminalUpperText.innerHTML = `<p style="margin-left: 25px;">Choose operation type</p>`

  this.setEvents()
  }


  updatePCs(N) {
    let divs = document.querySelectorAll(`.infoDisplay-clientDiv`)
    let n = 0;
    let result = 'no'
    for (let div of divs) {
      if (div.classList.contains('highlighted')) {
      n++}
      if (n === clients.length) {
        result = 'yes'
      }
    }
    if (clients.length === 0 || result === 'yes') {
      for (let i = 1; i < 5; i++) {
        let PC = document.querySelector(`.PC${i}`)
        if (PC.classList.contains('AC') || PC.classList.contains('NoC')) {
          PC.classList.remove('AC')
          PC.classList.add('NoC')
        PC.innerHTML = `
        <p class="PC${i}Status">No clients</p>
        `}
    }}
    if (clients.length > 0 && result === 'no') {
      for (let i = 1; i < 5; i++) {
        let PC = document.querySelector(`.PC${i}`)
if (PC.classList.contains('NoC')) {
  PC.classList.remove('NoC')
  PC.classList.add('AC')
  PC.innerHTML = `
  <p class="PC${i}Status">Client Avalable</p>
  <button class="PC${i}Button BAC" onclick="
  view.updatePCs('${i}')
  view.updatePCs()">Accept</button>
`
}}} 
if (!(N === undefined)) {
let PC = document.querySelector(`.PC${N}`)
if (PC.classList.contains('AC')) {
PC.classList.remove('AC')
PC.classList.add('CC')
PC.innerHTML = `
<p class="PC${N}Status">${clients[0].name}</p>
  <button class="PC${N}Button BCC" onclick="
  let PC${N} = document.querySelector('.PC${N}')
  PC${N}.classList.remove('CC')
PC${N}.classList.add('NoC')
  view.updatePCs()">Done</button>
`



let controller = new Controller
controller.removeObject(0)
this.displayClient('highlight', 'remove')
}
}
  }

   }


let view = new View
view.setEvents()