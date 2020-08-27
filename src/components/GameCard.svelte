<script>
  import { goto } from "@sapper/app";
  export let title;
  export let subtitle;
  export let href;
</script>

<style>
  div {
    background-color: var(--hue-1);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
  }

  section {
    width: 100%;
    margin-bottom: 1rem;
    text-align: center;
  }

  button {
    width: 90%;
    height: 3rem;
    font-size: 1rem;
    border-radius: 8px;
    color: var(--text-1);
    background-color: var(--hue-3);
  }
</style>

<div>

  <h3>{title}</h3>

  <section>{subtitle}</section>

  <button on:click={() => goto(href)}>Start</button>

</div>
