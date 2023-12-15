// Defino funciones para eventos de objetos propios
const sumaCantidad = (button) => {
    const input_cantidad = button.parentNode.parentNode.querySelector('#input_cantidad');
    let cantidad = Number(input_cantidad.value)
    cantidad++
    input_cantidad.value = cantidad
    console.log("Aumento a " + input_cantidad.value)
}

const restaCantidad = (button) => {
    const input_cantidad = button.parentNode.parentNode.querySelector('#input_cantidad');
    let cantidad = Number(input_cantidad.value)
    if(cantidad>=1) {
        cantidad -= 1
    }
    input_cantidad.value = cantidad
    console.log("Disminuye a " + input_cantidad.value)
}
const verificaCantidad = (cual) => {
  const input_cantidad = cual.parentNode.querySelector('#input_cantidad');
  let cantidad = Number(input_cantidad.value)
  if(cantidad>=1) {
    input_cantidad.value = cantidad.toFixed(0)
  } else {
    input_cantidad.value = 0
  }
  console.log("Se establece a " + input_cantidad.value)
}

//Inicializo el slider Glide
if ( !(document.querySelector('.glide') == null ) ){
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

function changeMenu(){
  var menuH = document.querySelector('.menu__h')
  menuH.classList.toggle('active')
  var menuList = document.querySelector('.navbar__menu')
  menuList.classList.toggle('navbar__menuFlex')
  menuList.classList.toggle('navbar__menuNone')
}

window.addEventListener('resize',() =>{
  var menuH = document.querySelector('.menu__h')
  menuH.classList.remove('active')
  var menuList = document.querySelector('.navbar__menu')
  menuList.classList.toggle('navbar__menuFlex')
  menuList.classList.remove('navbar__menuBlock')
})

