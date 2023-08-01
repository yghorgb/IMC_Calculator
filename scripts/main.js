import { Modal } from './modal.js'
import { IMC, notANumber } from './utils.js'

const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const form = document.querySelector('form')
const alertError = document.querySelector('.alert-error')

form.onsubmit = (event) => {
  event.preventDefault()
  const weight = inputWeight.value
  const height = inputHeight.value
  const showError = notANumber(weight) || notANumber(height)

  if (showError) {
    alertError.classList.add('open')
    return
  }
  
  handleInput()
  const result = IMC(weight, height)
  Modal.open()

  Modal.message.innerText = `Seu IMC é de ${result}`
}


window.addEventListener('keydown', handleInput)

function handleInput() {
  alertError.classList.remove('open')
}

