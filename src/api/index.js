import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:8000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});

// Post CRUD operations
export const fetchPosts = () => API.get('/posts');
export const fetchPostsBySearch = (searchQuery) => {
  const tags = Array.isArray(searchQuery.tags) ? searchQuery.tags : searchQuery.tags.split(',');
  return API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${tags.join(',')}`);
};

export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
