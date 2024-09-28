<script>
	// import {createStandup} from '../../../../app'

	let standupName;
	let questionName;
	let questionsList = [];
	// let questionModel = {
	// 	"title": "Question Name",
	// 	"response_type": "Type"
	// }
	let month;
	let day;
	let year;
	let description;

	const stan = {
		standup: {
			name: standupName,
			completionTime: `${month}/${day}/${year}`,
			questions: questionsList
		}
	};

	let questionsForm = [false, false, false, false, false];
	let questionsAdded = [false, false, false, false, false];

	let questionsName = [
		'',
		'What did you do today?',
		'What challenges did you face?',
		'What do you intend to do tomorrow?',
		''
	];

	let newQuestions = [];

	let questionsType = 'String';

	function setQuestion(i) {
		let question = {
			title: questionsName[i],
			response_type: questionsType
		};

		if (i === 4) {
			newQuestions = [...newQuestions, question];
		}

		questionsList.push(question);
		questionsForm[i] = !questionsForm[i];
		questionsAdded[i] = true;
	}

	function dropQuestion(i) {
		let question = {
			title: questionsName[i],
			response_type: questionsType
		};

		// if(i===4){
		// 	newQuestions = newQuestions.filter((obj) => obj.title !== question.title)
		// }

		questionsList = questionsList.filter((obj) => obj.title !== question.title);
		questionsAdded[i] = false;
	}
	function dropNewQuestion(question) {
		newQuestions = newQuestions.filter((obj) => obj.title !== question.title);

		questionsList = questionsList.filter((obj) => obj.title !== question.title);
	}

	// let data = {
	// 	standup: {
	// 		name: standupName,
	// 		completionTime: getDateString(),
	// 		questions: questionsList
	// 	}
	// };

	// function getDateString() {
	// 	const today = new Date();
	// 	const month = (today.getMonth() + 1).toString().padStart(2, '0');
	// 	const day = today.getDate().toString().padStart(2, '0');
	// 	const year = today.getFullYear();
	// 	return `${month}/${day}/${year}`;
	// }

</script>

<div class="breadcrumb">
	<p class="breadcrumb-item">Dashboard</p>
	<span>></span>
	<p class="breadcrumb-item">Standups</p>
	<span>></span>
	<p class="breadcrumb-item text-primary">Add new</p>
</div>

