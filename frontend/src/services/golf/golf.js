import axiosInstance from "../AxiosInstance";


// 골프장 상세조회
export const getGolfDetails = async (golfNo) => {
    try {
        const response = await axiosInstance.get(`/api/admin/golf/${golfNo}`)
        return response.data;
    } catch (error) {
        throw error;
    }
}

// 골프장 전체 조회
export const getAllGolfs = async () => {
    try {
        const response = await axiosInstance.get(`/api/admin/golf`)
        return response.data;
    } catch (error) {
        throw error;
    }
}

