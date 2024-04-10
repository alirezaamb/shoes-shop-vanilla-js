import { ButtonColor } from '../../components/CARD-FULL/button-color/BtnColor';
import { El } from '../../utils/create-element';

export function ButtonsColor() {
  const element = El({
    element: 'div',
    className: 'flex gap-2',
    children: [
      ButtonColor({ colorCircle: 'bg-white', colorCheck: 'bg-gray-200' }),
      ButtonColor({ colorCircle: 'bg-black', colorCheck: 'bg-gray-700' }),
      ButtonColor({
        colorCircle: 'bg-yellow-900',
        colorCheck: 'bg-yellow-700',
      }),
      ButtonColor({ colorCircle: 'bg-blue-600', colorCheck: 'bg-blue-400' }),
      ButtonColor({ colorCircle: 'bg-red-600', colorCheck: 'bg-red-400' }),
    ],
  });

  return element;
}
