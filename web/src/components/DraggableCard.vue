<template>
    <div 
        v-bind:class="{'card-main': true, 'animateCardRelease': !this.isInteracting, 'top-card': this.isCurrent}" 
        ref="interactElement"
        v-bind:style="{'transform': `${translate} ${rotate}`}"
    >
        <p>{{this.isCurrent}}</p>
    </div>

</template>

<script>
import interact from 'interactjs'

export default {
    name: 'DraggableCard',

    props: [
        'isCurrent'
    ],

    data: function() {
        return {
            acceptThreshold: 200,
            maxTiltDistance: 400,
            maxTilt: 60,
            position: {
                x: 0,
                y: 0,
            },
            isInteracting: false,
        }
    },

    computed: {
        translate() {
            return `translate(${this.position.x}px,${this.position.y}px)`
        },
        rotate() { //rotation is based on horizontal distance from center
            //normalized distance from middle
            var dist = this.clamp(this.position.x,-this.maxTiltDistance,this.maxTiltDistance)/this.maxTiltDistance;
            var angle = Math.acos(-dist)*180/Math.PI;

            //limit tilt of card
            var tiltBound = (angle > 90) ? 180-this.maxTilt : this.maxTilt;
            var adjustedAngle = (tiltBound > 90) ? this.clamp(angle,90,tiltBound) : this.clamp(angle,tiltBound,90);
            return `rotate(${adjustedAngle-90}deg)`;
        }
    },

    mounted: function() {
        interact(this.$refs.interactElement).draggable({
            //inertia: true,
            onstart: () => {
                this.isInteracting = true;
            },
            onmove: event => {
                this.setPosition(
                    this.position.x + event.dx,
                    this.position.y + event.dy
                );

            },
            onend: () => {

                //check if we are liking or disliking the card
                if (this.position.x < -this.acceptThreshold) {
                    this.setPosition(-1000,this.position.y);
                    
                } else if (this.position.x > this.acceptThreshold) {
                    this.setPosition(1000,this.position.y);

                } else {
                    this.setPosition(0,0); //reset position
                }
                
                this.isInteracting = false;
            },
        });
    },

    beforeDestroy() {
        interact(this.$refs.interactElement).unset();
    },

    methods: {
        setPosition: function(x, y) {
            this.position = {x, y};
        },
        clamp: function(val, min, max) {
            if (val < min) return min;
            if (val > max) return max;
            return val;
        }
    }

}
</script>

<style scoped>

    .card-main {
        position: absolute;
        width: 300px;
        height: 400px;

        left: 50%;
        right: 50%;

        background-color: brown;
        border-radius: 20px;
        margin: auto;
    }

    .animateCardRelease {
        transition: transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .top-card {
        background-color: blue;
        color: white;
    }

    @keyframes animateCardRelease {
        from {
            
        }
        to {

        }
    }

</style>