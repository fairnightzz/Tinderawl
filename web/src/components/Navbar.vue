<template>
    <div>

        <nav class="navbar-main">
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
				
			</ul>
		</nav>	

    </div>
</template>

<script>
export default {
    name: 'Navbar',

    data: function() {
        return {
            navItems: [
                {
                    route: '/',
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
                {
                    route: '/leaderboard',
                    iconName: 'medal',
                    toolTip: 'Results',
                    classes: 'nav-item'
                },
                {
                    route: '/',
                    iconName: 'sign-out-alt',
                    toolTip: 'Sign Out',
                    classes: 'nav-item'
                },
            ]
        }
    },
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

	.nav-logo {
		background-color: var(--bg-primary-dark);
	}

</style>