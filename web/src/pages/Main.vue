<template>
    <div>
        
        <div style="text-align: center; height: 100%">

            <img class="pfp" :src="userData.pic"/>
            <h3 style="margin: 2rem; color: #404040 ">Welcome, {{userData.name}}!</h3>
        
        </div>
    </div>
</template>

<script>
import UserService from '../services/user.service'

export default {
    name: 'Main',

    data: function() {
        return {
            userData: {}
        }
    },

    mounted: function() {
        if (!this.$store.state.auth.loggedIn) {
            this.$router.push('/login');
        }
        UserService.getUserProfile()
        .then(
            data => {
                this.userData = data;
            },
            error => {
                console.log(error);
            }
        );

    },
}
</script>

<style scoped>

    .pfp {
        position: relative;
        border-radius: 50%;
        width: 25%;
        height: 25%;
        margin-top: 5rem;
        box-shadow: 0 2px 5px black;
        /*border: 5px solid black;*/
    }
</style>