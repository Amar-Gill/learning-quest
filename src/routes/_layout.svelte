<script>
  import Nav from "../components/Nav.svelte";
  import FirebaseAuthContainer from "../components/FirebaseAuthContainer.svelte";
  import { FirebaseApp, User } from "sveltefire";

</script>

<style>
  main {
    margin-left: 5rem;
    padding: 1rem;
    top: 0;
    height: 100vh;
    width: calc(100vw - 5rem);
    position: fixed;
  }
</style>

<!-- defaults to firebase={window.firebase} -->
<FirebaseApp>
  <User persist={sessionStorage} let:user let:auth on:user>
    <Nav {auth} />

    <main>
      <slot />
    </main>

    <div slot="signed-out">
      <FirebaseAuthContainer {auth} />
    </div>
  </User>
</FirebaseApp>
