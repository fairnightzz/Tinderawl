<template>

    <div class="login-main">

        <div class="container" style="padding-top: 5rem">

            <div class="row justify-content-md-center">
                <div class="col-md-auto" style="padding-right: .5rem">
                <font-awesome-icon style="color: white" icon="fire" size="3x" />	
                </div>
                <div class="col-md-auto" style="padding-left: .5rem">
                <h1 style="color: white">Tinderwal.</h1>
                </div>
            </div>

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

            <!-- v-text="'</> made with love'" -->
            <div class="row justify-content-md-center">
                <a href="https://github.com/fairnightzz/Tinderwal" style="text-decoration-color: white">
                    <p style="color: white; padding: .5rem; font-size: 12px">{{ messages[Math.round(Math.random()*(messages.length-1))] }}</p>
                </a>
            </div>
            <!--p>{{ formStatus }}</p-->

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
            formStatus: 'unsubmitted',
            messages: [
              "Have a wonderful day!",
              "Why do developers wear glasses? Because they can't C.",
              "What is a web developer's favourite tea? URL Grey.",
              "What do you call a web developer who likes to find bugs? A spider.",
              "May the force be with Vue.",
              "Too lazy to react, I only vue! (joking)",
              "Your Vue matters."
            ]
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
                    this.$router.push('/main');
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

    },

    mounted: function() {
        if (this.$store.state.auth.loggedIn) {
            this.$router.push('/main');
        }
    }
}
</script>

<style scoped>

    .login-main {
        background-color: var(--bg-primary) !important;
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