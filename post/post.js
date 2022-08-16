// get params
// call fetch utils

import { renderDetail } from '../render-utils.js';
// import { getPostDetail }

//  grab dom element 

postDetailsEl = document.getElementById('post-details-container');

const id = URLSearchParams(window.location.search);

async function displayPost() {
    const post = await getPostDetail(id);
    const postDetailEl = renderDetail(post);
    postDetailsEl.append(postDetailEl);
}

displayPost();