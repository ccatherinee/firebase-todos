<!-- javascript code which first imports all the necessary things to implement logging in and the todo list itself --> 
<script>
	// allows us to create profiles for each user 
    import Profile from './Profile.svelte';
	// need this import to implement the actual todo list 
    import Todos from './Todos.svelte';
	// allows us to create the login functionality 
    import { auth, googleProvider } from './firebase';
    import { authState } from 'rxfire/auth';

	// creates a variable for user 
    let user;

    const unsubscribe = authState(auth).subscribe(u => user = u);

	// allows people to sign in using email 
    function login() {
        auth.signInWithPopup(googleProvider);
    }
</script>


<section>
<!-- if the user is already signed in, load the profile info, the logout button, and the todo list for that person --> 
{#if user}
    <Profile {...user} />
    <button on:click={ () => auth.signOut() }>Logout</button>
    <hr>
    <Todos uid={user.uid} />
<!-- if no one is logged in, show the log-in button and allow users to sign in wth Google --> 
{:else}
	<button on:click={login}>
		Signin with Google
	</button>
{/if}
</section>