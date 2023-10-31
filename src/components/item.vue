<script>
export default {
  props:['datos']
}
</script>
<template>
    <article class="item">
        <picture>
                <img :src="datos.image" :alt="datos.alt">
        </picture>
        <div class="item__descripcion">
                <p class="desc__brand">{{datos.brand}}</p>
                <h4 class="desc__title">{{datos.title}}</h4>
                <p class="desc__alt">{{datos.alt}}</p>
                <p class="desc__price">{{datos.price}}</p>
                <div class="datosCompra">
                  <cantidad :value="0"></cantidad>
                </div>
                <div class="metodosDePago">
                        <p>Ver metodos de pago</p>
                        <span>-</span>
                        <p>{{datos.payment}}</p>
                </div>
        </div>
        <span class="articulos__sticker">{{datos.sticker}}</span>
    </article>
</template>