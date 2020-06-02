<template>
    <div>
        <h1>Vote</h1>

        <div style="text-align: center"> 
            <draggable-card style="margin: auto;"></draggable-card>
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