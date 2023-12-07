// Defino funciones para eventos de objetos propios
const sumaCantidad = () => {
    const input_cantidad = document.querySelector('#input_cantidad');
    let cantidad = Number(input_cantidad.value)
    cantidad++
    input_cantidad.value = cantidad
    console.log("Aumento a " + input_cantidad.value)
}

const restaCantidad = () => {
    const input_cantidad = document.querySelector('#input_cantidad');
    let cantidad = Number(input_cantidad.value)
    if(cantidad>=1) {
        cantidad -= 1
    }
    input_cantidad.value = cantidad
    console.log("Disminuye a " + input_cantidad.value)
}

//Inicializo el slider Glide
if ( !(document.querySelector('.glide') == null ) ){
  new Glide('.glide',
    {
      type: 'carousel',
      startAt: 0,
      perView: 3,
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