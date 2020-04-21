<script>
	import Nav from '../components/Nav.svelte';
	import { onMount } from 'svelte';

	import { FirebaseApp, User } from "sveltefire";

	let firebaseConfig = {
		// Insert Firebase Credentials here
		apiKey: "AIzaSyDEETmdf3X5Z8ble8bDFippCQ_f11oYzx0",
		authDomain: "learning-quest.firebaseapp.com",
		databaseURL: "https://learning-quest.firebaseio.com",
		projectId: "learning-quest",
		storageBucket: "learning-quest.appspot.com",
		messagingSenderId: "253565369099",
		appId: "1:253565369099:web:4d02f5ac18e6eeb88c800e",
		measurementId: "G-T5RSBRYPY9"
	};

	// hack for bundling errors. see github issue:
	// https://github.com/codediodeio/sveltefire/issues/4
	let globalFirebase;

	onMount(() => {
		globalFirebase = firebase;
		if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig);
		}
	});
</script>


{#if globalFirebase}
<FirebaseApp {firebase}>
	<User  let:user let:auth>
		<Nav {auth} />
	
		<main>
			<slot></slot>
		</main>

		<div slot="signed-out">
			<button on:click={() => auth.signInAnonymously()}>
			  Sign In Anonymously
			</button>
		  </div>
	</User>
</FirebaseApp>
{/if}


<style>
	main {
		margin-left: 5rem;
		padding: 1rem;
		top: 0;
		height: 100vh;
		width: calc(100vw - 5rem);
		position: fixed;
	}

	div {
		height: 4rem;
		width: 9rem;
		border: solid black 2px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin:auto;
		margin-top: 40vh;
	}
</style>