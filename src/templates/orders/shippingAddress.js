import { locations } from '../../components/SHIPPING-ADDRESS/locations/locations';
import { headerBack } from '../../layout/header/header-back';
import { El } from '../../utils/create-element';

export function shippingAddressPage() {
  return El({
    element: 'div',
    className: '',
    children: [headerBack('Shipping Address'), locations()],
  });
}
