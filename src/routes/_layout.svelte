<script>
	import Nav from '../components/Nav.svelte';
	import FirebaseAuthContainer from '../components/FirebaseAuthContainer.svelte';
	import { onMount } from 'svelte';
	import { FirebaseApp, User } from "sveltefire";

	const firebaseConfig = {
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
		};
		// Initialize the FirebaseUI Widget using Firebase.
	}
	);
</script>

{#if globalFirebase}
<FirebaseApp firebase={globalFirebase}>
	<User persist={sessionStorage} let:user let:auth on:user>
		<Nav {auth} />
	
		<main>
			<slot></slot>
		</main>

		<div slot="signed-out">
			<FirebaseAuthContainer {auth}/>
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
<<<<<<< HEAD
</style>
=======

	section {
		max-width: 35vw;
		border: solid black 2px;
		margin:auto;
		margin-top: 30vh;
		border-radius: 8px;
		box-shadow: 5px 10px;
	}
</style>
>>>>>>> 85450ca7fb23415e19331b9c92826960ede69cca