<script>
    export let auth;

    let signOut = function () {
        // sign out of firebase auth instance
        auth.signOut().then(() => console.log('User signed out'));
    };
</script>

<nav>
    <ul>
        <li>
            <a href="."><i class="fas fa-house-user fa-3x"></i></a>
        </li>
        <li>
            <a href="activity"><i class="far fa-chart-bar fa-3x"></i></a>
        </li>
        <li>
            <a href="games"><i class="fas fa-gamepad fa-3x"></i></a>
        </li>
        <li>
            <button on:click|preventDefault="{
                    signOut
                }">
                log-out
            </button>
        </li>
    </ul>

</nav>

<style>
    /* TODO - refactor for media queries */
    nav {
        position: fixed;
        background-color: darkslategrey;
        top: 0;
        width: 5rem;
        height: 100vh;
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
        padding-bottom: .25rem;
        padding-top: .25rem;
        /* color: lightgoldenrodyellow; */
    }

    li:last-child {
        margin-top: auto;
    }

    /* unvisited link */
    a:link {
        color: lightgoldenrodyellow;
    }

    /* visited link */
    a:visited {
        color: lightgoldenrodyellow;
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
        color: darkslategray;
        border-radius: 5px;
        background-color: lightgoldenrodyellow;
        font-weight: bold;
        margin-left: .5rem;
    }
</style>