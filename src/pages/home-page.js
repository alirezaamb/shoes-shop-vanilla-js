import { LayoutHome } from '../layout/layout-home';
import { Home } from '../templates/Home';
import { El } from '../utils/create-element';
export function homePage() {
  document.title = 'home page';
  return El({ element: 'div', children: [LayoutHome(Home())] });
}
