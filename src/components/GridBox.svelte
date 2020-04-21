<script>
    // number of cards to draw in the grid
    export let cards;
</script>

<section>
    <!-- https://github.com/sveltejs/svelte/issues/2968 -->
    {#each {length: cards} as card}
        <div>
            <img src="/images/banana.png" alt="banana"/>
        </div>
    {/each}
</section>

<style>
    section {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    }

    img {
        height: 100px;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border-radius: 4px;
        transition: all 500ms;
        overflow: hidden;

        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>
