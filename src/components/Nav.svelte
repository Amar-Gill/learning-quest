<script>
    export let auth;
</script>

<nav>
    <ul>
        <li>
            <a href=".">home</a>
        </li>
        <li>
            <a href="activity">activity</a>
        </li>
        <li>
            <a href="add">add</a>
        </li>
        <li>
            <button on:click|preventDefault="{()=> auth.signOut().then(() => console.log('user signed out'))}">log-out</button>

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

    /* selected link */
    a:active {
        font-weight: bolder;
        color:blueviolet;
    }

    button {
        color: darkslategray;
        border-radius: 5px;
        background-color: lightgoldenrodyellow;
        font-weight: bold;
        margin-left: .5rem;
    }
</style>