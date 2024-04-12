import { El } from '../utils/create-element';

export function LayoutSearch(main) {
  return El({
    element: 'div',
    children: [
      El({ element: 'main', className: 'container mx-auto', children: [main] }),
    ],
  });
}
