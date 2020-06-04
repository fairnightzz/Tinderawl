<template>
    <div class="login-main">

        <div class="container">

            <h1>Login</h1>

            <div class="row justify-content-md-center">
                <input
                    id="code"
                    class="input-field"
                    v-model="form.code"
                    type="text"
                    required
                    autocomplete="off"
                    spellcheck="false"
                    placeholder="Enter Code"
                    minlength = 7
                    maxlength = 7
                >
            </div>

            <div class="row justify-content-md-center">
                <button class="input-submit" @click="onSubmit">Login</button>
            </div>

            <p>{{ formStatus }}</p>

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
            },
            formStatus: 'unsubmitted'
        }
    },

    methods: {
        onSubmit(evt) {
            evt.preventDefault();
            const inputtedCode = this.form.code;

            //validate form
            if (inputtedCode.length < 6) { return; }

            this.$store.dispatch('auth/login', inputtedCode)
            .then(
                data => {
                    this.formStatus = `success: ${data}`;
                },
                err => {
                    this.formStatus = `failure: ${err}`;
                }
            );

        },
        onReset(evt) { //clear form
            evt.preventDefault();
            this.form.code = '';
        }

    }
}
</script>

<style scoped>

    .login-main {
        background-color: var(--bg-primary);
        width: auto;
        height: 100vh;
        margin: 0px;
        padding: 2rem;
    }

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