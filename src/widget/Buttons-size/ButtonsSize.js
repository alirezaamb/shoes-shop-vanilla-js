import { ButtonSize } from '../../components/CARD-FULL/button-size/BtnSize';
import { El } from '../../utils/create-element';

export function ButtonsSize() {
  const element = El({
    element: 'div',
    className: 'flex gap-[5px]',
    children: [
      ButtonSize({ sizeCircle: 41 }),
      ButtonSize({ sizeCircle: 43 }),
      ButtonSize({ sizeCircle: 45 }),
    ],
  });

  return element;
}
