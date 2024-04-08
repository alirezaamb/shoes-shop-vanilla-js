import axios from 'axios';
import { BASE_URL } from '../const';

export async function getProducts(filter) {
  if (filter !== 'all') {
    let response = await axios.get(`${BASE_URL}/products?brand=${filter}`);
    return response.data;
  } else {
    let response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  }
}
