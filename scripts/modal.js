export const Modal = {
  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  },
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('h2 span'),
  btnClose: document.querySelector('.modal button.close')
}

Modal.btnClose.onclick = () => {
  Modal.close()
}


window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if (event.key == "Escape"){
    Modal.close()
  }
}