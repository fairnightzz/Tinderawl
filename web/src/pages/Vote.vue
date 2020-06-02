<template>
    <div>
        <h1>Vote</h1>

        <div style="text-align: center"> 
            <draggable-card 
                v-for="i in 5" 
                :key="i" 
                v-bind:style="{'z-index': -i}"
                :isCurrent="i === 1"
            ></draggable-card>
        </div>

    </div>
</template>

<script>
import DraggableCard from '../components/DraggableCard.vue'
export default {
    name: 'Vote',

    components: {
        DraggableCard
    },
}
</script>

<style scoped>

</style>