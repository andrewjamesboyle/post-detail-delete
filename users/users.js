import { checkAuth, getProfiles, signOutUser } from '../fetch-utils.js';
import { renderProfile } from '../render-utils.js';

const usersEl = document.getElementById('users-container');
const signOutLink = document.getElementById('sign-out-link');

signOutLink.addEventListener('click', signOutUser);

async function displayProfiles() {
    const users = await getProfiles();

    for (let user of users) {
        const userEl = renderProfile(user);
        usersEl.append(userEl);
    }

}

displayProfiles();

checkAuth();