<div class="add-new-standup-container">
	<div class="header">
		<p>Add a New Standup</p>
	</div>

	<div class="new-standup">
		<form class="standup-form">
			<div class="form-group u-margin-bottom-small">
				<label for="name">Name</label>
				<input
					type="text"
					placeholder="Enter Standup name here"
					name="name"
					bind:value={standupName}
					required
				/>
			</div>
			<div class="form-group">
				<label for="description">Description</label>
				<textarea
					name="description"
					id=""
					cols="30"
					rows="10"
					bind:value={description}
					placeholder="Enter Description name here"
				/>
			</div>
		</form>
		<div class="schedule">
			<p>Schedule</p>
			<div class="schedule-inputs-container">
				<div class="form-group">
					<i class="far fa-calendar-alt icon-left text-primary" />
					<input
						type="text"
						class="u-padding-left-medium"
						placeholder="month"
						bind:value={month}
						required
					/>
					<i class="fas fa-search icon-right text-gray" />
				</div>
				<div class="form-group">
					<i class="far fa-calendar-alt icon-left text-primary" />
					<input
						type="text"
						class="u-padding-left-medium"
						placeholder="day"
						bind:value={day}
						required
					/>
					<i class="fas fa-search icon-right text-gray" />
				</div>
				<div class="form-group">
					<i class="far fa-clock icon-left text-primary" />
					<input
						type="text"
						class="u-padding-left-medium"
						placeholder="year"
						bind:value={year}
						required
					/>
					<i class="fas fa-search icon-right text-gray" />
				</div>
			</div>
			<a href="" class="btn btn-outline-primary icon-left"
				><i class="fas fa-plus text-primary" />
				Remind Me If I dont respond</a
			>
		</div>
	</div>
	<div class="questions-and-new-question-form-container">
		<p>Questions</p>
		<div class="questions-container">
			<ul>
				<li>
					<form on:submit={() => setQuestion(1)} class="question-form">
						<div class="form-header">
							<p>What did you do today?</p>

							{#if !questionsAdded[1]}
								<a
									class="form-dropdown-btn"
									href="#"
									on:click={() => (questionsForm[1] = !questionsForm[1])}
								>
									<i class="fas fa-pencil-alt text-primary" />
								</a>
							{/if}
							<!-- <img src="/icons/icon-pencil.svg" alt="" /> -->
							{#if questionsAdded[1]}
								<a href="" on:click={() => dropQuestion(1)}>
									<img src="/icons/icon-trash.svg" alt="" />
								</a>
							{/if}
						</div>
						{#if questionsForm[1]}
							<div class="form-body ">
								<div class="form-group u-margin-bottom-small">
									<label for="question-name">Question Name</label>
									<input
										type="text"
										placeholder="Enter question name Here"
										name="question-name"
										bind:value={questionsName[1]}
										required
									/>
								</div>
								<div class="form-group u-margin-bottom-small">
									<label for="question-type">Type</label>
									<select name="question-type" id="">
										<option value={questionsType}>String</option>
									</select>
								</div>
								<div class="u-margin-bottom-small">
									<input type="submit" value="Add" class="form-submit-btn" />
								</div>
							</div>
						{/if}
					</form>
				</li>
				<li>
					<form on:submit={() => setQuestion(2)} action="#" class="question-form">
						<div class="form-header">
							<p>What challenges did you face?</p>
							{#if !questionsAdded[2]}
								<a
									class="form-dropdown-btn"
									href="#"
									on:click={() => (questionsForm[2] = !questionsForm[2])}
								>
									<i class="fas fa-pencil-alt text-primary" />
								</a>
							{/if}
							<!-- <img src="/icons/icon-pencil.svg" alt="" /> -->
							{#if questionsAdded[2]}
								<a href="" on:click={() => dropQuestion(2)}>
									<img src="/icons/icon-trash.svg" alt="" />
								</a>
							{/if}
						</div>
						{#if questionsForm[2]}
							<div class="form-body ">
								<div class="form-group u-margin-bottom-small">
									<label for="question-name">Question Name</label>
									<input
										type="text"
										placeholder="Enter question name Here"
										value={questionsName[2]}
										required
									/>
								</div>
								<div class="form-group u-margin-bottom-small">
									<label for="question-type">Type</label>
									<select name="question-type" id="">
										<option value={questionsType}>String</option>
									</select>
								</div>
								<div class="u-margin-bottom-small">
									<input type="submit" value="Add" class="form-submit-btn" />
								</div>
							</div>
						{/if}
					</form>
				</li>
				<li>
					<form on:submit={() => setQuestion(3)} action="#" class="question-form">
						<div class="form-header">
							<p>What do you intend to do tomorrow?</p>
							{#if !questionsAdded[3]}
								<a
									class="form-dropdown-btn"
									href="#"
									on:click={() => (questionsForm[3] = !questionsForm[3])}
								>
									<i class="fas fa-pencil-alt text-primary" />
								</a>
							{/if}
							<!-- <img src="/icons/icon-pencil.svg" alt="" /> -->
							{#if questionsAdded[3]}
								<a href="" on:click={() => dropQuestion(3)}>
									<img src="/icons/icon-trash.svg" alt="" />
								</a>
							{/if}
						</div>
						{#if questionsForm[3]}
							<div class="form-body ">
								<div class="form-group u-margin-bottom-small">
									<label for="question-name">Question Name</label>
									<input
										type="text"
										placeholder="Enter question name Here"
										value={questionsName[3]}
										required
									/>
								</div>
								<div class="form-group u-margin-bottom-small">
									<label for="question-type">Type</label>
									<select name="question-type" id="">
										<option value={questionsType}>String</option>
									</select>
								</div>
								<div class="u-margin-bottom-small">
									<input type="submit" value="Add" class="form-submit-btn" />
								</div>
							</div>
						{/if}
					</form>
				</li>
				{#each newQuestions as question}
					<li>
						<form class="question-form">
							<div class="form-header">
								<p>{question.title}</p>
								<!-- <img src="/icons/icon-pencil.svg" alt="" /> -->
								<a href="" on:click={() => dropNewQuestion(question)}>
									<img src="/icons/icon-trash.svg" alt="" />
								</a>
							</div>
						</form>
					</li>
				{/each}
				<li>
					<form on:submit={() => setQuestion(4)} action="#" class="question-form">
						<div class="form-header">
							<p>Add a new question</p>
							<a
								class="form-dropdown-btn"
								href="#"
								on:click={() => (questionsForm[4] = !questionsForm[4])}
							>
								<i class="fas fa-chevron-down text-primary" />
								<!-- <img src="/icons/icon-chevron-down.svg" alt=""/> -->
							</a>
						</div>
						{#if questionsForm[4]}
							<div class="form-body">
								<div class="form-group u-margin-bottom-small">
									<label for="question-name">Question Name</label>
									<input
										type="text"
										placeholder="Enter question name Here"
										bind:value={questionsName[4]}
										required
									/>
								</div>
								<div class="form-group u-margin-bottom-small">
									<label for="question-type">Type</label>
									<select name="question-type" id="">
										<option value={questionsType}>String</option>
									</select>
								</div>
								<div class="u-margin-bottom-small">
									<input type="submit" value="Add" class="form-submit-btn" />
								</div>
							</div>
						{/if}
					</form>
				</li>
			</ul>
		</div>

		<div class="u-margin-top-large">
			<a href="" class="btn btn-outline-primary icon-left"
				><i class="fas fa-plus text-primary" />
				Add questions</a
			>
		</div>
	</div>
	<div class="action-button-container">
		<a href="" class="btn btn-danger">Cancel</a>
		<a href="" class="btn primary-btn">Add &amp; Continue</a>
		<a href="" class="btn primary-btn">Add &amp; Finish</a>
	</div>
</div>
