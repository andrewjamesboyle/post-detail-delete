import { checkAuth, getProfiles, signOutUser } from '../fetch-utils.js';
import { renderProfile } from '../render-utils.js';

const usersEl = document.getElementById('users-container');

async function displayProfiles() {
    const users = await getProfiles();

    for (let user of users) {
        const userEl = renderProfile(user);
        usersEl.append(userEl);
    }

}

displayProfiles();

const signOutLink = document.getElementById('sign-out-link');
signOutLink.addEventListener('click', signOutUser);
checkAuth();