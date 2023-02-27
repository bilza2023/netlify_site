<script>
	// import Header from './Header.svelte';
		import MainNav from '$lib/cmp/MainNav.svelte';
		import Footer from '$lib/cmp/Footer.svelte';
		import Underconstruction from '$lib/cmp/Underconstruction.svelte';
	// import './styles.css';

</script>

<div class="app bg-gray-800 text-white m-0 p-6 pt-0">
<Underconstruction />
<MainNav />
		<slot />
<Footer />

</div>

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
