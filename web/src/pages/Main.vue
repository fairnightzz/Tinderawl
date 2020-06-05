<template>
    <div>
        
        <div style="text-align: center">
            <img class="pfp" :src="userData.pic"/>
            <h3>Welcome, {{userData.name}}!</h3>
        
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
        border-radius: 50%;
        /*border: 5px solid black;*/
    }
</style>