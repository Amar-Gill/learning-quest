<script>
  import { onMount } from "svelte";
  let amountPaid;
  $: purchasePrice = Math.trunc(Math.random() * amountPaid);
  $: requiredChange = amountPaid - purchasePrice;
  let centsChange = 0;

  let values = [1, 5, 10, 25, 100, 500, 1000];

  function resetGame() {
    const options = [500, 1000, 1500, 2000];
    amountPaid = null;
    amountPaid = options[Math.floor(Math.random() * options.length)];
    centsChange = 0;
  }

  function submitAnswer() {
    if (centsChange === requiredChange) {
      alert("correct!");
      resetGame();
    } else {
      console.log("Wrong answer");
    }
  }

  onMount(() => resetGame());
</script>

<h4>Amount Paid: {`$${(amountPaid / 100).toFixed(2)}`}</h4>

<h4>Purchase Price: {`$${(purchasePrice / 100).toFixed(2)}`}</h4>

{#each values as value}
  <div>
    <button on:click={e => (centsChange += parseInt(e.target.value))} {value}>
      + ${(value / 100).toFixed(2)}
    </button>
    <button on:click={e => (centsChange -= parseInt(e.target.value))} {value}>
      - ${(value / 100).toFixed(2)}
    </button>
  </div>
{/each}

<h4>Change: {`$${(centsChange / 100).toFixed(2)}`}</h4>

<button on:click={submitAnswer}>GO</button>
<button on:click={resetGame}>RESET</button>
