<script>
  import { User, Doc } from "sveltefire";
</script>

<style>
  div {
    display: flex;
    flex-direction: column;
    height: 100%;
    /* background-image: linear-gradient(darkslategray 10%, lightslategrey 40%, white 90%); */
    padding-left: 2rem;
  }

  section {
    overflow: scroll;
    border-top: solid var(--text-1) 2px;
    width: 50vw;
    /* margin-left: auto; */
  }

  aside {
    background-color: white;
    color: black;
    border-radius: 6px;
    box-shadow: 3px 6px;
    /* display: flex; */
    margin-bottom: 1rem;
    padding-left: 1rem;
    /* padding-top: 1rem; */
    width: calc(100% - 3px);
  }

  a, a:visited {
	  color: var(--comp-4);
  }

  @media only screen and (max-width: 834px) {
	  div {
		  padding-left: .5rem;
	  }

	  section {
		  width: 100%;
	  }
  }
</style>

<svelte:head>
  <title>Activity</title>
</svelte:head>

<User let:user let:auth>
  <div>
    <h2>User Activity</h2>

    <h3>Game Reports</h3>
    <section>
      <Doc path={`reports/${user.uid}`} let:data let:ref log>
        {#each data.completedGames as game}
          <aside class="lazy">
            <p>Learning Exercise: {game.game}</p>
            <ul>
              <li>Completed: {game.completedAt.toDate()}</li>
              <li>Time (seconds): {game.time}</li>
            </ul>
          </aside>
        {/each}

        <span slot="loading">Loading...</span>
        <span slot="fallback">
          No game data available. Visit
          <a href="/games" alt="games">games</a>
          to start learning!
        </span>
      </Doc>
    </section>

  </div>
</User>
