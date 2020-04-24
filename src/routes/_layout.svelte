<script>
	import Nav from '../components/Nav.svelte';
	import { onMount } from 'svelte';

	import { FirebaseApp, User } from "sveltefire";

	let firebaseConfig = {
		// Insert Firebase Credentials here
		apiKey: "",
		authDomain: "",
		databaseURL: "",
		projectId: "",
		storageBucket: "",
		messagingSenderId: "",
		appId: "",
		measurementId: ""
	};

	// hack for bundling errors. see github issue:
	// https://github.com/codediodeio/sveltefire/issues/4
	let globalFirebase;


	onMount(() => {
		globalFirebase = firebase;
		if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig);

			// FirebaseUI config.
			var uiConfig = {
				signInSuccessUrl: '/',
				signInOptions: [
					// Leave the lines as is for the providers you want to offer your users.
					firebase.auth.GoogleAuthProvider.PROVIDER_ID,
					// firebase.auth.FacebookAuthProvider.PROVIDER_ID,
					// firebase.auth.TwitterAuthProvider.PROVIDER_ID,
					// firebase.auth.GithubAuthProvider.PROVIDER_ID,
					// firebase.auth.EmailAuthProvider.PROVIDER_ID,
					// firebase.auth.PhoneAuthProvider.PROVIDER_ID,
					firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
				],
				// tosUrl and privacyPolicyUrl accept either url string or a callback
				// function.
				// Terms of service url/callback.
				tosUrl: '<your-tos-url>',
				// Privacy policy url/callback.
				privacyPolicyUrl: function () {
					window.location.assign('https://personal-page.amar-gill.now.sh/');
				}
			};

			// Initialize the FirebaseUI Widget using Firebase.
			var ui = new firebaseui.auth.AuthUI(firebase.auth());
			// The start method will wait until the DOM is loaded.
			ui.start('#firebaseui-auth-container', uiConfig);
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
			<section id="firebaseui-auth-container"></section>
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

	section {
		max-width: 35vw;
		border: solid black 2px;
		margin:auto;
		margin-top: 30vh;
		border-radius: 8px;
		box-shadow: 5px 10px;
	}
</style>
