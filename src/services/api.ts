import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// create a get request to fetch the data from the mock server (get all posts)
export const getPosts = async (): Promise<PostObj>=> {
    const response = await axios.get(`${API_URL}?_limit=5`);

    return response.data;
}

export const getPostByID = async (id: number): Promise<PostObj> => {
    const response = await axios.get(`${API_URL}/${id}`);

    return response.data;
}