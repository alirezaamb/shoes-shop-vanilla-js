import { deleteCardProductForCart } from '../../../api/delete/delete';
import { getCardProductForOrder } from '../../../api/get/get';
import { addToOrder } from '../../../api/post/post';
import { router } from '../../../routes/router';
import { El } from '../../../utils/create-element';
import { onePayment } from '../onePayment/onePayment';

export function payments() {
  function finishOrder() {
    getCardProductForOrder().then((data) => {
      addToOrder(data);
    });
    deleteCardProductForCart();
    router.navigate('/succesful');
  }

  return El({
    element: 'div',
    className: 'mx-[24px] flex flex-col gap-[80px] mt-[50px]',
    children: [
      El({
        element: 'p',
        className: 'text-gray-700',
        innerText: 'Select the payment method you want to use',
      }),
      onePayment(
        'My wallet',
        'icon-[solar--wallet-bold]',
        '$9.379',
        'economy',
        'checked'
      ),
      onePayment('PayPal', 'icon-[logos--paypal]', '', 'regular'),

      onePayment('Google Pay', 'icon-[devicon--google]', '', 'cargo'),

      onePayment('Apple', 'icon-[ic--twotone-apple]', '', 'express'),
      onePayment(
        '.... .... .... ....4679',
        'icon-[logos--mastercard]',
        '',
        'express'
      ),

      El({
        element: 'button',
        className:
          'bg-black text-white w-full rounded-3xl mt-3 text-xl m-auto h-[60px]',
        innerText: 'Apply',
        onclick: finishOrder,
      }),
    ],
  });
}
