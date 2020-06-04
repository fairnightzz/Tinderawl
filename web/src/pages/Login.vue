<template>
    <div>


        <!--input type="text" name="code" v-model="creds" placeholder="Input code here"/>
        <button type="button" @click="login">Submit</button-->

        <!-- NOTE: tippy gets blurry when zoomed in on chrome -->
        <!--b-button type="button" variant="primary" content="tooltip" v-tippy="{placement: 'bottom'}">Tippy</b-button-->

        <div class="container">

            <h1>Login</h1>

            <div class="container" style="background-color: var(--bg-primary); height: 10rem; text-align: center">
            <div class="row justify-content-md-center">

                <input
                    id="code"
                    class="input-field"
                    v-model="form.code"
                    type="text"
                    required
                    autocomplete="off"
                    placeholder="Enter Code"
                    minlength = 6
                    maxlength = 6
                >
            </div>

            <div class="row justify-content-md-center">
                <button class="input-submit" @click="onSubmit">Login</button>
            </div>

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

        margin-top: 2rem;

        appearance: none;
        outline: 0;
        border: 1px solid rgba(255,255,255,0.4);
        background-color: rgba(255,255,255,0.2);
        border-radius: 4px;
        
        text-align: center;
        
        color: white;
        caret-color: var(--bg-primary);

        height: 3rem;
        width: 18rem;

        transition: all .2s;
    }

    .input-field::placeholder {
        color: white;
    }

    .input-field:hover {
        background-color: rgba(255,255,255,0.4);
    }

    .input-field:focus {
        outline: none;
        background-color: white;
        color: var(--bg-primary);
        width: 20rem;
    }

    .input-submit {

        margin-top: 1rem;

        appearance: none;
        outline: 0;
        border: 0;
        border-radius: 4px;

        background-color: white;
        color: var(--bg-primary);

        /*box-shadow: 0 2px 5px black;*/

        height: 3rem;
        width: 18rem;
    }

    .input-submit:hover {
        background-color: rgb(240,240,240);
    }

</style>