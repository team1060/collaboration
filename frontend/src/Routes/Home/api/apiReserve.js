import axios from "axios";

/**
 * 예약페이지 api 모음 
 */

const baseURL = "http://localhost:8081/api"

const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

// 코스 전체조회
export const getCourse = async () => {
    try{
        const response = await axiosInstance.get("reserve/course");
        return response.data;
    } catch (error) {
        throw error;
    }
}


// 골프장 이름 조회 
export const getGolf = async () => {
    try {
        const response = await axiosInstance.get("/admin/golf");
        return response.data;
    } catch (error) {
        throw error;
    }
}

// 예약 신청 
export const postGolf = async (course) => {
    try {
        const response = await axiosInstance.post("/reserve/course", course);
        return response.data;
    } catch (error) {
        throw error;
    }
}