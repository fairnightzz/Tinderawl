<template>
    <div>
        <h1>Login</h1>

        <!--input type="text" name="code" v-model="creds" placeholder="Input code here"/>
        <button type="button" @click="login">Submit</button-->

        <!-- NOTE: tippy gets blurry when zoomed in on chrome -->
        <b-button type="button" variant="primary" content="tooltip" v-tippy="{placement: 'bottom'}">Tippy</b-button>

        <b-form @submit="onSubmit" @reset="onReset">

            <b-form-group>
                <b-form-input
                    id="code"
                    v-model="form.code"
                    type="text"
                    required
                    placeholder="Enter code"
                ></b-form-input>

            </b-form-group>

            <b-button type="submit" variant="primary">Submit!</b-button>

        </b-form>


    </div>
    
</template>

<script>
export default {
    name: 'Login',

    data: function() {
        return {
            form: {
                code: '',
            }
        }
    },

    methods: {
        onSubmit(evt) {
            evt.preventDefault();
            console.log(JSON.stringify(this.form));

        },
        onReset(evt) { //clear form
            evt.preventDefault();
            this.form.code = '';
        }

    }
}
</script>

<style scoped>

</style>