<script>
	import Nav from '../components/Nav.svelte';
</script>

<Nav/>

<main>
	<slot></slot>
</main>

<style>
	main {
    margin-left: 5rem;
	padding: 1rem;
	/* border: solid pink 4px;
	display: flex;
	flex-direction: column;
	justify-content: space-around; */
	top: 0;
	height: 100vh;
	width: calc(100vw - 5rem);
	position: fixed;
	}

</style>