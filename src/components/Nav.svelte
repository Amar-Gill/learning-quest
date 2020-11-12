<script>
  import { User } from "sveltefire";
  import { goto } from "@sapper/app";
</script>

<style>
  /* TODO - refactor for media queries */
  nav {
    position: fixed;
    background-color: var(--hue-1);
    z-index: 30;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  li {
    width: 100%;
    padding-bottom: 0.25rem;
    padding-top: 0.25rem;
    /* see tooltip tutorial: https://www.w3schools.com/css/css_tooltip.asp */
    position: relative;
  }

  li:last-child {
    margin-top: auto;
  }

  /* see tooltip tutorial: https://www.w3schools.com/css/css_tooltip.asp */
  li span {
    visibility: hidden;
    width: 4rem;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    top: 0.25rem;
    left: 105%;
  }

  /* unvisited link */
  a:link {
    color: var(--text-1);
  }

  /* visited link */
  a:visited {
    color: var(--text-1);
  }

  a:hover {
    filter: grayscale(0%) opacity(1);
  }

  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    filter: grayscale(100%) opacity(0.7);
  }

  button {
    color: var(--hue-1);
    border-radius: 5px;
    background-color: var(--text-1);
    font-weight: bold;
    margin-left: 0.5rem;
  }

  /* small screen */
  @media only screen and (max-width: 600px) {
    nav {
      bottom: 0;
      width: 100vw;
      height: 5rem;
    }

    ul {
      flex-direction: row;
    }

    li:last-child {
      display: none;
    }
  }

  /* large screen */
  @media only screen and (min-width: 600px) {
    nav {
      top: 0;
      width: 5rem;
      height: 100vh;
    }

    li:hover span {
      visibility: visible;
    }

    li span::after {
      content: " ";
      position: absolute;
      top: 50%;
      right: 100%;
      /* To the left of the tooltip */
      margin-top: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent black transparent transparent;
    }
  }
</style>

<nav>
  <ul>
    <li>
      <a href="."> <i class="fas fa-house-user fa-3x" /> <span>home</span> </a>
    </li>

    <li>
      <a href="activity">
        <i class="far fa-chart-bar fa-3x" />
        <span>activity</span>
      </a>
    </li>

    <li>
      <a href="games">
        <i class="fas fa-gamepad fa-3x" />
        <span>games</span>
      </a>
    </li>
    <li>
      <User persist={sessionStorage} let:auth>
        <button on:click|preventDefault={() => console.log(true)}>AUTH?</button>
        <div slot="signed-out">
          <button on:click={() => console.log(false)}>AUTH?</button>
        </div>
      </User>
    </li>
    <li>
      <User persist={sessionStorage} let:auth>
        <button on:click|preventDefault={() => auth.signOut()}>log-out</button>
        <div slot="signed-out">
          <button on:click={() => goto('/login')}>log-in</button>
        </div>
      </User>
    </li>
  </ul>
</nav>
