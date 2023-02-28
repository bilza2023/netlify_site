<script>
	// import Header from './Header.svelte';
		import MainNav from '$lib/cmp/MainNav.svelte';
		import Footer from '$lib/cmp/Footer.svelte';
		import Underconstruction from '$lib/cmp/Underconstruction.svelte';
	import './styles.css';
//   import "../app.css";
</script>

<MainNav />

<div class="app bg-gray-800 text-white m-0 pb-0 pt-0 pl-6 pr-6 ">
<Underconstruction />
<br/>
		<slot />
</div>

<Footer />

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	
	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
