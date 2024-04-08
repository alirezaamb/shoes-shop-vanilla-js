import Navigo from 'navigo';
import { changePage } from '../utils/change-page';
// import { loginForm } from '../templates/login';
import { loginPage } from '../pages/login-page';
import { homePage } from '../pages/home-page';
export const router = new Navigo('/');

router
  .on('/login', () => {
    changePage(loginPage);
  })
  .on('/home', () => {
    changePage(homePage);
  });
