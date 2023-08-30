<script >

	import {supabase} from '$lib/helper/supabase'
   import { prevent_default } from 'svelte/internal';

	let email =''
	let password = ''
	let verifyPassword =''

	const signIn =  async function signInWithEmail() {
	   console.log(email,password)
		 const {  error } = await supabase.auth.signInWithPassword({
   email,
   password,
 });
 if(error){
   //todo

 } else {
   return{
	   props: {data}
   }
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
	   <label for=""> Verify </label>
	   <input type="password" name="password"bind:value={verifyPassword} />
	   <button class="btn btn-primary" on:click|once={handleClick} >Register</button>
   </form>
</main>
