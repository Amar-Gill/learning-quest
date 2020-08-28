<script>
  import FlexibleGrid from "../../components/FlexibleGrid.svelte";
  import { onMount, getContext } from "svelte";
  import { goto } from "@sapper/app";
  import { User } from "sveltefire";

  const db = getContext("firebase")
    .getFirebase()
    .firestore();

  let prompt;

  let drawingEnabled;

  let selectedOption;

  let selectedSolution;

  let numSelected;

  let t;
  let interval;

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
    const answerBtn = document.getElementById("answer-btn") || null;
    answerBtn && (answerBtn.disabled = false);

    const replayBtn = document.getElementById("replay-btn") || null;
    replayBtn && (replayBtn.style.display = "none");

    const backBtn = document.getElementById("back-btn") || null;
    backBtn && (backBtn.style.display = "none");

    t = 0;
    interval = setInterval(() => {
      t += 1;
    }, 1000);

    selectedOption = options[Math.floor(Math.random() * options.length)];

    drawingEnabled = true;

    const solutions = Object.entries(selectedOption.solutionSpace);

    selectedSolution = solutions[Math.floor(Math.random() * solutions.length)];

    prompt = `Colour in ${selectedSolution[0]} of the grid!`;
  }

  function handleDrawEvent(event) {
    numSelected = event.detail.numSelected;
  }

  function handleAnswerSubmit(event, user) {
    if (numSelected == selectedSolution[1]) {
      prompt = "Right answer!";
      event.target.disabled = true;
      drawingEnabled = false;

      db.collection("reports")
        .doc(user.uid)
        .set(
          {
            uid: user.uid,
            // TODO - use cloud function to handle createdAt field:
            // https://stackoverflow.com/questions/51656107/managing-createdat-timestamp-in-firestore
            // createdAt: firebase.firestore.FieldValue || firebase.firestore.Timestamp.fromDate(new Date()),
            lastActivity: firebase.firestore.Timestamp.fromDate(new Date()),
            completedGames: firebase.firestore.FieldValue.arrayUnion({
              game: "Fractions",
              time: t,
              completedAt: firebase.firestore.Timestamp.fromDate(new Date())
            })
          },
          { merge: true }
        );

      clearInterval(interval);

      const replayBtn = document.getElementById("replay-btn");
      replayBtn.style.display = "block";

      const backBtn = document.getElementById("back-btn");
      backBtn.style.display = "block";
    } else {
      prompt = `Try again. Colour in ${selectedSolution[0]} of the grid!`;
    }
  }

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
</style>

<svelte:head>
  <title>Games | Fractions</title>
</svelte:head>

<User let:auth let:user>
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

    <FlexibleGrid
      on:drawevent={handleDrawEvent}
      gridSize={selectedOption.gridSize}
      {drawingEnabled} />
    <footer>
      <button
        id="answer-btn"
        on:click|preventDefault={e => handleAnswerSubmit(e, user)}>
        Submit Answer
      </button>
    </footer>
  </div>

</User>
