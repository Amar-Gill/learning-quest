<script>
  // number of cards to draw in the grid
  export let numImages;
  export let imageSource;
  export let imageAlt;
</script>

<style>
  section {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }

  img {
    height: 100px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 4px;
    transition: all 500ms;
    overflow: hidden;

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media only screen and (max-width: 600px) {
    section {
      gap: 0.6rem;
      grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    }

    img {
      height: 80px;
    }
  }
</style>

<section>
  <!-- https://github.com/sveltejs/svelte/issues/2968 -->
  {#each { length: numImages } as image}
    <div>
      <img src={imageSource} alt={imageAlt} />
    </div>
  {/each}
</section>
