import Vue from 'vue';
import Accordion from './components/Accordion.vue';

new Vue({
    el: '#app',

    components: {
        Accordion,
    },

    data: {
        title: 'Tinderwal App',

        price: "",

        items: [
            { title: "Item 1", description: "this is an item" },
            { title: "Item 2", description: "this is an item lmao" },
            { title: "Item 3", description: "this is an item xd" }
        ]
    },

    computed: {
        tax: function() { return parseFloat(this.price) * 0.1; },
        total: function() { return parseFloat(this.price)+parseFloat(this.tax); },
    },

    methods: {
        moneyFormat: function(price) { return `$${Math.round(price)}`}
    }

});