import axios from "axios";

const baseURL = 'http://localhost:8081'
const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
})

export const getArticles = async () => {
    try {
        const response = await axiosInstance.get('/golf')
        return response;
    } catch (error) {
        throw error;
    }
}

export const getArticleById = async (id) => {
    try {
        const response = await axiosInstance.get(`/golf/${id}`)
        return response;
    } catch (error) {
        throw error;
    }
}

export const postArticle = async (data) => {
    try {
        const response = await axiosInstance.post('/articles', data);
        return response;
    } catch (error) {
        
    }
}

export const getComments = async (id) => {
    try {
        const response = await axiosInstance.get(`/articles/${id}/comments`)
        return response;
    } catch (error) {
        throw error;
    }
}