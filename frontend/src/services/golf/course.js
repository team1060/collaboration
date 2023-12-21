import axiosInstance from "../AxiosInstance";

// 코스 등록 
export const registerCourse = async (courseData) => {
    try {
        const response = await axiosInstance.post(`/admin/course`, courseData)
        return response.data;
    } catch (error) {
        throw error;
    }
}

// 코스 전체 조회
export const getAllCourses = async () => {
    try {
        const response = await axiosInstance.get(`/admin/course`)
        return response.data;
    } catch (error) {
        throw error;
    }
}

// 코스 단일조회
export const getCourse = async (courseNo) => {
    try {
        const response = await axiosInstance.get(`/admin/course/${courseNo}`)
        return response.data;
    } catch (error) {
        throw error;
    }
}

// 골프장의 코스 전체조회
export const getGolfCourses = async (golfNo) => {
    try {
        const response = await axiosInstance.get(`/admin/golf/${golfNo}/courses`)
        return response.data;
    } catch (error) {
        throw error;
    }
}

// 코스 정보 수정
export const updateCourse = async (courseNo, updatedData) => {
    try {
        const response = await axiosInstance.put(`/admin/course/${courseNo}`, updatedData)
        return response.data;
    } catch (error) {
        throw error;
    }
}

// 코스 삭제
export const deleteCourse = async (courseNo) => {
    try {
        const response = await axiosInstance.delete(`/admin/course/${courseNo}`)
        return response.data;
    } catch (error) {
        throw error;
    }
}