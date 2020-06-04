<template>
	<div id="app">

		<!-- Prob move transition logic inside child -->
		<navbar/>

		<router-view class="page"></router-view>

		
		
	</div>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
	name: 'App',

	components: {
		Navbar
	},

	data: function() {
		return {
		}
	},


}
</script>

<style>
	:root {
		font-size: 16px;

		--text-primary: gray;
		--text-secondary: white;
		
		--bg-primary: #008080;
		--bg-primary-light: #139696;
		--bg-primary-dark: 	#006868;

		--bg-secondary: #0C2B74;
		--bg-secondary-dark: #07215D;

		--navbar-width: 5rem;

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

	.page {
		margin-left: var(--navbar-width);
	}




</style>
