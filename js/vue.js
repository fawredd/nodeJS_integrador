import { createApp, ref } from 'vue'
import card from './card.js'
import item from './item.js'
// Vuetify
/* import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
}) */

const app = createApp({
    data() {
        return {
            items:[
              {
                "image": "/img/star-wars/trooper-1.webp",
                "alt": "Figura coleccionable Funko de un Stormtrooper",
                "title": "STORMTROOPER LIGHTSABER",
                "brand": "STAR WARS",
                "price": "$ 1799,99.-",
                "payment": "3 CUOTAS SIN INTERÉS",
                "sticker": "NUEVO"
              },
              {
                "image": "/img/pokemon/pidgeotto-1.webp",
                "alt": "Figura coleccionable Funko de Pidgeotto",
                "title": "PIDGEOTTO",
                "brand": "POKEMON",
                "price": "$ 1799,99.-",
                "payment": "3 CUOTAS SIN INTERÉS",
                "sticker": "NUEVO"
              },
              {
                "image": "/img/harry-potter/luna-1.webp",
                "alt": "Figura coleccionable Funko de Luna Lovegood",
                "title": "LUNA LOVEGOOD LION MASK",
                "brand": "HARRY POTTER",
                "price": "$ 1799,99.-",
                "payment": "3 CUOTAS SIN INTERÉS",
                "sticker": "NUEVO"
              }
            ]
        }
    },
    components: {
      card,
      item
    },
})
/* app.use(vuetify) */
app.mount('#app')
app.config.errorHandler = (err) => {
    /* handle error */
    console.log(err)
  }