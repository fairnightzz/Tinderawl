<template>
	<div id="app">

		<nav class="navbar-main">
			<ul class="navbar-nav">
				<!-- TODO: make this not hardcoded, also make the home icon stand out more-->
				<router-link to="/" class="nav-item" v-tippy="{placement: 'right', arrow: 'true'}" content="Home">
					<font-awesome-icon icon="fire" size="2x" />	
				</router-link>

				<router-link to="/vote" class="nav-item" v-tippy="{placement: 'right', arrow: 'true'}" content="Vote">
					<font-awesome-icon icon="poll" size="2x"/>			
				</router-link>

				<router-link to="/gallery" class="nav-item" v-tippy="{placement: 'right', arrow: 'true'}" content="Gallery">
					<font-awesome-icon icon="images" size="2x"/>			
				</router-link>

				<router-link to="/leaderboard" class="nav-item" v-tippy="{placement: 'right', arrow: 'true'}" content="Results">
					<font-awesome-icon icon="medal" size="2x"/>			
				</router-link>

				<router-link to="/" class="nav-item" v-tippy="{placement: 'right', arrow: 'true'}" content="Sign Out">
					<font-awesome-icon icon="sign-out-alt" size="2x"/>			
				</router-link>
				
			</ul>
		</nav>	

		<main>
			<router-view></router-view>
		</main>

	</div>
</template>

<script>

export default {
	name: 'App',

	data: function() {
		return {
			navItems: [
				{},
				{},
				{},
				{},
			]
		}

	},

	components: {
		
	}
}
</script>

<style>
	:root {
		font-size: 16px;

		--text-primary: gray;
		--text-secondary: white;
		
		--bg-primary: #008080;
		--bg-primary-dark: 	#006868;

		--bg-secondary: #0C2B74;
		--bg-secondary-dark: #07215D;
	}

	html {
		max-width: 100%;
		overflow-x: hidden;
		overflow-y: scroll;
	}

	body {
		margin: 0;
		padding: 0;
	}

	body::-webkit-scrollbar {
		width: 0.25rem
	}

	body::-webkit-scrollbar-track {
		background: darkgray;
	}

	body::-webkit-scrollbar-thumb {
		background: gray;
	}

	main {
		margin-left: 5rem;
	}

	.navbar-main {
		width: 5rem;
		height: 100vh;
		position: fixed;
		background-color: var(--bg-primary);
	}

	.navbar-nav {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
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
