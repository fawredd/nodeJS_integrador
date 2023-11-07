<script>
import cantidad from '@/components/cantidad.vue'

export default {
  components:{
        cantidad
  },
  props: ['datos','value'],
  data() {
    return {
      importe: 0,
      cant: this.value
    }
  },
  methods:{
    emiteValor(valor) {
      this.cant = valor
      this.importe = valor * parseFloat(this.datos.price)
      this.$emit('input', this.cant)
    }
  },
  mounted() {
    this.importe = this.cant * parseFloat(this.datos.price)
  }


}
</script>
<template>
  <div class="compras_tabla compras_tabla_filas">
    <div class="flex-item compra_item">
      <picture>
          <img :src="datos.image" :alt="datos.alt">
      </picture>
      <div class="compras_item__descripcion">
            <p class="desc__title fnt-700">{{datos.title}}</p>
            <p class="desc__brand">{{datos.brand}}</p>
          <p class="desc__price">Precio:&nbsp;{{datos.price}}</p>
      </div>
    </div>
    <div class="flex-item"><cantidad :value="cant" @input="emiteValor">></cantidad></div>
    <div class="flex-item precio_total">{{'$ '+importe.toFixed(2)}}</div>
    <div class="flex-item">
      <iconify-icon icon="zondicons:close-outline" style="color: red;" width="28"></iconify-icon>
    </div>
  </div>
</template>