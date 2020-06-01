<template>
    <div>

        <h1>Gallery</h1>

            

        <div class="gallery-grid">

            <div 
                v-bind:class="{'image-card': true, 'image-tall': [2,6].includes(i), 'image-wide': [2,9,16].includes(i)}" 
                v-for="i in 20" :key="i"
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

        grid-template-columns: repeat(auto-fit, minmax(var(--grid-size),1fr));
        grid-auto-rows: var(--grid-size);
    }

    .image-card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all .3s;

        height: 100%;
        width: 100%;

        background-color: black;
        color: white;
    }

    .image-card:hover {
        transform: scale(1.1);
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