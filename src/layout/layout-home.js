import { El } from '../utils/create-element';
import { footerHome } from './footer/footer-home';
import { headerHome } from './header/header-home';

export function LayoutHome(main) {
  return El({
    Element: 'div',
    children: [
      headerHome(),
      El({ element: 'main', className: 'container mx-auto', children: [main] }),
      footerHome(),
    ],
  });
}
