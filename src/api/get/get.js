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

export async function getUser() {
  const response = await axios.get(`${BASE_URL}/users`);
  // console.log(response.data[0].id);
  return response.data;
}

export async function getProductById(id) {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data;
}

export async function getWishlistProduct(filter) {
  const res = await axios.get(`${BASE_URL}/users`);
  const response = res.data[0].wishlist;
  console.log(filter);
  if (filter != 'all') {
    const final = response.filter((item) => item.brand == filter);
    return final;
  } else {
    return response;
  }
}
