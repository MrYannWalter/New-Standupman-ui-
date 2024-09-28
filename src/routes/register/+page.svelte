<script>

	let email;
	let firstname;
	let lastname;
	let username;
	let password;
	let confirmPassword;
	let fullname;
	let errorMessage;
	
	const register = async () => {
		// Password validation
		if (password !== confirmPassword) {
			errorMessage = 'Les mots de passe ne correspondent pas.';
			return;
		}

		// Storing de fullname
		fullname = `${firstname} ${lastname}`;

		// Data to send
		const data = {
			user: {
				username: username,
				email: email,
				full_name: fullname,
				password: password
			}
		};
		try {
			const response = await fetch('http://localhost:5000/users/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			});

			if (response.ok) {
				window.location.href = '/login';
			} else {
				console.error('Erreur lors de lenregistrement');
			}

			console.log('oookay');
		} catch (error) {
			errorMessage = error.message;
		}
	};

</script>

<main>
	<section class="authentification-page">
		<div class="authentication-page-illustration-img-container">
			<div class="welcome-message">
				<p>Welcome</p>
				<p>Nice to see you</p>
			</div>
			<img src="/authentication-pages-illustration.svg" alt="" />
		</div>
		<div class="authentication-form-container">
			<div class="logo-box">
				<img src="/logo.svg" alt="" />
			</div>
			<!-- Registration form -->
			<form on:submit|preventDefault={register} class="authentication-form">
				<p>Register</p>
				<div class="input-with-icon-form-group u-margin-bottom-small">
					<i class="fas fa-envelope text-primary" />
					<input type="text" placeholder="Email" bind:value={email} required />
				</div>
				<div class="form-group-row u-margin-bottom-small">
					<div class="input-with-icon-form-group">
						<i class="fas fa-user text-primary" />
						<input type="text" placeholder="First name" bind:value={firstname} required />
					</div>
					<div class="input-with-icon-form-group">
						<i class="fas fa-user text-primary" />
						<input type="text" placeholder="Last name" bind:value={lastname} required />
					</div>
				</div>
				<div class="input-with-icon-form-group u-margin-bottom-small">
					<i class="fas fa-user text-primary" />
					<input type="text" placeholder="Username" bind:value={username} required />
				</div>
				<div class="input-with-icon-form-group u-margin-bottom-small">
					<i class="fas fa-lock text-primary" />
					<input type="password" placeholder="Password" bind:value={password} required />
				</div>
				<div class="input-with-icon-form-group u-margin-bottom-small">
					<i class="fas fa-lock text-primary" />
					<input
						type="password"
						placeholder="Confirm Password"
						bind:value={confirmPassword}
						required
					/>
				</div>

				<input type="submit" value="Register" class="u-margin-bottom-small" />
			</form>
			{#if errorMessage}
			<p class="error">{errorMessage}</p>
			{/if }
			<a href="/" class="signin-with-google-link u-margin-bottom-large">
				<img src="/icons/icon-google.svg" alt="" />
				<span>Or sign-in with google</span>
			</a>
			<p class="u-padding-bottom-small">
				Already have an account? <a href="/login" class="text-primary">Log in</a>
			</p>
		</div>
	</section>
</main>

<style>
	@import '../../../static/css/landing.css';
</style>
