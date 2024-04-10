import { Button } from '../components/button/Button';

import { El } from '../utils/create-element';
import { ButtonsColor } from '../widget/Buttons-color/ButtonsColor';
import { ButtonsSize } from '../widget/Buttons-size/ButtonsSize';
import { quantity } from '../widget/Quantity/Quantity';

export function cardFullDetail() {
  function header() {
    return El({
      element: 'span',
      className: 'icon-[formkit--arrowleft] absolute top-4 left-3',
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    const color = document.querySelector("input[name='color']:checked");
    const size = document.querySelector("input[name='size']:checked");
    const quantity = document.querySelector('#quantity-span').innerText;
    if (color !== null && size !== null && quantity != '0') {
      console.log(color.value);
      console.log(size.value);
      console.log(quantity);
    } else {
      // alert('all item shoul be selected');
    }
  }

  function footer() {
    return El({
      element: 'div',
      className: 'flex mx-5 my-3  gap-8 ',
      children: [
        El({
          element: 'div',
          className: 'flex flex-col w-1/4',
          children: [
            El({
              element: 'span',
              innerText: 'Total price',
              className: 'text-gray-600 text-xs',
            }),
            El({
              element: 'span',
              className: 'font-bold text-lg',
              innerText: '$240.00',
            }),
          ],
        }),
        El({
          element: 'div',
          className: 'flex relative',
          children: [
            El({
              element: 'span',
              className:
                'icon-[solar--bag-4-bold] text-white absolute bottom-4 left-14',
            }),
            Button({
              text: 'Add to Cart',
              className: ' rounded-3xl block w-[250px]',
              onclick: submitHandler,
            }),
          ],
        }),
      ],
    });
  }

  function main() {
    return El({
      element: 'form',
      className: '',
      children: [
        El({
          element: 'img',
          className: '',
          src: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-73e54c0b-11a6-478b-9f90-bd97fcde872d/renew-run-big-kids-running-shoe-5Bpz93.jpg',
        }),
        El({
          element: 'div',
          className: 'flex justify-between px-5 py-2',
          children: [
            El({
              element: 'h2',
              innerText: 'Running Sportwear',
              className: 'font-extrabold text-xl',
            }),
            El({
              element: 'span',
              className: 'icon-[ph--heart-light] text-xl ',
            }),
          ],
        }),
        El({
          element: 'div',
          className:
            'flex gap-3  items-center border-b border-gray-300 pb-3 mx-5',
          children: [
            El({
              element: 'span',
              innerText: '5,371 sold',
              className: 'bg-gray-200 p-[5px] rounded-lg text-xs font-semibold',
            }),
            El({
              element: 'span',
              className: 'icon-[clarity--half-star-solid] w-5 h-5 ',
            }),
            El({
              element: 'span',
              innerText: '4.3(5,389 reviews)',
              className: 'text-gray-600',
            }),
          ],
        }),
        El({
          element: 'div',
          className: 'mx-5',
          children: [
            El({
              element: 'h3',
              innerText: 'Description',
              className: 'text-lg font-semibold',
            }),
            El({
              element: 'p',
              className: 'text-xs text-gray-600 overflow-hidden line-clamp-2 ',
              innerText:
                'lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremloremloremloremloremloremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem loremloremloremloremloremloremlorem lorem ',
            }),
          ],
        }),
        El({
          element: 'div',
          className: 'flex mx-5 gap-5',
          children: [
            El({
              element: 'div',
              className: 'w-1/2',
              children: [
                El({
                  element: 'span',
                  innerText: 'Size',
                  className: 'font-semibold',
                }),
                ButtonsSize(),
              ],
            }),
            El({
              element: 'div',
              className: 'w-1/2',
              children: [
                El({
                  element: 'span',
                  innerText: 'Color',
                  className: 'font-semibold',
                }),
                ButtonsColor(),
              ],
            }),
          ],
        }),
        quantity(),
      ],
    });
  }

  const element = El({
    element: 'div',
    className: 'relative',
    children: [header(), main(), footer()],
  });

  return element;
}
