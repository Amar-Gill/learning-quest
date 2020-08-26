<script>
  import FlexibleGrid from "../../components/FlexibleGrid.svelte";
  import { onMount } from 'svelte';

  let prompt;

  let selectedOption;

  let selectedSolution;

  const options = [
    {
      gridSize: 3,
      divisibleFactors: [1, 3, 9],
      solutionSpace: {
        "one third": 3,
        "two thirds": 6,
        "1/3": 3,
        "2/3": 6
      }
    },
    {
      gridSize: 4,
      divisibleFactors: [1, 2, 4, 8, 16],
      solutionSpace: {
        "25%": 4,
        "50%": 8,
        "75%": 12,
        "one eighth": 2,
        "one quarter": 4,
        "three eighths": 6,
        "a half": 8,
        "five eighths": 10,
        "three quarters": 12,
        "seven eighths": 14,
        "1/8": 2,
        "2/8": 4,
        "1/4": 4,
        "3/8": 6,
        "1/2": 8,
        "4/8": 8,
        "5/8": 10,
        "3/4": 12,
        "7/8": 14
      }
    },
    {
      gridSize: 5,
      divisibleFactors: [1, 5, 25],
      solutionSpace: {
        "20%": 5,
        "40%": 10,
        "60%": 15,
        "80%": 20,
        "one fifth": 5,
        "two fifths": 10,
        "three fifths": 15,
        "four fifths": 20,
        "1/5": 5,
        "2/5": 10,
        "3/5": 15,
        "4/5": 20
      }
    },
    {
      gridSize: 6,
      divisibleFactors: [1, 2, 3, 4, 6, 12, 18, 36],
      solutionSpace: {
        "one sixth": 6,
        "one third": 12,
        "two sixths": 12,
        "a half": 18,
        "three sixths": 18,
        "two thirds": 24,
        "five sixths": 30,
        "50%": 18,
        "1/6": 6,
        "1/3": 12,
        "2/6": 12,
        "1/2": 18,
        "3/6": 18,
        "2/3": 24,
        "4/6": 24,
        "5/6": 30
      }
    }
  ];

  function resetGame() {
    selectedOption = options[Math.floor(Math.random() * options.length)];

    const solutions = Object.entries(selectedOption.solutionSpace);

    selectedSolution = solutions[Math.floor(Math.random() * solutions.length)];

    prompt = `Colour in ${selectedSolution[0]} of the grid!`;
  };

  resetGame();
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

<svelte:head>
  <title>Fractions</title>
</svelte:head>

<div>
  <header>
    <h2>{prompt}</h2>
  </header>

  <FlexibleGrid gridSize={selectedOption.gridSize} />
  <footer>answer btns here</footer>
</div>
