<script>
export default {
    props:['cantidad']
}
</script>

<template>
    <img src="/img/icons/cart-icon.svg" alt="ícono de carrito">
    <span class="cantidadCarrito">{{ cantidad}}</span>
</template>
