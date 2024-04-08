import axios from 'axios';
import { BASE_URL } from '../const';

export async function getProducts() {
  const response = await axios.get(`${BASE_URL}/products`);

  return response.data;
}
