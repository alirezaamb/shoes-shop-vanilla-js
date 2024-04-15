import { El } from '../../../utils/create-element';
import { Modal } from '../Modal/Modal';

export function ProductCardCart(product) {
  function RemoveItem(e) {
    const selectedIdForRemove = e.target.id;
    console.log(selectedIdForRemove);
    Modal(selectedIdForRemove);
    const overlayModal = document.getElementById('overlayModal');
    const modal = document.getElementById('modal');

    overlayModal.classList.remove('hidden');
    modal.classList.remove('hidden');
  }

  const element = El({
    element: 'div',
    className: 'truncate cursor-pointer rounded-3xl flex bg-white ',
    children: [
      El({
        element: 'div',
        className: 'flex',
        children: [
          El({
            element: 'img',
            src: product.imageURL,
            className: 'w-28 h-28 m-5 rounded-3xl',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex flex-col m-5 gap-3',
        children: [
          El({
            element: 'div',
            className: 'flex content-between items-center',
            children: [
              El({
                element: 'h2',
                className: 'font-semibold  truncate w-[200px]',
                innerText: product.name,
              }),
              El({
                element: 'span',
                className: 'icon-[solar--trash-bin-2-linear] cursor-pointer',
                id: `${product.value}`,
                eventListener: [
                  {
                    event: 'click',
                    callback: RemoveItem,
                  },
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex gap-3 itms-center content-center',
            children: [
              El({
                element: 'div',
                className: 'flex gap-1 items-center ',
                children: [
                  El({
                    element: 'span',
                    className: 'w-4 h-4 rounded-full',
                    style: `background-color:${product.colors}`,
                  }),
                  El({
                    element: 'span',
                    innerText: product.colors,
                    className:
                      'border-solid border-gray-300 border-r pr-3 text-gray-500 text-xs',
                  }),
                ],
              }),
              El({
                element: 'span',
                innerText: `size=${product.sizes}`,
                className: 'text-gray-500 text-xs',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex items-center justify-between content-center mt-3',
            children: [
              El({
                element: 'span',
                className: 'font-bold',
                innerText: `$${product.price}.00`,
              }),
              quantityForCart(),
            ],
          }),
        ],
      }),
    ],
  });

  function quantityForCart() {
    let counter = product.quantity;

    function subtractButton() {
      const quantityCounter = document.getElementById(
        `quantity-span${product.id}${product.colors}`
      );
      if (counter > 0) {
        counter--;
        quantityCounter.innerText = counter;
      }
    }

    function sumButton() {
      const quantityCounter = document.getElementById(
        `quantity-span${product.id}${product.colors}`
      );
      if (counter < 3) {
        counter++;
        quantityCounter.innerText = counter;
      }
    }
    const element = El({
      element: 'div',
      className: 'flex gap-5',
      children: [
        El({
          element: 'div',
          className: 'flex items-center gap-5 rounded-3xl bg-gray-300 ',
          children: [
            El({
              element: 'span',
              innerText: '-',
              onclick: subtractButton,
              className:
                'px-2 text-2xl cursor-pointer hover:bg-gray-600 hover:rounded-l-3xl',
              id: 'sub-button',
            }),
            El({
              element: 'span',
              innerText: counter,
              className: 'text-2xl',
              id: `quantity-span${product.id}${product.colors}`,
            }),
            El({
              element: 'span',
              innerText: '+',
              onclick: sumButton,
              className:
                'px-2 text-2xl cursor-pointer hover:bg-gray-600 hover:rounded-r-3xl',
              id: 'sum-button',
            }),
          ],
        }),
      ],
    });

    return element;
  }

  return element;
}
