import { checkAuth, signOutUser, getPosts, getCategories, getPostsByCategory } from './fetch-utils.js';

import { renderPosts } from './render-utils.js';


const signOutLink = document.getElementById('sign-out-link');
signOutLink.addEventListener('click', signOutUser);

checkAuth();

const bulletinBoard = document.getElementById('bulletin-board');

async function displayPosts() {
    const posts = await getPosts();
    const listEls = renderPosts(posts);
    bulletinBoard.append(listEls);
}

displayPosts();

getCategories();

const dropdownEl = document.getElementById('dropdown');

dropdownEl.addEventListener('change', async () => {
    bulletinBoard.textContent = '';
    const userCategory = await getPostsByCategory(dropdownEl.value);
    if (userCategory.length === 0) {
        bulletinBoard.textContent = 'No Posts';
    } else {
        const posts = renderPosts(userCategory);
        bulletinBoard.append(posts);
    }
});

