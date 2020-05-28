<template>
	<div id="app">

		<b-navbar variant="info" fixed>

			<b-navbar-brand>T!nderwal</b-navbar-brand>

			<b-collapse id="nav-collapse" is-nav>

				<b-navbar-nav>
					<b-nav-item><router-link to="/">Home</router-link></b-nav-item>
					<b-nav-item><router-link to="/leaderboard">Leaderboard</router-link></b-nav-item>
					<b-nav-item><router-link to="/login">Login</router-link></b-nav-item>
				</b-navbar-nav>

			</b-collapse>

		</b-navbar>


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
