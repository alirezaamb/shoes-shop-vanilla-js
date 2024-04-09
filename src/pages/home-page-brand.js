import { HomeBrand } from '../templates/HomeBrand';
import { El } from '../utils/create-element';

export function homePageBrand() {
  document.title = 'home page brand';
  return El({
    element: 'div',
    className: ' block m-auto w-[95%]',
    children: [HomeBrand()],
  });
}
