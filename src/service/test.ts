import axios, { AxiosResponse } from 'axios';

export interface ApiResponse {
    err: number;
    msg: string;
    total: number;
    response?: (BatchList)[] | null;
  }
export interface BatchList {
  banner_image: string;
  title: string;
  end: string;
  start: string;
}

export const getBatchList = async (): Promise<BatchList[]> => {
  const config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/api/client/batchList',
      headers: { }
  };
  try {
    const response: AxiosResponse<ApiResponse> = await axios.request(config);
    if (response.status === 200) {
      return response.data.response || [];
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error fetching batch list:', error);
    return [];
  }
};