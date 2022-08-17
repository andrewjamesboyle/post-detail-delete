import { renderDetail } from '../render-utils.js';
import { checkAuth, deletePostById, getPostById } from '../fetch-utils.js';

//  grab dom element 

const postDetailsEl = document.getElementById('post-details-container');
const user = checkAuth();

const params = new URLSearchParams(window.location.search);

async function displayPost() {
    const post = await getPostById(params.get('id'));
    const postDetailEl = renderDetail(post);
    postDetailsEl.append(postDetailEl);
    if (user.id === post.user_id) {
        const buttonEl = document.createElement('button');
        buttonEl.textContent = 'Delete';
        buttonEl.addEventListener('click', async () => {
            await deletePostById(post.id);
            location.replace(`../`);
        });
        postDetailsEl.append(buttonEl);
       
    } 
    
}

displayPost();