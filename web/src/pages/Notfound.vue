<template>
    <h1>404 Page not found :(</h1>
</template>

<script>
export default {
    name: 'Notfound',

    mounted: function() {
        this.$router.push('/login');
    }
}
</script>

<style scoped>

</style>