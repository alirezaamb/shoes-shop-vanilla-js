import { getProducts } from '../api/get/get';

import { RenderProducts } from '../components/Render-Products/RenderProducts';
import { filterByBrands } from '../components/Swiper-brand/FilterBrands';
import { SearchBox } from '../components/searchBox/search';
import { El } from '../utils/create-element';
import { BrandsBox } from '../widget/brands-box/Brands-box';

export function Home() {
  return El({
    element: 'div',

    children: [
      SearchBox(),
      BrandsBox(),
      filterByBrands(),
      El({ element: 'div', id: 'home', children: [RenderProducts('all')] }),
    ],
  });
}
