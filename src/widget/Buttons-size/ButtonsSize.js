import { ButtonSize } from '../../components/CARD-FULL/button-size/BtnSize';
import { El } from '../../utils/create-element';

export function ButtonsSize(sizes) {
  // const buttons = document.getElementById('ButtonSizes');
  // console.log(sizes);
  const Element = El({
    element: 'div',
    className: 'flex gap-[5px]',
    id: 'ButtonSizes',
    children: sizes.map((res) => ButtonSize({ sizeCircle: res })),
  });
  return Element;
}
