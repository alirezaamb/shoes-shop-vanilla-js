import axios from 'axios';
import { BASE_URL } from '../const';

export async function deleteCardProduct(value) {
  const res = await axios.get(`${BASE_URL}/users`);
  const response = res.data[0].cart;

  const dataDelete = response.filter((item) => item.value != value);
  const cart = [...dataDelete];
  let responseNew = await axios.patch(`${BASE_URL}/users/1`, { cart });

  return responseNew;
}

export async function deleteCardProductForCart() {
  const res = await axios.get(`${BASE_URL}/users`);
  const response = res.data[0].cart;
  const cart = [];
  let responseNew = await axios.patch(`${BASE_URL}/users/1`, { cart });

  return responseNew;
}

export async function deleteCardProductForWishlist(idCard) {
  const res = await axios.get(`${BASE_URL}/users`);
  const response = res.data[0].wishlist;
  const dataDelete = response.filter((item) => item.id != idCard);

  const wishlist = [...dataDelete];
  let responseNew = await axios.patch(`${BASE_URL}/users/1`, { wishlist });

  return responseNew;
}
