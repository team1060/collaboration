import axios from "axios"

/**
 * 회원 페이지 api 모음
 */

const baseURL = "http://localhost:8081/api"

const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

// 이메일 중복체크 
export const checkedEmail = async (email) => {
    try {
        const response = await axiosInstance.get("/member/join", email)
        return response.data;
    } catch (error) {
        throw error;
    }
}