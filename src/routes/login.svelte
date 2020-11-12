<script>
    import FirebaseAuthContainer from "../components/FirebaseAuthContainer.svelte";
    import { User } from "sveltefire";

</script>

<style>
    section {
        background-color: white;
        border-radius: 8px;
        padding: 0.25rem;
        min-width: 10rem;
        width: fit-content;
        width: -moz-fit-content;
        margin: auto;
    }
</style>

<div>
    <User persist={sessionStorage} let:auth>
        <p>You are logged in.</p>
        <section slot="signed-out">
            <FirebaseAuthContainer {auth} />
        </section>
    </User>
</div>
