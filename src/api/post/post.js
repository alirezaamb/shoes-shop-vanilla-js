import axios from 'axios';
import { BASE_URL } from '../const';

export async function addToCart(data) {
  const { data: userData } = await axios.get(`${BASE_URL}/users/1`);

  const cart = userData.cart.concat(data);
  let response = await axios.patch(`${BASE_URL}/users/1`, { cart });

  return response.data;
}

export async function addToWishlist(data) {
  const { data: userData } = await axios.get(`${BASE_URL}/users/1`);

  const wishlist = userData.wishlist.concat(data);
  let response = await axios.patch(`${BASE_URL}/users/1`, { wishlist });

  return response.data;
}
