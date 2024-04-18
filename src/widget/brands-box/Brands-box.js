import { BrandBox, BrandBoxIMage } from '../../components/BrandBox/BrandBox';
import { El } from '../../utils/create-element';

export function BrandsBox() {
  return El({
    element: 'div',
    className: 'grid grid-cols-4',
    children: [
      BrandBox({ name: 'Nike', logo: 'icon-[simple-icons--nike]' }),
      BrandBox({ name: 'Adidas', logo: 'icon-[simple-icons--adidas]' }),
      BrandBox({ name: 'Puma', logo: 'icon-[simple-icons--puma]' }),
      BrandBoxIMage({ name: 'Asics', logo: 'Asics' }),
      BrandBox({ name: 'Reebok', logo: 'icon-[simple-icons--reebok]' }),
      BrandBox({
        name: 'New Balance',
        logo: 'icon-[simple-icons--newbalance]',
      }),
      BrandBoxIMage({ name: 'Converse', logo: 'Converse' }),
      BrandBox({
        name: 'More..',
        logo: 'icon-[fluent--more-circle-28-regular]',
      }),
    ],
  });
}
