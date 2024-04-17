import { amountAndPayment } from '../../components/CHECKOUT/amount&payment/amountAndPayment';
import { chooseShippingType } from '../../components/CHECKOUT/chooseShippingType/chooseShippingType';
import { orderList } from '../../components/CHECKOUT/orderList/orderList';
import { promoCode } from '../../components/CHECKOUT/promoCode/promoCode';
import { shippingAddress } from '../../components/CHECKOUT/shippingAddress/shippingAddress';

import { headerBack } from '../../layout/header/header-back';
import { El } from '../../utils/create-element';

export function checkoutPage() {
  return El({
    element: 'div',
    className: '',
    children: [
      headerBack('Checkout', 'icon-[fluent--more-circle-20-regular]'),
      shippingAddress(),
      orderList(),
      chooseShippingType(),
      promoCode(),
      amountAndPayment(),
    ],
  });
}
