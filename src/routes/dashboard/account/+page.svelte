<script>
	import { onMount } from 'svelte';
    import { getUserActive } from '../../../app';
	import { logout } from '../../../app';
	import { countColleagues } from '../../../app';

	let userActive;
    let colleagues;
	let src = '/user-img.jpg';


	onMount(async () => {
        userActive = await getUserActive();
        colleagues =  await countColleagues(userActive);
		/*src = userActive.profile_pic;

const reader = new FileReader();

reader.onload = (e) => {
	src = e.target.result;
};*/
	});

</script>

<div class="user-profile-container">
	<div class="hero-section">
		<p><b>My Profile</b></p>
		<img src="/standupman-white.svg" class="bg-img bg-img-1" alt="" />
		<img src="/profile-hero-section-bg-pattern.svg" class="bg-img bg-img-2" alt="" />
		<a href=" " class="btn logout-btn" on:click={logout(userActive)}>Log Out</a>
		<div class="user-info">
			<div class="user-avatar-container">
				{#if userActive}
					<img {src} alt="" />
				{/if}
			</div>
			<div class="user-details">
				{#if userActive}
					<p class="user-name">{userActive.full_name}</p>
				{/if}
				<p class="user-job-title">Software Engineer</p>
			</div>
			<div class="social-media-links-container">
				<a href="" class="social-media-link-item">
					<img src="/icons/icon-youtube.svg" alt="Youtube icon" />
				</a>
				<a href="" class="social-media-link-item">
					<img src="/icons/icon-instagram.svg" alt="Instagram icon" />
				</a>
			</div>
		</div>
		<div class="user-numbers">
			<div class="user-numbers-item">
				<p>{colleagues}</p>
				<p>Colleagues</p>
			</div>
			<div class="user-numbers-item">
				<p>0</p>
				<p>Bosses</p>
			</div>
			<div class="user-numbers-item">
                {#if userActive}
				<p>{userActive.standups.length}</p>
                {/if}
				<p>Standups</p>
			</div>
		</div>
	</div>
	<div class="notes-and-activity-section">
		<div class="notes-container">
			<div class="notes todays-notes">
				<div class="notes-header">
					<p>Today's Notes</p>
					<p>
						<a href="" class="btn secondary-btn">View Planner</a>
					</p>
				</div>
				<div class="notes-body">
					<ul>
						<li>
							<p>
								<label for="notes-item-1">
									<input id="notes-item-1" type="checkbox" />
									<span>
										<img src="/icons/icon-check-white.svg" alt="" />
									</span>
								</label>
								<span>Implement subscription billing in payunit core</span>
							</p>
							<span class="badge-pill badge-pill-danger">urgent</span>
						</li>
						<li>
							<p>
								<label for="notes-item-2">
									<input id="notes-item-2" type="checkbox" />
									<span>
										<img src="/icons/icon-check-white.svg" alt="" />
									</span>
								</label>
								<span>Fix merchant subscription in payunit sorepco core</span>
							</p>
						</li>
						<li>
							<p>
								<label for="note-item-3">
									<input id="note-item-3" type="checkbox" />
									<span>
										<img src="/icons/icon-check-white.svg" alt="" />
									</span>
								</label>
								<span>Design Standup note file</span>
							</p>
							<span class="badge-pill badge-pill-secondary">medium</span>
						</li>
						<li>
							<p>
								<label for="notes-item-4">
									<input id="notes-item-4" type="checkbox" />
									<span>
										<img src="/icons/icon-check-white.svg" alt="" />
									</span>
								</label>
								<span>Plan Lab2doctor project</span>
							</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="notes">
				<div class="notes-header">
					<p>Planned Notes</p>
					<p>
						<a href="" class="btn secondary-btn">View Planner</a>
					</p>
				</div>
				<div class="notes-body">
					<ul>
						<li>Implement subscription billing in payunit core</li>
						<li>
							<span>Design Standup note file</span>
							<span class="badge-pill badge-pill-danger">urgent</span>
						</li>
						<li>Supervise intern projects</li>
						<li>Implement subscription billing in payunit core</li>
						<li>
							<span>Design Standup note file</span>
							<span class="badge-pill badge-pill-secondary">medium</span>
						</li>
						<li>
							<span>Implement subscription billing in payunit core</span>
							<span class="badge-pill badge-pill-danger">urgent</span>
						</li>
						<li>Plan Lab2doctor project</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="activity-container">
			<div class="header">
				<p>Your activity in the past 7 days</p>
				<div class="header-btns">
					<a href="" class="btn primary-btn">Invite others</a>
					<a href="" class="btn secondary-btn">View activity</a>
				</div>
			</div>
			<div class="past-activities-container">
				<div class="activity tasks-completed">
					<div class="cta-icons">
						<a href="">
							<img src="/icons/icon-plus-black.svg" alt="" />
						</a>
						<a href="">
							<img src="/icons/icon-share.svg" alt="" />
						</a>
					</div>
					<p>25</p>
					<p>Task Completed</p>
				</div>
				<div class="activity tasks-planned">
					<div class="cta-icons">
						<a href="">
							<img src="/icons/icon-plus-black.svg" alt="" />
						</a>
						<a href="">
							<img src="/icons/icon-share.svg" alt="" />
						</a>
					</div>
					<p>452</p>
					<p>Tasks Planned</p>
				</div>
				<div class="activity tasks-reported">
					<div class="cta-icons">
						<a href="">
							<img src="/icons/icon-plus-black.svg" alt="" />
						</a>
						<a href="">
							<img src="/icons/icon-share.svg" alt="" />
						</a>
					</div>
					<p>45</p>
					<p>Tasks Reported</p>
				</div>
			</div>
		</div>
	</div>
</div>
