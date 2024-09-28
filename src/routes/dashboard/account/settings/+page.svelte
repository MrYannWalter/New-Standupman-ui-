<script>
	import { onMount } from 'svelte';

	let userActive;
	//let profilePic;
  let src;

  async function getUsers() {
	try {
		const response = await fetch('http://localhost:5000/users', {
			headers: {
				Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.e30.pSogKqjVaHTX_UmkrqcaL7x_bJRagxaHyuAZ0y6S0XY'
			}
		});
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error young man', error);
	}
}

	onMount(async () => {
		const users = await getUsers();
		users.users.forEach(user => {
		if(user.logged === 'true'){
			userActive = user;
		}			
		});
		console.log(userActive);
	});
  

	/*const changePic = async () => {
    userActive.profile_pic = profilePic[0];
		console.log(userActive.profile_pic);

			const reader = new FileReader();

			reader.onload = (e) => {
				src = e.target.result;

    let userActiveChange = JSON.parse(localStorage.getItem('user'));
    userActiveChange.profile_pic = src;
    localStorage.setItem('user', JSON.stringify(userActiveChange));

			};

		  reader.readAsDataURL(userActive.profile_pic);
		
	};*/

	/*const changePic = async () => {
    userActive.profile_pic = profilePic[0];
    let file = userActive.profile_pic;
    const url = URL.createObjectURL(file);
      const link = document.createElement('a');
      link.href = url;
      let newFileName = `${userActive.full_name.trim()}.${file.name.split('.').pop()}`;
      link.download = newFileName;
      link.click();
      URL.revokeObjectURL(url);

      src=`C:/Users/DELL/Downloads/${newFileName}`;
      console.log(src)

  }*/




</script>

<div class="breadcrumb">
	<p class="breadcrumb-item">Dashboard</p>
	<span>></span>
	<p class="breadcrumb-item text-primary">Settings</p>
</div>
<div class="settings-container">
	<div class="header">
		<p>Profile Details</p>
	</div>
	<div class="settings-inner-container">
		<form class="update-profile-details-form">
			<div class="form-group">
				<label for="username">Username</label>
				{#if userActive}
					<input type="text" value={userActive.username} />
				{/if}
			</div>
			<div class="form-group">
				<label for="firstname">First Name</label>
				{#if userActive}
					<input type="text" value={userActive.full_name.split(' ').slice(0, -1)}/>
				{/if}
			</div>
			<div class="form-group">
				<label for="firstname">Last Name</label>
				{#if userActive}
					<input type="text" value={userActive.full_name.split(' ').slice(-1)} />
				{/if}
			</div>
			<div class="form-group">
				<label for="password">Password</label>
				<div class="input-with-link-form-group">
					{#if userActive}
						<input type="password" />
					{/if} <a href="#" class="text-primary">Change?</a>
				</div>
			</div>
			<div class="form-group">
				<input type="submit" value="Save" />
			</div>
		</form>
		<div class="update-profile-picture-container">
			<img src={src} alt="" />
			<!--a href="">
				<i class="far fa-image" />
				<span>Change profile <br /> picture</span>
			</a-->
		</div>
	</div>
</div>
