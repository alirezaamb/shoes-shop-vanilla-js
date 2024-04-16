import { payments } from '../../components/PAYMENT-METHODS/payments/payments';
import { headerBack } from '../../layout/header/header-back';
import { El } from '../../utils/create-element';

export function paymentMethodsPage() {
  return El({
    element: 'div',
    className: 'mx-3',
    children: [
      headerBack('Payment Methods', 'icon-[basil--add-outline]'),
      payments(),
    ],
  });
}
