import { ButtonColor } from '../../components/CARD-FULL/button-color/BtnColor';
import { El } from '../../utils/create-element';

export function ButtonsColor(colors) {
  const element = El({
    element: 'div',
    className: 'flex gap-2 mt-3',
    children: colors.map((c) => ButtonColor({ colorCircle: c })),
  });

  return element;
}
