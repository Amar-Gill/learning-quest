<script>
  export let gridSize;

  $: itemTotal = gridSize * gridSize;

  let numSelected = 0;

  let windowWidth;

  $: gridColumnWidth = windowWidth < 600 ? "55px" : "75px";

  const handleClick = function() {
    this.classList.contains("active") ? numSelected-- : numSelected++;
    this.classList.toggle("active");
  };

</script>

<style>
  div {
    display: grid;
    gap: 0rem;
    margin: auto;
    grid-template-columns: var(--columns);
  }

  section {
    height: 75px;
    background-color: white;
    border: solid black 0.5px;
  }

  .active {
    background-color: black;
  }

  @media only screen and (max-width: 600px) {
    section {
        height: 55px;
    }
  }
</style>

<svelte:window bind:innerWidth={windowWidth}></svelte:window>

<div style="--columns: repeat({gridSize}, {gridColumnWidth} )">
  {#each { length: itemTotal } as gridItem, index}
    <section class:active={false} on:click={handleClick} />
  {/each}
</div>

<p>{numSelected}</p>
