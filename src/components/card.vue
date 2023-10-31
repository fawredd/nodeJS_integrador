<script>
export default {
  props:['items']
}
</script>
<template>
    <li class="ul__item" v-for="item in items">
        <article>
            <a  class="ul__articulos" href="#">
            <picture>
                    <img :src="item.image" :alt="item.alt">
            </picture>
            <div class="ul__descripcion">
                    <p>{{item.brand}}</p>
                    <h4>{{item.title}}</h4>
                    <p>{{item.price}}</p>
                    <p>{{item.payment}}</p>
            </div>
            <span class="articulos__sticker">{{item.sticker}}</span>
            </a>   
        </article>
    </li>
</template>