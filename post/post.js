import { renderDetail } from '../render-utils.js';
import { getPostById } from '../fetch-utils.js';

//  grab dom element 

const postDetailsEl = document.getElementById('post-details-container');

const params = new URLSearchParams(window.location.search);

async function displayPost() {
    const post = await getPostById(params.get('id'));
    console.log(post);
    const postDetailEl = renderDetail(post);
    postDetailsEl.append(postDetailEl);
}

displayPost();