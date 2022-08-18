const SUPABASE_URL = 'https://mgjjrgtykxiobwzymixr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nampyZ3R5a3hpb2J3enltaXhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjA2NjY0MDEsImV4cCI6MTk3NjI0MjQwMX0.8PKMkwnFkOt84_8IcQMvY3lLAqxYUz7LZljaruRWLPo';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export function checkAuth() {
    const user = getUser();
    if (!user) location.replace(`/auth/?redirectUrl=${encodeURIComponent(location)}`);
    return user;
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({ email, password });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({ email, password });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Helper for logging errors */

function checkError({ data, error }) {
    // eslint-disable-next-line no-console
    return error ? console.error(error) : data;
}

/* Categories */

export async function getCategories() {
    const response = await client.from('categories').select('*');
    return checkError(response);
}

/* Posts */

export async function getPosts() {
    const response = await client.from('posts').select(`
        *,
        category:categories(*)
    `);
    return checkError(response);
}

export async function createPost(post) {
    return await client.from('posts').insert(post);
}

export async function getPostById(id) {
    const response = await client.from('posts').select('*, category:categories(*)').match({ id }).single();
    return checkError(response);
}

export async function deletePostById(id) {
    const response = await client.from('posts').delete().match({ id });
    return checkError(response);
}

export async function saveProfile(userProfile) {
    return await client.from('whatever we name the table').upsert(userProfile);
}

// profiles table will link to users table with foreign key relationship that pulls userId from users table
