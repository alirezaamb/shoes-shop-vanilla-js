import { Shippings } from '../../components/CHOOSE-SHIPPING/shippings/shippings';
import { headerBack } from '../../layout/header/header-back';
import { El } from '../../utils/create-element';

export function chooseShipping() {
  return El({
    element: 'div',
    className: '',
    children: [headerBack('Choose Shipping'), Shippings()],
  });
}
