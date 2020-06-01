<template>
    <div>

        <h1>Gallery</h1>

            

        <div class="gallery-grid">

            <div 
                v-for="i in 20" :key="i"
                v-bind:class="{'image-card': true, 'image-tall': [2,6].includes(i), 'image-wide': [2,9,16].includes(i)}" 
                v-bind:style="{'--animation-order': i}"
            >Item {{i}}</div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'Gallery'
}
</script>

<style scoped>
    
    .gallery-grid {

        --grid-size: 200px;

        display: grid;
        gap: 1rem;
        padding: 1rem;

        grid-template-columns: repeat(auto-fit, minmax(var(--grid-size),1fr));
        grid-auto-rows: var(--grid-size);
    }

    .image-card {

        --animation-duration: 500ms;
        --animation-stagger: 50ms;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all .3s;

        animation: load-image;
        animation-duration: var(--animation-duration);
        animation-delay: calc(var(--animation-order) * var(--animation-stagger));
        animation-fill-mode: backwards;

        height: 100%;
        width: 100%;

        background-color: black;
        color: white;

    }

    .image-card:hover {
        transform: scale(1.1);
    }

    @keyframes load-image {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    }

    @media screen and (min-width: 600px) {
        .image-tall {
            grid-row: span 2 / auto;
        }

        .image-wide {
            grid-column: span 2 / auto;
        }
    }

</style>