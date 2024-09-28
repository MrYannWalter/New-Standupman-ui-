// All users
export async function getUsers() {
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
// log in
export async function login(username, password) {
	const user = {
		username: username,
		password: password
	};
	try {
		let response = await fetch('http://localhost:5000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		});

		if (response.ok) {
			window.location.href = '/dashboard';
		} else {
			throw new Error("Informations d'identification incorrectes");
		}
	} catch (error) {
		console.log(error.message);
	}
}
// Active user
export async function getUserActive() {
	const users = await getUsers();
	let userActive;
	users.users.forEach((user) => {
		if (user.logged === 'true') {
			userActive = user;
		}
	});
	console.log('active nigga', userActive);
	return userActive;
}
// log out
export async function logout(userActive) {
	try {
		let response = await fetch('http://localhost:5000/logout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userActive)
		});

		if (response.ok) {
			window.location.href = '/login';
		} else {
			throw new Error("Informations d'identification incorrectes");
		}
	} catch (error) {
		console.log(error.message);
	}
}
// All  standups
async function getStandups() {
	try {
		const response = await fetch('http://localhost:5000/standups', {
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
// Show active user's standups
export async function showStandups() {
	let userActive = await getUserActive();
	let standupList = [];
	const allStandups = await getStandups();
	allStandups.standups.forEach((standup) => {
		userActive.standups.forEach((item) => {
			if (item === standup._id) {
				standupList.push(standup);
			}
		});
	});
	return standupList;
}
// Show active user's teams standups
export async function showTeamStandups(team) {
	let teamMembers = await showTeamMembers(team);
	let standupList = [];
	const allStandups = await getStandups();
	allStandups.standups.forEach((standup) => {
		teamMembers.forEach((member) => {
			member.standups.forEach((item) => {
				if (item === standup._id) {
					standupList.push(standup);
				}
			});
		});
	});
	return [...new Set(standupList)];
}
// Show each team
export async function showTeamMembers(team) {
	const users = await getUsers();
	let teamMembers = [];
	users.users.forEach((user) => {
		user.teams.forEach((item) => {
			if (item === team) {
				teamMembers.push(user);
			}
		});
	});
	return teamMembers;
}
// Count active user's teammates
export async function countColleagues(userActive) {
	const users = await getUsers();
	let numColleagues = 0;
	users.users.forEach((user) => {
			if(user._id !== userActive._id){
                user.teams.forEach((team) => {
                    userActive.teams.forEach((item) => {
                        if (item === team) {
                            numColleagues++;
                        }
                    });
                });
            }
	});
	return numColleagues;
}

export async function createStandup(standup){

	try {
		let response = await fetch('http://localhost:5000/standups/new', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(standup)
		});

		if (response.ok) {
			console.log('standup created');
		} else {
			throw new Error("Informations d'identification incorrectes");
		}
	} catch (error) {
		console.log(error.message);
	}
}