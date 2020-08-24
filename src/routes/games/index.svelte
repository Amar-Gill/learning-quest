<script>
  // TODO make firestore collections for games and fetch in this file
</script>

<style>
  div {
    display: flex;
    flex-direction: column;
    height: 100%;
    /* background-image: linear-gradient(darkslategray 10%, lightslategrey 40%, white 90%); */
    padding-left: 2rem;
  }

  a:link,
  a:visited {
    color: var(--comp-4);
  }

  a:hover {
    color: var(--hue-6);
  }

  a:active {
    color: var(--comp-2);
  }

  @media only screen and (max-width: 600px) {
      div {
          padding-left: 0;
      }
  }
</style>

<div>

  <h2>Games</h2>

  <a href="games/add" alt="add">Basic Addition</a>
</div>
