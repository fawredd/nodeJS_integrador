
export default {
  props:['datos'],
  template: `
    <li class="ul__item">
        <article>
            <a  class="ul__articulos" href="#">
            <picture>
                    <img :src="datos.image" :alt="datos.alt">
            </picture>
            <div class="ul__descripcion">
                    <p>{{datos.brand}}</p>
                    <h4>{{datos.title}}</h4>
                    <p>{{datos.price}}</p>
                    <p>{{datos.payment}}</p>
            </div>
            <span class="articulos__sticker">{{datos.sticker}}</span>
            </a>   
        </article>
    </li>`
}