<script>
  import { onMount } from "svelte";

  const gridSize = 8;

  $: itemTotal = gridSize * gridSize;

  let numSelected = 0;

  const handleClick = function() {
    this.classList.contains("active") ? numSelected-- : numSelected++;
    this.classList.toggle("active");
  };

  onMount(() => {
    const container = document.getElementById("container");

    container.style.gridTemplateColumns = "1fr ".repeat(gridSize);
  });
</script>

<style>
  div {
    display: grid;
    gap: 0rem;
    width: 60%;
  }

  section {
    height: 40px;
    background-color: white;
    border: solid black 0.5px;
  }

  .active {
    background-color: black;
  }

  @media only screen and (max-width: 600px) {
    div {
      width: 90%;
    }
  }
</style>

<div id="container">
  {#each { length: itemTotal } as gridItem, index}
    <section class:active={false} on:click={handleClick} />
  {/each}
</div>

<p>{numSelected}</p>
