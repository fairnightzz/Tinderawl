<template>
    <div>

        <div class="gallery-grid">

            <div 
                v-for="(galleryItem, i) in galleryItems" :key="i"
                v-bind:class="{'image-card': true, 'image-wide': (galleryItem.width>2*galleryItem.height), 'image-tall': (galleryItem.height>2*galleryItem.width), 'image-big': (!(galleryItem.width>2*galleryItem.height))&&(!(galleryItem.height>2*galleryItem.width))&&(Math.random()>0.9)}" 
                v-bind:style="{'--animation-order': i}"
            >
                <!--p>Item {{i}}</p-->
                <!--img src="https://cdn.discordapp.com/avatars/485120501807579144/cab57c05abc948c09aca10ffc25d1301.webp?size=1024"/-->
                <img 
                    :src="galleryItem.url" 
                    :class="[galleryItem.width>galleryItem.height?'image-height-fit':'image-width-fit']"
                />
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

            galleryItems: []
        }
    },

    methods: {
        
        imageDimensions: function(imageURL) {

            const self = this;

            var img = new Image();
            img.onload = function() {
                self.galleryItems.push({url: imageURL, width: this.width, height: this.height});
            };
            img.src = imageURL;
        }

    },

    mounted: function() {

        if (!this.$store.state.auth.loggedIn) {
            this.$router.push('/login');
        }

        UserService.getGalleryPictures()
        .then(
            data => {
                for (var url of data.pics) {
                    this.imageDimensions(url);
                }

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

        grid-template-columns: repeat(auto-fill, minmax(var(--grid-size),1fr));
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

        /*background-color: var(--bg-secondary);*/
        color: white;

        cursor: pointer;

        overflow: hidden;

    }

    .image-width-fit {
        width: 100%;
    }

    .image-height-fit {
        height: 100%;
    }

    .image-card:hover {
        transform: scale(1.1);
        box-shadow: 0 2px 5px black;
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

        .image-big {
            grid-row: span 2 / auto;
            grid-column: span 2 / auto;
        }
    }

</style>