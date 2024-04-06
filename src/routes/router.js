import Navigo from 'navigo';
import { changePage } from '../utils/change-page';
import { loginForm } from '../templates/login';
export const router = new Navigo('/');

router.on('/', () => {
  changePage(loginForm);
});
