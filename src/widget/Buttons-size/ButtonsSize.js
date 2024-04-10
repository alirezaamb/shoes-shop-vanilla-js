import { ButtonSize } from '../../components/CARD-FULL/button-size/BtnSize';
import { El } from '../../utils/create-element';

export function ButtonsSize(sizes) {
  const buttons = document.getElementById('ButtonSizes');
  const Element = El({
    element: 'div',
    className: 'flex gap-[5px]',
    id: 'ButtonSizes',
    children: [
      sizes.forEach((res) => {
        ButtonSize({ sizeCircle: res });
        // console.log(ButtonSize({ sizeCircle: res }));
      }),
    ],
    children: [
      ButtonSize({ sizeCircle: 41 }),
      ButtonSize({ sizeCircle: 43 }),
      ButtonSize({ sizeCircle: 45 }),
    ],
  });
  return Element;
}
