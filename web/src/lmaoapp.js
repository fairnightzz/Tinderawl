import Vue from 'vue';
import Accordion from './components/Accordion.vue';
import List from './components/List.vue';

window.axios = require('axios');

new Vue({
    el: '#app',

    components: {
        Accordion, List,
    },

    data: {
        title: 'Tinderwal App',

        price: "",

        items: [
            { title: "Item 1", description: "this is an item" },
            { title: "Item 2", description: "this is an item lmao" },
            { title: "Item 3", description: "this is an item xd" }
        ],

        posts: null,
    },

    computed: {
        tax: function() { return parseFloat(this.price) * 0.1; },
        total: function() { return parseFloat(this.price)+parseFloat(this.tax); },
    },

    methods: {
        moneyFormat: function(price) { return `$${Math.round(price)}`}
    },

    mounted: function() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => this.posts = response)
            .catch(error => this.posts = [{id: -1, title: 'No posts found...'}]) //for some reason 404 is not being caught
            .finally(() => console.log("DONE"));

    },

});