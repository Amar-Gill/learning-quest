<script>
  import { onMount, tick, beforeUpdate, getContext } from "svelte";
  import ImageGrid from "../../components/ImageGrid.svelte";
  import { goto } from "@sapper/app";

  const app = getContext("firebase").getFirebase();

  const db = app.firestore();

  const auth = app.auth();

  // initialize game prompt and clock for user
  let prompt;

  // initialize a and b as random ints between 1 and 10
  let a;
  let b;

  // initialize game timer
  let t;
  let interval;

  // calculate alternate options in same manner as a and b
  let alt1;
  let alt2;

  // calculate answer
  $: answer = a + b;

  // form array for answer and alternate options
  $: options = [answer, alt1, alt2];

  // function to shuffle an array
  // TODO - refactor into utils
  // https://javascript.info/task/shuffle
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      // same can be written as:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function save() {
    db.collection("reports")
      .doc(auth.currentUser.uid)
      .set(
        {
          uid: auth.currentUser.uid,
          // TODO - use cloud function to handle createdAt field:
          // https://stackoverflow.com/questions/51656107/managing-createdat-timestamp-in-firestore
          // createdAt: firebase.firestore.FieldValue || firebase.firestore.Timestamp.fromDate(new Date()),
          lastActivity: firebase.firestore.Timestamp.fromDate(new Date()),
          completedGames: firebase.firestore.FieldValue.arrayUnion({
            game: "Basic Addition",
            time: t,
            completedAt: firebase.firestore.Timestamp.fromDate(new Date()),
          }),
        },
        { merge: true }
      );
  }

  // called when an answer is selected
  function validateAnswer(e) {
    if (e.target.value == answer) {
      if (auth.currentUser != null) {
        prompt = `${e.target.value} is correct!`;
      } else {
        prompt =
          "Correct! <a href='/login' alt='login' style='color: #ffa600;'> Log In </a> to save your progress!";
      }

      auth.currentUser != null && save();

      clearInterval(interval);

      // change replay btn display to block to reveal it to user
      const replayBtn = document.getElementById("replay-btn");
      replayBtn.style.display = "block";

      // change back btn display to block to reveal it to user
      const backBtn = document.getElementById("back-btn");
      backBtn.style.display = "block";

      // change pop-up display to flex to reveal and maintain img proportions
      const popUp = document.getElementById("pop-up");
      popUp.style.display = "flex";

      // disable answer buttons
      const answerBtnsCollection = document.getElementsByClassName(
        "answer-btn"
      );
      const answerBtns = [...answerBtnsCollection];
      answerBtns.forEach((btn) => {
        btn.setAttribute("disabled", true);
      });
    } else {
      prompt = `${e.target.value} is incorrect - how many bananas are there?`;
    }
  }

  // function to validate if answer and alt values are all different
  async function validateGame() {
    // recalculate a and b if they are 0
    while (a == 0) a = Math.floor(Math.random() * 11);

    while (b == 0) b = Math.floor(Math.random() * 11);

    await tick();

    // check that alternate options do not equal answer or each other or 0
    while (alt1 == answer || alt1 == alt2 || alt1 == 0) {
      alt1 = Math.floor(Math.random() * 11) + Math.floor(Math.random() * 11);
    }

    await tick();

    while (alt2 == answer || alt2 == alt1 || alt2 == 0) {
      alt2 = Math.floor(Math.random() * 11) + Math.floor(Math.random() * 11);
    }

    await tick();
  }

  async function replayGame() {
    // reset prompt
    prompt = "Add up the bananas!";

    // change replay btn display to none
    const replayBtn = document.getElementById("replay-btn") || null;
    replayBtn && (replayBtn.style.display = "none");

    // change back btn display to none
    const backBtn = document.getElementById("back-btn") || null;
    backBtn && (backBtn.style.display = "none");

    // change pop-up display to none to hide from user again
    const popUp = document.getElementById("pop-up") || null;
    popUp && (popUp.style.display = "none");

    // re-enable answer buttons
    const answerBtnsCollection = document.getElementsByClassName("answer-btn");
    const answerBtns = [...answerBtnsCollection];
    answerBtns.forEach((btn) => {
      btn.removeAttribute("disabled");
    });

    // recalculate a b alt1 and alt2
    // initialize a and b as random ints between 1 and 10
    a = Math.floor(Math.random() * 11);
    b = Math.floor(Math.random() * 11);

    // calculate alternate options in same manner as a and b
    alt1 = Math.floor(Math.random() * 11) + Math.floor(Math.random() * 11);
    alt2 = Math.floor(Math.random() * 11) + Math.floor(Math.random() * 11);

    // re-initialize game timer
    t = 0;
    interval = setInterval(() => {
      t += 1;
    }, 1000);

    await validateGame();
  }

  beforeUpdate(() => {
    shuffle(options);
  });

  onMount(async () => {
    await replayGame();
  });
</script>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
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

  .answer-btn {
    width: 6rem;
    font-size: 1.5rem;
    font-family: "Comic Sans MS";
    border-radius: 8px;
    color: var(--text-1);
    background-color: var(--hue-1);
  }

  .answer-btn:disabled {
    filter: grayscale(100%);
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

  section {
    display: flex;
    justify-content: center;
  }
  /* pop up container */
  aside {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Comic Sans MS";
    /* height: fit-content;
        width: fit-content; */
    right: 1rem;
    bottom: 1rem;
    border: solid darkslategray 2px;
    background-color: pink;
    z-index: 2;
  }

  /* note: to adjust size of encouragement pop up just change aside img height */
  aside h6 {
    text-align: center;
    margin: 0;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    background-color: darkslategray;
    color: lightgoldenrodyellow;
    width: 100%;
  }

  aside img {
    /* just adjust height to change the pop up dimensions */
    height: 10rem;
    margin: 0;
  }

  section img {
    height: 40px;
    width: 40px;
  }

  #pop-up {
    display: none;
  }

  footer {
    /* border: solid black 2px; */
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 600px) {
    aside {
      bottom: 5rem;
      right: 0;
    }

    #replay-btn {
      right: 0.5rem;
    }
  }
</style>

<svelte:head>
  <title>Games | Addition</title>
</svelte:head>

<!-- <User let:user> -->
<!-- position: fixed  -->

<aside id="pop-up">
  <h6>~ NICE WORK ~</h6>
  <img src="/images/pbjt.gif" alt="gif" />
</aside>
<!-- position != fixed  -->

<div>
  <header>
    <button id="back-btn" on:click={async () => await goto('/games')}>
      Back to games
    </button>
    <h2>
      {@html prompt}
    </h2>
    <button id="replay-btn" on:click|preventDefault={replayGame}>
      Play again?
    </button>
  </header>
  <ImageGrid numImages={a} imageSource="/images/banana.png" imageAlt="banana" />
  <section><img src="/images/plus-sign.png" alt="plus-sign" /></section>
  <ImageGrid numImages={b} imageSource="/images/banana.png" imageAlt="banana" />

  <footer>
    {#each options as option}
      <input
        class="answer-btn"
        type="button"
        value={option}
        on:click|preventDefault={(e) => validateAnswer(e)} />
    {/each}
  </footer>
</div>
<!-- </User> -->
