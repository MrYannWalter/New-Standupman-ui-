<script>
	import { login } from '../../app';

	let username;
	let password;
	
</script>

<main>
	<section class="authentification-page">
		<div class="authentication-page-illustration-img-container">
			<div class="welcome-message">
				<p>Welcome Back</p>
				<p>Nice to see you</p>
			</div>
			<img src="/authentication-pages-illustration.svg" alt="" />
		</div>
		<div class="authentication-form-container">
			<div class="logo-box">
				<img src="/logo.svg" alt="" />
			</div>
			<!-- login form -->
			<form on:submit|preventDefault={login(username, password)} class="authentication-form">
				<p>Login</p>
				<div class="input-with-icon-form-group u-margin-bottom-small">
					<i class="fas fa-user text-primary" />
					<input type="text" placeholder="Username" bind:value={username} required />
				</div>
				<div class="input-with-icon-form-group">
					<i class="fas fa-lock text-primary" />
					<input type="password" placeholder="Password" bind:value={password} required />
				</div>
				<div class="remember-me-checkbox u-margin-top-extra-small u-margin-bottom-small">
					<input type="checkbox" name="rememberMe" id="" />
					<span>Remember me</span>
				</div>
				<input type="submit" value="Login" class="u-margin-bottom-small" />
				<!-- <p style="color: red">{errorMessage}</p> -->
			</form>
			<p class="u-padding-bottom-small">
				Forgot password? <a href="/login" class="text-primary">Click Here</a>
			</p>
			<p class="u-padding-bottom-small">
				Don't have an account? <a href="/register" class="text-primary">Register</a>
			</p>
		</div>
	</section>
</main>

<style>
	@import '../../../static/css/landing.css';
</style>
