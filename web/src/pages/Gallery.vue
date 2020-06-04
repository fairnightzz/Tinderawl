<template>
    <div>

        <div class="gallery-grid">

            <div 
                v-for="(galleryItem, i) in galleryItems" :key="i"
                v-bind:class="{'image-card': true, 'image-tall': [].includes(i), 'image-wide': [].includes(i)}" 
                v-bind:style="{'--animation-order': i}"
            >
                <!--p>Item {{i}}</p-->
                <!--img src="https://cdn.discordapp.com/avatars/485120501807579144/cab57c05abc948c09aca10ffc25d1301.webp?size=1024"/-->
                <img :src="galleryItem"/>
            </div>

        </div>

    </div>
</template>

<script>
import UserService from '../services/user.service'

export default {
    name: 'Gallery',

    data: function() {
        return {
            /*
            galleryItems: [
                'a','b','c','d','e','f','g','h','i'
            ],
            */
            galleryItems: []
        }
    },

    mounted: function() {
        
        UserService.getGalleryPictures()
        .then(
            data => {
                this.galleryItems = data.pics;
            },
            error => {
                console.log(error);
            }
        );
        
    },
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

        background-color: var(--bg-secondary);
        color: white;

        cursor: pointer;

    }

    .image-card img {
        width: 100%;
        height: 100%;
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