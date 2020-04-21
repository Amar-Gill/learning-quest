<svelte:head>
	<title>About</title>
</svelte:head>

<script>
	import {User} from 'sveltefire';
</script>

<User let:user let:auth>
	<h1>About this site</h1>
	
	<p>User ID: {user.uid}</p>
	
	<p>This is the 'about' page. There's not much here.</p>

</User>
