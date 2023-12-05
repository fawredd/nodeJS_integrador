console.log('JS del Front-end')

//Inicializo el slider Glide
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

const agregarACarrito = (id) => {
    let cantidad = document.querySelector("#input_cantidad")
    cart.items.push({"id":id,"cantidad":cantidad.value})
    let itemsCarrito = document.querySelector("#itemsEnCarrito")
    let totalItems = 0;
    cart.items.forEach(elemento => {
        totalItems += Number(elemento.cantidad)
    });
    itemsCarrito.innerHTML = totalItems
    console.log("Agrego "+ cantidad.value +" items del id "+ id + " al carrito")
    cantidad.value = 0
}

const loadCart = (cart) => {
    axios.get('/carto/', {
        params: {
          cart: JSON.stringify(cart)
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
}