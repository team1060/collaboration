import axios from "axios";

const baseURL = "http://localhost:8081";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getFileList = async () => {
  try {
    const response = await axiosInstance.get("/fileList");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const postFile = async (file) => {
  const formData = new FormData();
  formData.append('images', file);

  try {
    
    const response = await axiosInstance.post("/file", formData);
    return response.data;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};
// 필요한 경우 추가 API 함수들을 여기에 구현
