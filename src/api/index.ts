import { BASE_URL } from '@/constant';
import axios from 'axios';

export const getData = async () => {
  const response = await axios.get(BASE_URL);

  return response.data.response;
};
