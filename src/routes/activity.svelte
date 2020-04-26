<svelte:head>
	<title>Activity</title>
</svelte:head>

<script>
	import { User, Doc } from 'sveltefire';
</script>

<User let:user let:auth>

	<div>
		<h3>User Activity</h3>
		<p>User ID: <em>{user.uid}</em></p>
		<section>
			<Doc path={`reports/${user.uid}`} let:data let:ref log>
				{#each data.completedGames as game}
				<aside class='lazy'>
					<p>Learning Exercise: {game.game}</p>
					<ul>
						<li>Completed: {game.completedAt.toDate()}</li>
						<li>Time (seconds): {game.time}</li>
					</ul>
				</aside>
				{/each}
		
				<span slot="loading">Loading...</span>
				<span slot="fallback">
					Initialize report document for user: {user.uid}
					<button
					on:click="{() => {
						ref.set({
							uid: user.uid,
							createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
							lastActivity: firebase.firestore.Timestamp.fromDate(new Date()),
							completedGames: []
						  });
					}}">
					Create Document
				  </button>
				</span>
			</Doc>
		</section>

	</div>
</User>

<style>
	div {
        display: flex;
        flex-direction: column;
        height: 100%;
		color: lightgoldenrodyellow;
        background-color: lightslategrey;
        /* background-image: linear-gradient(darkslategray 10%, lightslategrey 40%, white 90%); */
        border-radius: 6px;
		padding-left: 2rem;
    }

	section {
		overflow: scroll;
		border-top: solid lightgoldenrodyellow 2px;
		width: 50vw;
	}

	aside {
		background-color: white;
		color: black;
		border-radius: 6px;
		box-shadow: 3px 6px;
		/* display: flex; */
		margin-bottom: 1rem;
		padding-left: 1rem;
		/* padding-top: 1rem; */
		width: calc(100% - 3px);
	}
</style>