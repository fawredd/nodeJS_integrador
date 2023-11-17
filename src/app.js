import { createApp } from 'vue'
import card from '@/components/card.vue'
import item from '@/components/item.vue'
import itemcompra from '@/components/itemCompra.vue'
import VueCookies from 'vue3-cookies';
import { Icon } from '@iconify/vue';

  /* PROVISORIO CONSULTO EL QUERYSTRING DESDE JAVASCRIPT */
  const queryString = window.location.search;

  // Elimino el "?"
  const paramsString = queryString.slice(1);

  // Divido los parametros dentro del querystring
  const paramsArray = paramsString.split("&");
  const params = {};
  paramsArray.forEach(function(param) {
    const paramParts = param.split("=");
    const key = decodeURIComponent(paramParts[0]);
    const value = decodeURIComponent(paramParts[1] || "");
    params[key] = value;
  });

const app = createApp({
    data() {
        return {
            items:[
              {
                "indice": "0",
                "image": "/img/star-wars/trooper-1.webp",
                "alt": "Figura coleccionable Funko de un Stormtrooper",
                "title": "STORMTROOPER LIGHTSABER",
                "brand": "STAR WARS",
                "price": "1799.99",
                "payment": "3 CUOTAS SIN INTERÉS",
                "sticker": "NUEVO"
              },
              {
                "indice": "1",
                "image": "/img/pokemon/pidgeotto-1.webp",
                "alt": "Figura coleccionable Funko de Pidgeotto",
                "title": "PIDGEOTTO",
                "brand": "POKEMON",
                "price": "1799.99",
                "payment": "3 CUOTAS SIN INTERÉS",
                "sticker": "NUEVO"
              },
              {
                "indice": "2",
                "image": "/img/harry-potter/luna-1.webp",
                "alt": "Figura coleccionable Funko de Luna Lovegood",
                "title": "LUNA LOVEGOOD LION MASK",
                "brand": "HARRY POTTER",
                "price": "1799.99",
                "payment": "3 CUOTAS SIN INTERÉS",
                "sticker": "NUEVO"
              },
              {
                "indice": "3",
                "image": "/img/star-wars/baby-yoda-1.webp",
                "alt": "Figura coleccionable de Baby Yoda (Grogu) - The Mandalorian Saga, edición limitada.",
                "title": "BABY YODA BLUEBALL",
                "brand": "STAR WARS",
                "price": "1799.99",
                "payment": "3 CUOTAS SIN INTERÉS",
                "sticker": "NUEVO"
              }
            ],
            cart: {
              items:[],
              cartItems:0,
              importe:0,
              envio:0,
              totalCart:0
            },
            params: params
        }
    },
    components: {
      card,
      item,
      itemcompra,
      Icon,
    },
    methods:{
      updateCart(itemIndex,cantidad){
        if (typeof itemIndex === 'number' && typeof cantidad === 'number') {
        const elemento = this.cart.items.find(elemento => elemento.indice === itemIndex)
        if (elemento) {
          elemento.cantidad = cantidad
          elemento.importe = cantidad * parseFloat(this.items[itemIndex].price)
        } else {
          const nuevoElemento = { indice: itemIndex, cantidad: cantidad, importe: parseFloat(this.items[itemIndex].price)  };
          this.cart.items.push(nuevoElemento);
        }
        let suma = 0
        let importe = 0
        this.cart.items.forEach(item => {
          suma += item.cantidad
          importe += item.importe
        })
        this.cart.cartItems = suma
        this.cart.importe = importe
        this.cart.totalCart = importe + this.cart.envio
        this.$cookies.set('cart', this.cart);
        console.log('app Cart:', JSON.stringify(this.cart))
        } else {
          console.log(`updateCart recibio un dato no esperado: cantidad:${JSON.stringify(cantidad)}`)
        }
      }
    },
    watch:{
      'cart.cartItems': {
        handler(nuevoValor) {
          let carrito = document.querySelector("#itemsEnCarrito")
          if (carrito) { carrito.innerHTML = nuevoValor }
        }
      }
    },
    mounted() {
      if(this.$cookies.isKey('cart')){
        this.cart = this.$cookies.get('cart')
      }
    }
})

app.config.compilerOptions = {
  isCustomElement: (tag) => tag === 'iconify-icon'
}

app.use(VueCookies)

app.mount('#app')
app.config.errorHandler = (err) => {
    /* handle error */
    console.log(err)
  }

  // StarField ;)
// Obtener el lienzo (canvas) del documento HTML
var canvas = document.getElementById("starfield");
var ctx = canvas.getContext("2d");

// Obtener las dimensiones del lienzo
var width = canvas.width;
var height = canvas.height;

// Crear un arreglo para almacenar las estrellas
var stars = [];

// Crear las estrellas
for (var i = 0; i < 100; i++) {
  var star = {
    x: Math.random() * width,    // Posición x aleatoria
    y: Math.random() * height,   // Posición y aleatoria
    size: Math.random() * 3 + 1, // Tamaño aleatorio
    speed: Math.random() * 3 + 1 // Velocidad aleatoria
  };
  stars.push(star);
}

// Función para animar las estrellas
function animate() {
  // Limpiar el lienzo
  ctx.clearRect(0, 0, width, height);

  // Dibujar las estrellas
  for (var i = 0; i < stars.length; i++) {
    var star = stars[i];
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(star.x, star.y, star.size, star.size);

    // Mover la estrella hacia la izquierda
    star.x -= star.speed;

    // Si la estrella se sale del lienzo, reiniciar su posición
    if (star.x < 0) {
      star.x = width;
    }
  }

  // Llamar a la función de animación en el siguiente fotograma
  requestAnimationFrame(animate);
}

// Iniciar la animación
animate();