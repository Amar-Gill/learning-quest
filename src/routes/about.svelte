<svelte:head>
	<title>About</title>
</svelte:head>

<script>
	import { User, Doc } from 'sveltefire';
</script>

<User let:user let:auth>
	
	<div>
		<h1>User Report Data</h1>
		<p>User ID: {user.uid}</p>

		<Doc path={`reports/${user.uid}`} let:data let:ref log>
			{#each data.completedGames as game}
				<p>Game: {game.game}</p>
				<ul>
					<li>Completed: {game.completedAt.toDate()}</li>
					<li>Time (seconds): {game.time}</li>
				</ul>
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
					  });
				}}">
				Create Document
			  </button>
			</span>
		</Doc>

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
		overflow: scroll;
    }
</style>