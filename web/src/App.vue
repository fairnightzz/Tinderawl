<template>
	<div id="app">

		<nav class="navbar-main">
			<ul class="navbar-nav">

				<li class="nav-item nav-logo">
					<font-awesome-icon icon="fire" size="2x" />			
				</li>

				<li class="nav-item">
					<font-awesome-icon icon="poll" size="2x"/>			
				</li>

				<li class="nav-item">
					<font-awesome-icon icon="medal" size="2x"/>			
				</li>

				<li class="nav-item">
					<font-awesome-icon icon="sign-out-alt" size="2x"/>			
				</li>
				

				

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
		--bg-primary: teal;
		--bg-seconday: darkblue;
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
		background-color: var(--bg-seconday);
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
		background-color: var(--bg-seconday);
	}

</style>
