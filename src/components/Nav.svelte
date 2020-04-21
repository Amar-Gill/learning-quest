<script>
    export let auth;
</script>

<nav>
    <ul>
        <li>
            <a href=".">home</a>
        </li>
        <li>
            <a href="about">about</a>
        </li>
        <li>
            <a href="add">add</a>
        </li>
        <li>
            <button  on:click={() => auth.signOut()}>log-out</button>
            
        </li>

    </ul>

</nav>

<style>
    /* TODO - refactor for media queries */
    nav {
        position: fixed;
        background-color:darkslategrey;
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
        color: lightgoldenrodyellow;
    }

    li:last-child {
        margin-top: auto;
    }
</style>