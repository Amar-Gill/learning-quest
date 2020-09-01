<script>
  // TODO make firestore collections for games and fetch in this file
  import GameCard from "../../components/GameCard.svelte";
</script>

<style>
  div {
    overflow-y: scroll;
    height: 100%;
  }

  h2 {
    text-align: center;
  }

  section {
    display: grid;
    gap: 1.75rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 600px));
    justify-content: center;
  }

</style>

<svelte:head>
  <title>Learning Quest | Games</title>
</svelte:head>

<div>

  <h2>Games</h2>

  <section>
    <GameCard
      title="Basic Addition"
      subtitle="Practice basic arithmetic by adding two randomly generated integers."
      href="games/add" />
    <GameCard
      title="Fractions"
      subtitle="Visualize fractions and percentages through colouring an interactive grid."
      href="games/fraction" />
    <GameCard
      title="Calculating Change"
      subtitle="Practice calculating change for monetary transactions."
      href="games/change" />
  </section>

</div>
