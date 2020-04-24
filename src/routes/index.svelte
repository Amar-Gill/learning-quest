<style>
	div {
		display: flex;
		align-items: flex-end;
		height: 100vh;
		background-image: linear-gradient(black 20%, darkslategrey 40%, white 90%);
		border-radius: 6px;
	}

	img {
		width: 100%;
		max-width: 240px;
	}

	figure {
		animation-duration: 3s;
		animation-name: slidein;
		animation-fill-mode: forwards;
	}

	@keyframes slidein {

		to {
			/* margin-left: 78%; */
			transform: translateX(68vw);
			/* width: 100%; */
		}
	}

	h1 {
		position: fixed;
		color: lightgoldenrodyellow;
		left: 7rem;
	}
</style>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Learning-Quest 0.1.0</h1>

<div>
	<figure id='fig'>
		<img alt='ruby-light' src='images/Carbuncle.png'>
		<!-- <figcaption>Carbuncle casts Ruby Light</figcaption> -->
	</figure>
</div>