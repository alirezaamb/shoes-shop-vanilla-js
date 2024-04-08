import { LayoutHome } from '../layout/layout-home';
import { Home } from '../templates/Home';
import { El } from '../utils/create-element';
export function homePage() {
  document.title = 'home page';
  return El({
    element: 'div',
    className: ' block m-auto w-[95%]',
    children: [LayoutHome(Home())],
  });
}
