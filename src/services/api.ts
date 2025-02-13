import axios from 'axios';
import { PostObj } from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// create a get request to fetch the data from the mock server (get all posts)
export const getPosts = async (): Promise<PostObj[]> => {
  const response = await axios.get(`${API_URL}?_limit=5`);

  return response.data;
};

export const getPostByID = async (id: number): Promise<PostObj> => {
  const response = await axios.get(`${API_URL}/${id}`);

  return response.data;
};

export const createPost = async (post: PostObj): Promise<PostObj> => {
  const response = await axios.post(API_URL, post);

  return response.data;
};

export const updatePost = async (post: PostObj): Promise<PostObj> => {
  const response = await axios.put(`${API_URL}/${post.id}`, post);

  return response.data;
};

export const deletePost = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
