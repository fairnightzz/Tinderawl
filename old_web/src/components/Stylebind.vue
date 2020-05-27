<template>
    <div>
        <p v-text="value" :class="styling"></p>
        <button type="button" @click="value+=1">+</button>
        <button type="button" @click="value-=1">-</button>
    </div>
</template>

<script>
export default {
    name: 'Stylebind',

    data: function() {
        return {
            value: 0,
        }
    },

    computed: {
        styling: function() {
            return {
                
                'error': this.value > 10,
                'warning': this.value > 5,
            }
        }
    }
}
</script>

<style scoped>

    .warning {
        background-color: yellow;
    }
    .error {
        background-color: red;
    }
</style>