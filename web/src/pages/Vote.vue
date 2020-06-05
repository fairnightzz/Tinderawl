<template>
    <div>

        <div style="display: flex; align-items: center; justify-content: center;"> 

            <h3>{{cards.length>0?`Pics remaining: ${cards.length}`:'All done!'}}</h3>
            
            <draggable-card 
                v-for="ind in (this.cards.length>=2?2:this.cards.length)" 
                :key="cards[ind-1]" 
                v-bind:style="{'z-index': -(ind-1)}"
                :isCurrent="(ind-1) === 0"
                :imageURL="cards[ind-1]"
                ref="draggableCard"
                @destroyCard="removeCard"
            />

            <button class="circle-button" @click.prevent="onRejectButton">
                <font-awesome-icon style="color: grey" icon="times" size="2x" />	
            </button>

            <button class="circle-button" @click.prevent="onAcceptButton">
                <font-awesome-icon style="color: pink" icon="heart" size="2x" />	
            </button>
                
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
            cards: [ ]
            
        }
    },

    methods: {
        removeCard() {
            this.cards.shift();
            console.log('event: destroy card');
            
            console.log(this.cards)
        },
        onAcceptButton() {
            if (this.$refs.draggableCard[0] == null) { return; }
            this.$refs.draggableCard[0].handleAccept();
        },
        onRejectButton() {
            if (this.$refs.draggableCard[0] == null) { return; }
            this.$refs.draggableCard[0].handleReject();
        }
    },

    mounted: function() {
        
        UserService.getVotingPictures()
        .then(
            data => {
                console.log(data);
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

    .circle-button {
        width: 4rem;
        height: 4rem;
        appearance: none;
        outline: 0;
        border: 0;
        border-radius: 50%;

        box-shadow: 0 1px 5px black;
    }

    .circle-button:active {
        background-color: rgb(230,230,230);
    }

</style>