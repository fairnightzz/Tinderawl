<template>
	<div id="app">

		<nav class="navbar">
			<ul class="navbar-nav">

				<li class="navbar-item">
					<font-awesome-icon :icon="['fas', 'fire']" />					

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
		--bg-seconday: darkgray;
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

	.navbar {
		width: 5em;
		height: 100vh;
		position: fixed;
		background-color: var(--bg-primary);
	}


</style>
