import axiosInstance from "../AxiosInstance";

// 골프장 예약 조회
export const getReservationInfo = async () => {
    try {
        const response = await axiosInstance.get(`/golf/reservation`)
        return response.data;
    } catch (error) {
        throw error;
    }
}

// 골프장 날짜 별 예약 팀 수 확인
export const getReservationTeams = async (date, courseNo) => {
    try {
        const response = await axiosInstance.get(`/golf/reservation?date=${date}&courseNo=${courseNo}`)
        return response.data;
    } catch (error) {
        throw error;
    }
}

// 골프장 예약 - 날짜 및 사용자 정보 가져오기 
export const getReservationInfoAndUserInfo = async (date) => {
    try {
        const response = await axiosInstance.get(`/golf/reservation?date=${date}`)
        return response.data;
    } catch (error) {
        throw error;
    }
}

// 골프장 정보 및 예약 가능한 코스 및 시간 가져오기 
export const getGolfInfoAndAvailableCourses = async (golfId, date) => {
    try {
        const response = await axiosInstance.get(`/golf/course?golfId=${golfId}&date=${date}`)
        return response.data;
    } catch (error) {
        throw error;
    }
}

// 예약 신청
export const submitReservation = async (reservationData) => {
    try {
        const response = await axiosInstance.post(`/golf/reservation`, reservationData)
        return response.data;
    } catch (error) {
        throw error;
    }
}