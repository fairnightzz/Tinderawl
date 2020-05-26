<template>
    <div>
        <p v-text="selected_item"></p>

        <dropdown @update:dropdownOption="dropdownUpdated"></dropdown>
    </div>
    
</template>

<script>
import Dropdown from './Dropdown.vue';

export default {
    name: "List",

    data: function() {
        return {
            selected_item: "none",
        }
    },

    components: {
        Dropdown,
    },

    methods: {
        dropdownUpdated: function(value) {
            this.selected_item = value;
        },
    }

}
</script>

<style scoped>

</style>