<template>
    <div 
        class="card-main" 
        ref="interactElement"
        v-bind:style="{'transform': `${translate} ${rotate}`}"
    >
    </div>
</template>

<script>
import interact from 'interactjs'

export default {
    name: 'DraggableCard',

    props: [

    ],

    data: function() {
        return {
            maxTiltDistance: 400,
            maxTilt: 60,
            position: {
                x: 0,
                y: 0,
            },
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
            onmove: event => {
                this.setPosition(
                    this.position.x + event.dx,
                    this.position.y + event.dy
                );
            },
            onend: () => {
                this.setPosition(0,0); //reset position
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
        width: 200px;
        height: 400px;

        background-color: brown;
        border-radius: 20px;
    }

</style>