import { BrandBox } from '../../components/BrandBox/BrandBox';
import { El } from '../../utils/create-element';

export function BrandsBox() {
  return El({
    element: 'div',
    className: 'grid grid-cols-4',
    children: [
      BrandBox({ name: 'Nike', logo: 'icon-[simple-icons--nike]' }),
      BrandBox({ name: 'Adidas', logo: 'icon-[simple-icons--adidas]' }),
      BrandBox({ name: 'Puma', logo: 'icon-[simple-icons--puma]' }),
      BrandBox({ name: 'Asics', logo: 'icon-[simple-icons--nike]' }),
      BrandBox({ name: 'Reebok', logo: 'icon-[simple-icons--reebok]' }),
      BrandBox({ name: 'New Ba..', logo: 'icon-[simple-icons--newbalance]' }),
      BrandBox({ name: 'Converse', logo: 'icon-[game-icons--converse-shoe]' }),
      BrandBox({
        name: 'More..',
        logo: 'icon-[fluent--more-circle-28-regular]',
      }),
    ],
  });
}
