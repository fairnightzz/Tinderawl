<template>
    <div>
        
        <transition name="navbar" v-on:after-leave="pushToLogin">
        <div v-if="isLoggedIn" class="navbar-main"></div>
        </transition>

        <transition name="fade">
        <nav v-if="isLoggedIn" class="navbar-main">
			<ul class="navbar-nav">

                <router-link 
                    v-for="(navItem, i) in navItems" 
                    :key="i"
                    :to="navItem.route"
                    v-tippy="{placement: 'right', arrow: 'true'}"
                    :content="navItem.toolTip"
                    :class="navItem.classes"
                >
                    <font-awesome-icon :icon="navItem.iconName" size="2x" />	
                </router-link>

                <a
                    v-tippy="{placement: 'right', arrow: 'true'}"
                    content="Sign Out"
                    class="nav-item nav-item-a"
                    href @click.prevent="handleLogout"
                >
                    <font-awesome-icon icon="sign-out-alt" size="2x" />	
                </a>
				
			</ul>
		</nav>
        </transition>

    </div>
</template>

<script>
export default {
    name: 'Navbar',

    computed: {
		isLoggedIn() {
			return this.$store.state.auth.loggedIn;
		}
    },
    
    data: function() {
        return {
            showNav: true,
            navItems: [
                {
                    route: '/main',
                    iconName: 'fire',
                    toolTip: 'Home',
                    classes: 'nav-item'
                },
                {
                    route: '/vote',
                    iconName: 'poll',
                    toolTip: 'Vote',
                    classes: 'nav-item'
                },
                {
                    route: '/gallery',
                    iconName: 'images',
                    toolTip: 'Gallery',
                    classes: 'nav-item'
                },
                /*
                {
                    route: '/leaderboard',
                    iconName: 'medal',
                    toolTip: 'Results',
                    classes: 'nav-item'
                },
                */
            ]
        }
    },
    methods: {
        handleLogout() {
            console.log('logout');
            this.$store.dispatch('auth/logout');
            
        },
        pushToLogin() {
            this.$router.push('/login');
        }
    }
}
</script>

<style scoped>

    .navbar-main {
		width: var(--navbar-width);
		height: 100vh;
		position: fixed;
		background-color: var(--bg-primary);
        z-index: 10;
	}

	.navbar-nav {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;

        box-shadow: 0 2px 5px;
	}

	.nav-item {
		padding: 1rem;
		margin: 0;
		width: 100%;
		text-align: center;
	}
    
	.nav-item:hover {
		background-color: var(--bg-primary-dark);
	}

	.nav-item svg {
		color: white;
	}

	.nav-item:hover svg {
		color: aqua;
	}
	
	.nav-item:last-child {
		margin-top: auto;
	}

    .nav-item-a {
        cursor: pointer;
    }
    
    .nav-item-a:focus {
        outline: none;
    }

	.nav-logo {
		background-color: var(--bg-primary-dark);
	}

    .navbar-enter-active {
        animation: navbarAnim 1s;
    }
    .navbar-leave-active {
        animation: navbarAnim 1s reverse;
    }

    @keyframes navbarAnim {
        0% {
            transform: scaleX(60);
        }
        100% {
            transform: scaleX(1);
        }
    }

    .fade-enter-active {
        animation: fadeAnim .2s;
    }

    .fade-leave-active {
        animation: fadeAnim .2s reverse;
    }

    @keyframes fadeAnim {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }


</style>