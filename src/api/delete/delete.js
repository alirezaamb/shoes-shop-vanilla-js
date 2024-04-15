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
