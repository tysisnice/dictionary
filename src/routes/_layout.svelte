<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		width: 100%;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
		margin-top: 40px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>