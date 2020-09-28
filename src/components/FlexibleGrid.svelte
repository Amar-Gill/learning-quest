<script>
  import { createEventDispatcher, afterUpdate, beforeUpdate } from "svelte";
  const dispatch = createEventDispatcher();
  export let gridSize;
  export let isGameActive;

  $: itemTotal = gridSize * gridSize;

  let cells = [];
  let temporaryDrawingState;

  $: numSelected = cells.filter((c) => c).length;

  let windowWidth;

  let drawing = false;

  $: gridColumnWidth = windowWidth < 600 ? "55px" : "75px";

  beforeUpdate(() => {
    if (!isGameActive) {
      temporaryDrawingState = cells;
      cells = [];
    }

    if (isGameActive && !cells.length) {
      for (let i = 0; i < itemTotal; i++) {
        cells[i] = false;
      }
    }
  });

  afterUpdate(() => {
    dispatch("drawevent", {
      numSelected,
    });
  });
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

<svelte:window bind:innerWidth={windowWidth} />

{#if isGameActive}
  <div
    on:mousedown={() => (drawing = true)}
    on:mouseup={() => (drawing = false)}
    style="--columns: repeat({gridSize}, {gridColumnWidth} )">
    {#each cells as cell, index (index)}
      <section
        class:active={cells[index]}
        on:mousedown={() => (cells[index] = !cells[index])}
        on:mouseover={() => drawing && (cells[index] = !cells[index])} />
    {/each}
  </div>
{:else}
  <div style="--columns: repeat({gridSize}, {gridColumnWidth} )">
    {#each temporaryDrawingState as cell, index (index)}
      <section class:active={temporaryDrawingState[index]} />
    {/each}
  </div>
{/if}
