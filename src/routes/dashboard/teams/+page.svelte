<script>
	import { onMount } from 'svelte';
	import { showTeamMembers } from '../../../app';
	import { showTeamStandups } from '../../../app';

	let activeTab = 0;
	let showInviteModal = false;
	let teamMembers = [];
	let standupList = [];

	onMount(async () => {
		teamMembers = await showTeamMembers('Team 1');
		standupList = await showTeamStandups('Team 1');
	});

	async function updateTeamStandups(team) {
		teamMembers = await showTeamMembers(team);
		standupList = await showTeamStandups(team);
	}
</script>

<div class="breadcrumb">
	<p class="breadcrumb-item">Dashboard</p>
	<span>></span>
	<p class="breadcrumb-item text-primary">Teams</p>
</div>
<section class="teams-container">
	<div class="header">
		<p>Teams</p>
	</div>
	<div class="teams-inner-container">
		<div class="teams-list-sidebar">
			<p>Teams List</p>
			<ul>
				<li>
					<a href="" class="icon-left" on:click={async () => await updateTeamStandups('Team 1')}>
						<i class="fas fa-users" />
						Team 1
					</a>
				</li>
				<li>
					<a href="" class="icon-left" on:click={async () => await updateTeamStandups('Team 2')}>
						<i class="fas fa-users" />
						Team 2
					</a>
				</li>
				<li>
					<a href="" class="icon-left" on:click={async () => await updateTeamStandups('Team 3')}>
						<i class="fas fa-users" />
						Team 3
					</a>
				</li>
				<li>
					<a href="" class="icon-left" on:click={async () => await updateTeamStandups('Team 4')}>
						<i class="fas fa-users" />
						Team 4
					</a>
				</li>
				<li>
					<a href="" class="icon-left" on:click={async () => await updateTeamStandups('Team 5')}>
						<i class="fas fa-users" />
						Team 5
					</a>
				</li>
			</ul>
		</div>
		<div class="teams-tab">
			<div class="tabs-menu">
				<p class:active-item={activeTab === 0} on:click={() => (activeTab = 0)} class="tabs-link">
					Members
				</p>
				<p class:active-item={activeTab === 1} on:click={() => (activeTab = 1)} class="tabs-link">
					Standups
				</p>
			</div>
			{#if activeTab === 0}
				<div id="members" class="tabs-content">
					<div class="members-container">
						{#each teamMembers as member}
							<div class="member-item">
								<div class="member-avatar">
									<img src="/user-img.jpg" alt="" />
								</div>
								<div class="member-info">
									<p class="name">{member.full_name}</p>
									<p class="email">{member.email}</p>
								</div>
							</div>
						{/each}
					</div>
					<a
						on:click={() => (showInviteModal = true)}
						id="add-member-btn"
						class="btn primary-btn icon-right u-margin-top-large"
						>Add New Member <i class="fas fa-plus" /></a
					>
				</div>
			{/if}
			{#if activeTab === 1}
				<div id="standups" class="tabs-content">
					<table class="standups-table">
						<thead>
							<tr>
								<td>Name</td>
								<td>Description</td>
								<td>Complete time limit</td>
								<td>Frequency</td>
								<td>Actions</td>
							</tr>
						</thead>
						<tbody>
							{#each standupList as standup}
								<tr>
									<td>{standup.name}</td>
									<td>
										{standup.description}
									</td>
									<td>{standup.completionTime}</td>
									<td>Daily</td>
									<td>
										<a href="">
											<img src="/icons/icon-pencil.svg" alt="" />
										</a>
										<a href="">
											<img src="/icons/icon-trash.svg" alt="" />
										</a>
										<a href="">
											<img src="/icons/icon-check.svg" alt="" />
										</a>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			{/if}
		</div>
	</div>
</section>

<div class:show={showInviteModal} class="invite-member-modal">
	<div class="close-modal">
		<button on:click={() => (showInviteModal = false)} class="close-icon"
			><i class="fa fa-times" /></button
		>
	</div>
	<form action="" class="invite-member-form">
		<p class="text-primary u-padding-bottom-small">Invite a user to join the team</p>
		<div class="form-group u-margin-bottom-small ">
			<label for="select-team">Select a team</label>
			<select name="select-team" id="">
				<option value="Team 1">Team 1</option>
				<option value="Team 2">Team 2</option>
				<option value="Team 3">Team 3</option>
				<option value="Team 4">Team 4</option>
				<option value="Team 5">Team 5</option>
			</select>
		</div>
		<div class="form-group">
			<label for="select-team">Enter email addresses</label>
			<textarea name="" cols="30" rows="10" />
		</div>
		<p class="u-margin-bottom-small">Your colleagues will received mail to enter this</p>
		<div class="form-group">
			<a href="" class="btn primary-btn icon-right"
				>Send invitation <i class="fas fa-paper-plane" /></a
			>
		</div>
	</form>
	<div class="invite-sent-popup">
		<span class="close-icon"><i class="fa fa-times" /></span>
		<p>Updated</p>
		<p>An invitation has been sent to <span class="text-primary">nest@gmail.com</span></p>
	</div>
</div>
