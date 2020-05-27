<template>
	<div id="app">
		<h1>APP VUE</h1>
		<ul>
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/leaderboard">Leaderboard</router-link></li>
		</ul>

		<router-view></router-view>
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

</style>
