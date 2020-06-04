<template>
    <div>


        <!--input type="text" name="code" v-model="creds" placeholder="Input code here"/>
        <button type="button" @click="login">Submit</button-->

        <!-- NOTE: tippy gets blurry when zoomed in on chrome -->
        <!--b-button type="button" variant="primary" content="tooltip" v-tippy="{placement: 'bottom'}">Tippy</b-button-->

        <div class="container">

            <h1>Login</h1>

            <div class="col align-self-center" style="background-color: var(--bg-primary); height: 10rem; text-align: center">

                <input
                    id="code"
                    class="input-field"
                    v-model="form.code"
                    type="text"
                    required
                    placeholder="Enter code"
                    minlength = 6
                    maxlength = 6
                >


            </div>

        </div>

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

    .input-field {
        top: 50%;
        position: relative;

        border: 0;
        border-radius: 4px;
        appearance: none;
        background-color: var(--bg-primary-light);

        text-align: center;
        color: white;

        height: 3rem;
        width: 32rem;
    }

    .input-field::placeholder {
        color: white;
    }

    /*
    .input-field:hover {
        
    }*/

    .input-field:focus {
        outline: none;
        background-color: white;
    }

</style>