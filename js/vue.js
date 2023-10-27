import { createApp, ref } from 'vue'

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
    }
})

app.mount('#app')
app.config.errorHandler = (err) => {
    /* handle error */
    console.log(err)
  }