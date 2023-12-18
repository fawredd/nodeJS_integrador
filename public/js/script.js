// Defino funciones para eventos de objetos propios
const sumaCantidad = (e,button) => {
  e.preventDefault() // Evitar el envío del formulario por defecto
  const input_cantidad = button.parentNode.parentNode.querySelector('#input_cantidad')
  let cantidad = Number(input_cantidad.value)
  cantidad++
  input_cantidad.value = cantidad
  console.log('Aumento a ' + input_cantidad.value)
}

const restaCantidad = (e,button) => {
  e.preventDefault() // Evitar el envío del formulario por defecto
  const input_cantidad = button.parentNode.parentNode.querySelector('#input_cantidad')
  let cantidad = Number(input_cantidad.value)
  if (cantidad >= 1) {
    cantidad -= 1
  }
  input_cantidad.value = cantidad
  console.log('Disminuye a ' + input_cantidad.value)
}
const verificaCantidad = (cual) => {
  const input_cantidad = cual.parentNode.querySelector('#input_cantidad')
  const cantidad = Number(input_cantidad.value)
  if (cantidad >= 1) {
    input_cantidad.value = cantidad.toFixed(0)
  } else {
    input_cantidad.value = 0
  }
  console.log('Se establece a ' + input_cantidad.value)
}

// Inicializo el slider Glide
if (!(document.querySelector('.glide') == null)) {
  new Glide('.glide',
    {
      type: 'carousel',
      startAt: 0,
      perView: 4,
      breakpoints: {
        991: {
          perView: 2
        },
        768: {
          perView: 1
        }
      }
    }
  ).mount()
}

// MENU NAVBAR RESPONSIVE
function changeMenu () {
  const menuH = document.querySelector('.menu__h')
  menuH.classList.toggle('active')
  const menuList = document.querySelector('.navbar__menu')
  if (menuList.style.display != 'flex'){
    menuList.style.display = 'flex'
  } else {
    menuList.style.display = 'none'
  }
}
window.addEventListener('resize', () => {
  const menuH = document.querySelector('.menu__h')
  menuH.classList.remove('active')
  const menuList = document.querySelector('.navbar__menu')
  menuList.removeAttribute("style");
})

// CONFIRMA ELIMINACION DE PRODUCTO
function EliminaItem(e,boton){
  e.preventDefault() // Evitar el envío del formulario por defecto
  const result = confirm('¿Estás seguro de que deseas continuar?')
  if (result) {
    // Continuar con el envío del formulario
    const formulario = boton.parentNode
    formulario.submit()
  } else {
    // Cancelar el envío del formulario
  }
}
