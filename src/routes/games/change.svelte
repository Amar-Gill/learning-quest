<script>
  import { onMount } from "svelte";
  import { goto } from "@sapper/app";

  let prompt;
  let amountPaid;
  $: purchasePrice = Math.trunc(Math.random() * amountPaid);
  $: requiredChange = amountPaid - purchasePrice;
  let centsChange = 0;

  let values = [1, 5, 10, 25, 100, 500, 1000];

  function resetGame() {
    prompt = "Calculate the change to return!";

    // recalculate new game info
    const options = [500, 1000, 1500, 2000];
    amountPaid = null;
    amountPaid = options[Math.floor(Math.random() * options.length)];
    centsChange = 0;

    // hide back btn and replay btn and re-enable answer btn
    const answerBtn = document.getElementById("answer-btn") || null;
    answerBtn && (answerBtn.disabled = false);

    const replayBtn = document.getElementById("replay-btn") || null;
    replayBtn && (replayBtn.style.display = "none");

    const backBtn = document.getElementById("back-btn") || null;
    backBtn && (backBtn.style.display = "none");
  }

  function submitAnswer(event) {
    if (centsChange === requiredChange) {
      //disable answer btn and update prompt
      event.target.disabled = true;
      prompt = "Correct answer!";

      // reveal back btn and replay btn
      const replayBtn = document.getElementById("replay-btn");
      replayBtn.style.display = "block";

      const backBtn = document.getElementById("back-btn");
      backBtn.style.display = "block";

      // disable buttons here
    } else {
      prompt = "Incorrect amount. Calculate the change to return!";
    }
  }

  onMount(() => resetGame());
</script>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 90px;
  }

  header h2 {
    text-align: center;
    margin: auto;
  }

  footer {
    margin-bottom: 1rem;
  }

  #replay-btn {
    display: none;
    font-size: 1.5rem;
    font-family: "Comic Sans MS";
    border-radius: 8px;
    color: var(--text-1);
    background-color: var(--hue-1);
    width: 90px;
    height: 90px;
  }

  #back-btn {
    display: none;
    font-size: 1.5rem;
    font-family: "Comic Sans MS";
    border-radius: 8px;
    color: var(--text-1);
    background-color: var(--hue-1);
    width: 110px;
    height: 90px;
  }

  #answer-btn {
    font-size: 1.5rem;
    font-family: "Comic Sans MS";
    border-radius: 8px;
    color: var(--text-1);
    background-color: var(--hue-1);
  }

  #answer-btn:disabled {
    filter: grayscale(100%);
  }

  section {
    width: 100%;
    display: grid;
    gap: 1.75rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 600px));
    justify-content: center;
  }
</style>

<div>
  <header>
    <button id="back-btn" on:click={async () => await goto('/games')}>
      Back to games
    </button>
    <h2>{prompt}</h2>
    <button id="replay-btn" on:click|preventDefault={resetGame}>
      Play again?
    </button>
  </header>

  <section>

    <article>
      <h3>Amount Paid: {`$${(amountPaid / 100).toFixed(2)}`}</h3>

      <h3>Purchase Price: {`$${(purchasePrice / 100).toFixed(2)}`}</h3>

      <h3>Change: {`$${(centsChange / 100).toFixed(2)}`}</h3>
    </article>

    <article>

      {#each values as value}
        <aside>
          <button
            on:click={e => (centsChange += parseInt(e.target.value))}
            {value}>
            + ${(value / 100).toFixed(2)}
          </button>
          <button
            on:click={e => (centsChange -= parseInt(e.target.value))}
            {value}>
            - ${(value / 100).toFixed(2)}
          </button>
        </aside>
      {/each}
    </article>

  </section>

  <footer>
    <button id="answer-btn" on:click={e => submitAnswer(e)}>
      Submit Answer
    </button>
  </footer>
</div>
