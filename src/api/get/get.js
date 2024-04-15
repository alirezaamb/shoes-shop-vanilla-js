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
  if (filter != 'all') {
    const final = response.filter((item) => item.brand == filter);
    return final;
  } else {
    return response;
  }
}

export async function getProductBySearch(filter) {
  const response = await axios.get(`${BASE_URL}/products?q=${filter}`);
  return response.data;
}

export async function getCartProduct() {
  const res = await axios.get(`${BASE_URL}/users`);
  const response = res.data[0].cart;

  return response;
}

export async function getItemForModal(value) {
  const res = await axios.get(`${BASE_URL}/users`);
  const response = res.data[0].cart;

  const final = response.filter((item) => item.value == value);
  return final;
}
