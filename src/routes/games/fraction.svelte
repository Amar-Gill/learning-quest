<script>
  import FlexibleGrid from "../../components/FlexibleGrid.svelte";

  const options = [
    { gridSize: 3, divisibleFactors: [1,3,9] },
    { gridSize: 4, divisibleFactors: [1, 2, 4, 8, 16] },
    { gridSize: 5, divisibleFactors: [1,5,25] },
    { gridSize: 6, divisibleFactors: [1,2,3,4,6,12,18,36] }
  ];
</script>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
</style>

<div>
  <h2>Fractions</h2>

  <FlexibleGrid
    gridSize={options[Math.floor(Math.random() * options.length)].gridSize} />
  <footer>answer btns here</footer>
</div>
