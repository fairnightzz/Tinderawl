<template>
    <div>

        <div style="text-align: center"> 
            <draggable-card 
                v-for="(card,i) in cards" 
                :key="card" 
                v-bind:style="{'z-index': -i}"
                :isCurrent="i === 0"
                :imageURL="card"
                @destroyCard="removeCard"
            />
                
        </div>

    </div>
</template>

<script>
import UserService from '../services/user.service'
import DraggableCard from '../components/DraggableCard.vue'

export default {
    name: 'Vote',

    components: {
        DraggableCard
    },

    data: function() {
        return {
            //cards: [ ]
            cards: ["http://localhost:3000/static/QUiAHEUeHB.jpg",
        "http://localhost:3000/static/JjpJwcEONq.png"]
        }
    },

    methods: {
        removeCard: function() {
            this.cards.shift();
            console.log('event: destroy card');
            
            console.log(this.cards)
        }
    },

    mounted: function() {
        
        UserService.getVotingPictures()
        .then(
            data => {
                this.cards = data.pics;
            },
            err => {
                console.log(err);
            }
        );
        
    }
}
</script>

<style scoped>

</style>