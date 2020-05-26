<template>
    <select name="dropdown" id="dropdown" v-model="selected" v-on:change="optionChanged">
        <option value="null" disabled>-</option>
        <option value="Choice 1">Choice 1</option>
        <option value="Choice 2">Choice 2</option>
        <option value="Choice 3">Choice 3</option>
    </select>
    
</template>

<script>
export default {
    name: "Dropdown",

    data: function() {
        
        return {
            selected: null,
        }
    },

    methods: {
        optionChanged: function(value) {
            this.$emit('update:dropdownOption', this.selected);
        },
    },
}
</script>

<style scoped>

</style>