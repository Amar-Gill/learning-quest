<script>
  import { User } from "sveltefire";
  import { goto } from "@sapper/app";
</script>

<style>
  a,
  a:visited {
    color: var(--comp-4);
  }

  div {
    padding-left: 2rem;
  }

  button {
    color: var(--hue-1);
    background-color: var(--text-1);
    font-size: 1.5rem;
    border-radius: 8px;
    position: fixed;
    display: none;
    bottom: 7rem;
    width: 60vw;
    margin-left: calc(20vw - 0.5rem);
  }

  @media only screen and (max-width: 600px) {
    div {
      padding-left: 0;
    }

    button {
      display: block;
    }
  }
</style>

<svelte:head>
  <title>Learning Quest | Home</title>
</svelte:head>

<div>
  <h2>Learning Quest 0.1.0</h2>

  <p>
    This is an online education platform for children between the ages of 5-10.
  </p>
  <p>
    The learning happens through playing various games designed to teach
    arithmetic and logic.
  </p>

  <h2>How to Play</h2>
  <p>
    Visit the
    <a href="/games" alt="games link">games</a>
    page to select from a list of available games.
  </p>
  <p>
    Visit the
    <a href="/activity" alt="activity link">activity</a>
    page to review your completed games and performance data.
  </p>
</div>
<User persist={sessionStorage} let:auth>
  <button on:click|preventDefault={() => auth.signOut()}>Log Out</button>
  <div slot="signed-out">
    <button on:click={() => goto('/login')}>Log In</button>
  </div>
</User>
