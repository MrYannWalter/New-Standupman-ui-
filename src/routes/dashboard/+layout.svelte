<script>
	import SideBar from './sidebar.svelte';
	import { onMount } from 'svelte';
	import { getUserActive } from '../../app';
	import { logout } from '../../app';

	let userActive;
	let src = '/user-img.jpg';

	onMount(async () => {
		userActive = await getUserActive();

		/*src = userActive.profile_pic;

const reader = new FileReader();

reader.onload = (e) => {
	src = e.target.result;
};*/
	});

	let hideSideBar = false;
	let increaseContentSize = false;
	let hideUserDropdown = true;

	function toggleSideBar() {
		hideSideBar = !hideSideBar;
		increaseContentSize = !increaseContentSize;
	}

	function toggleUserDropdown() {
		hideUserDropdown = !hideUserDropdown;
		console.log('clicked ...');
	}

	// $: {
	// 	unsubscribe();
	// }
</script>

<main>
	<!-- Sidebar -->
	<SideBar {hideSideBar} />

	<!-- Header -->
	<header class="dashboard-header" class:increase-width={increaseContentSize}>
		<div class="header-items-container header-items-container-1">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<p on:click={toggleSideBar} id="sidebar-toggle" class="sidebar-toggle-icon">
				<span>&nbsp;</span>
			</p>
			<div class="form-group">
				<input type="text" placeholder="Search.." class="header-search-input" />
				<i class="fas fa-search" />
			</div>
		</div>

		<div class="header-items-container header-items-container-2">
			<div class="user-cta-icons">
				<a href="/dashboard/account/settings"><i class="fas fa-cog" /></a>
				<a href=""><span class="number-of-notifications">12</span><i class="fas fa-bell" /></a>
			</div>
			<div on:click={toggleUserDropdown} class="user-info">
				<div class="user-avatar-container" id="user-avatar-container">
					{#if userActive}
						<img {src} alt="" />
					{/if}
				</div>
				<div class="user-details">
					{#if userActive}
						<p class="user-name">{userActive.full_name}</p>
						<p class="user-job-title">Software Engineer</p>
					{/if}
				</div>
			</div>
		</div>
	</header>

	<!-- User Details Dropdowm -->
	<div class:hide-user-details-dropdown={hideUserDropdown} class="user-details-dropdown">
		<div class="user-avatar">
			{#if userActive}
				<img src={userActive.profile_pic} alt="" />
			{/if}
		</div>
		<div class="user-details">
			<!--p class="user-name">Fon E. Noel</p>
			<p>Admin User</p-->
			{#if userActive}
				<p class="user-name">{userActive.full_name}</p>
				<p class="user-job-title">Software Engineer</p>
			{/if}
		</div>

		<div class="user-details-dropdown-cta-btns">
			<a href="/dashboard/account/settings" class="btn secondary-btn icon-left"
				><i class="fas fa-cog" /> Settings</a
			>
			<a href=" " class="btn btn-danger icon-left" on:click={logout(userActive)}
				><i class="fas fa-sign-out-alt" /> Logout</a
			>
		</div>
	</div>

	<!-- Main Dashboard Content -->
	<section class="main-dashboard-content" class:increase-width={increaseContentSize}>
		<slot />
	</section>
</main>

<style>
	@import '../../../static/css/styles.css';
</style>
