<script>
export default {
    props:{ 
        value: {
            type: Number,
            default: 0
            }
        },
    data() {
        return {
            count: this.value
        }
    },
    methods: {
        agregar() {
            this.count++
            this.updateValue()
        },
        quitar() {
            if (this.count>0){
                this.count--
                this.updateValue()

            }
        },
        updateValue() {
            this.$emit('input', this.count);
            console.log('cantidad:' + this.count)
        },
    },
}
</script>
<template>
    <div class="comp__cantidad">
        <input v-model="count" @input="updateValue" type="number" maxlength="4" step="1">
        <div class="masmenos">
            <button @click="agregar">+</button>
            <button @click="quitar">-</button>
        </div>
    </div>
</template>
