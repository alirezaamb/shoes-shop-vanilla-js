import Navigo from 'navigo';
import { changePage } from '../utils/change-page';
export const router = new Navigo('/');

router.on('/', () => {
  changePage();
});
