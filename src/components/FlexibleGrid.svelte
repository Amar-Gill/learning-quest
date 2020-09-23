<script>
  import { createEventDispatcher, onMount, afterUpdate } from "svelte";
  const dispatch = createEventDispatcher();
  export let gridSize;
  export let isGameActive;

  $: itemTotal = gridSize * gridSize;

  let numSelected;

  let windowWidth;

  let drawing = false;

  $: gridColumnWidth = windowWidth < 600 ? "55px" : "75px";

  const draw = function (e) {
    if (isGameActive) {
      console.log(e.target.classList);
      console.log(e.target);
      e.target.classList.contains("active") ? numSelected-- : numSelected++;
      e.target.classList.toggle("active");

      dispatch("drawevent", {
        numSelected,
      });
    }
  };

  const drawOnHover = function (e) {
    if (drawing) {
      draw(e);
    }
  };

  onMount(() => {
    numSelected = 0;

    dispatch("drawevent", {
      numSelected,
    });
  });

  afterUpdate(() => {
    numSelected = 0;

    dispatch("drawevent", {
      numSelected,
    });

    if (isGameActive) {
      const gridContainer = document.getElementById("grid-container");

      const nodes = gridContainer.childNodes;

      for (const node of nodes) {
        node.classList.contains("active") && node.classList.toggle("active");
      }
    }
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

<!-- {@debug drawing} -->

<div
  id="grid-container"
  on:mousedown={() => (drawing = true)}
  on:mouseup={() => (drawing = false)}
  style="--columns: repeat({gridSize}, {gridColumnWidth} )">
  {#each { length: itemTotal } as gridItem, index}
    <section
      class:active={false}
      on:mousedown={(e) => draw(e)}
      on:mouseover={(e) => drawOnHover(e)} />
  {/each}
</div>
<p>drawing = {drawing}, numSelected = {numSelected}, isGameActive = {isGameActive}</p>
