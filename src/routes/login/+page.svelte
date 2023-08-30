<script >
	import { goto } from '$app/navigation';


	 import {supabase} from '$lib/helper/supabase'
	import { prevent_default } from 'svelte/internal';

	export let data

	 let email =''
	 let password = ''

	 async function handleClick(){

		const { error } = await supabase.auth.signInWithPassword.from('userinfo').insert({id: 1 , email: '',password:''})

	 }
	 

	 const signIn =  async function signInWithEmail() {
		console.log(email,password)
  		const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if(error){
	//todo

  } else {
	goto('/admin');
  } 
}
	  
	
</script>

<main>
	<h1>Login</h1>
	<form action="" class="auth-form" on:submit|preventDefault ={signIn}  >
		<label for=""> Email </label>
		<input type="text" name="email" bind:value={email}/>
		<label for=""> Password </label>
		<input type="password" name="password"bind:value={password} />
		<button class="btn btn-primary" on:click|once={handleClick}  >Login</button>
	</form>
</main>
