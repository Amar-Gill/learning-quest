<script>
    export let auth;
    import { onMount, onDestroy } from 'svelte';

    // FirebaseUI config.
    const uiConfig = {
        // signInSuccessUrl: '/',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            {
                provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                scopes: [
                    // 'https://www.googleapis.com/auth/contacts.readonly'
                ],
                customParameters: {
                    // Forces account selection even when one account
                    // is available.
                    prompt: 'select_account'
                }
            },
            // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            // firebase.auth.GithubAuthProvider.PROVIDER_ID,
            // firebase.auth.EmailAuthProvider.PROVIDER_ID,
            // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
            firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
        ],
        // tosUrl and privacyPolicyUrl accept either url string or a callback
        // function.
        // Terms of service url/callback.
        tosUrl: '<your-tos-url>',
        // Privacy policy url/callback.
        privacyPolicyUrl: function () {
            window.location.assign("https://amar-gill.now.sh/privacy_policy");
        }
    };

    onMount(() => {
        console.log('fetching auth instance.')
        // Initialize the FirebaseUI Widget using Firebase.
        let ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)
        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig);
    })

    onDestroy(() => {
        console.log('destroyed auth ui widget.');
    });

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