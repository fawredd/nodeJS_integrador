<script>
import cantidad from '@/components/cantidad.vue'
export default {
  components:{
        cantidad
  },
  props:['datos']
}
</script>
<template>
  <div class="compras_tabla compras_tabla_filas">
          <div class="flex-item">DETALLE PRODUCTO</div>
          <div class="flex-item"><cantidad></cantidad></div>
          <div class="flex-item">TOTAL</div>
          <div class="flex-item"><i class="fa-regular fa-circle-xmark"></i></div>
  </div>
</template>