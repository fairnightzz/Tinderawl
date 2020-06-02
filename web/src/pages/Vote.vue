<template>
    <div>
        <h1>Vote</h1>

        <div style="text-align: center"> 
            <draggable-card 
                v-for="(card,i) in cards" 
                :key="card" 
                v-bind:style="{'z-index': -i}"
                :isCurrent="i === 0"
                :title="card.title"
                @destroyCard="removeCard"
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

    data: function() {
        return {
            cards: [
                {
                    title: 'card1'
                },
                {
                    title: 'card2'
                },
                {
                    title: 'card3'
                },
                {
                    title: 'card4'
                },
            ]
        }
    },

    methods: {
        removeCard: function() {
            this.cards.shift();
            console.log('event: destroy card');
            
            console.log(this.cards)
        }
    }
}
</script>

<style scoped>

</style>