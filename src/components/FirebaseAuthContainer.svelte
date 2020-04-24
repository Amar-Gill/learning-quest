<script>
    export let auth;
    import { onMount } from 'svelte';

    // FirebaseUI config.
    const uiConfig = {
        // signInSuccessUrl: '/',
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

    onMount(() => {
        // Initialize the FirebaseUI Widget using Firebase.
        let ui = new firebaseui.auth.AuthUI(auth);
        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig);
    })

</script>

<div id="firebaseui-auth-container"></div>

<style>
    div {
        max-width: 35vw;
        border: solid black 2px;
        margin: auto;
        margin-top: 30vh;
        border-radius: 8px;
        box-shadow: 5px 10px;
    }
</style>