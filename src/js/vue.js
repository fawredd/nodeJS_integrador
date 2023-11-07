import { createApp } from 'vue'
import card from '@/components/card.vue'
import item from '@/components/item.vue'
import itemcompra from '@/components/itemCompra.vue'

const app = createApp({
    data() {
        return {
            items:[
              {
                "image": "/img/star-wars/trooper-1.webp",
                "alt": "Figura coleccionable Funko de un Stormtrooper",
                "title": "STORMTROOPER LIGHTSABER",
                "brand": "STAR WARS",
                "price": "1799.99",
                "payment": "3 CUOTAS SIN INTERÉS",
                "sticker": "NUEVO"
              },
              {
                "image": "/img/pokemon/pidgeotto-1.webp",
                "alt": "Figura coleccionable Funko de Pidgeotto",
                "title": "PIDGEOTTO",
                "brand": "POKEMON",
                "price": "1799.99",
                "payment": "3 CUOTAS SIN INTERÉS",
                "sticker": "NUEVO"
              },
              {
                "image": "/img/harry-potter/luna-1.webp",
                "alt": "Figura coleccionable Funko de Luna Lovegood",
                "title": "LUNA LOVEGOOD LION MASK",
                "brand": "HARRY POTTER",
                "price": "1799.99",
                "payment": "3 CUOTAS SIN INTERÉS",
                "sticker": "NUEVO"
              },
              {
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
            }
        }
    },
    components: {
      card,
      item,
      itemcompra,
    },
    methods:{
      updateCart(itemIndex,cantidad){
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
        console.log('Cart:', JSON.stringify(this.cart))
      }
    },
    watch:{
      'cart.cartItems': {
        handler(nuevoValor) {
          document.querySelector("#itemsEnCarrito").innerHTML = nuevoValor;
        }
      }
    }
})

app.config.compilerOptions = {
  isCustomElement: (tag) => tag === 'iconify-icon'
}

app.mount('#app')
app.config.errorHandler = (err) => {
    /* handle error */
    console.log(err)
  }