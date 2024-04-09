import { ButtonColor } from '../../components/CARD-FULL/button-color/BtnColor';
import { El } from '../../utils/create-element';

export function ButtonsColor() {
  const element = El({
    element: 'div',
    className: 'flex gap-2',
    children: [
      ButtonColor({ colorCircle: 'bg-white', colorCheck: 'text-black' }),
      ButtonColor({ colorCircle: 'bg-black', colorCheck: 'text-white' }),
      ButtonColor({ colorCircle: 'bg-yellow-900', colorCheck: 'text-white' }),
      ButtonColor({ colorCircle: 'bg-blue-600', colorCheck: 'text-black' }),
      ButtonColor({ colorCircle: 'bg-red-600', colorCheck: 'text-black' }),
    ],
  });

  return element;
}
