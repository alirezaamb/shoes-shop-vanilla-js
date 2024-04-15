import { deleteCardProduct } from '../../../api/delete/delete';
import { getItemForModal } from '../../../api/get/get';
import { El } from '../../../utils/create-element';
import { RenderProductsCart } from '../Render-products-cart/RenderCartProducts';

export function Modal(value) {
  getItemForModal(value).then((item) => {
    console.log(item);
    const cardForDelete = document.getElementById('cardForDelete');
    const card = cardModalDelete(...item);
    console.log(item);
    cardForDelete.append(card);
  });

  function cancelBtn() {
    const overlayModal = document.getElementById('overlayModal');
    const modal = document.getElementById('modal');

    overlayModal.classList.add('hidden');
    modal.classList.add('hidden');
  }

  function removeBtn(e) {
    document.getElementById('modal').classList.add('hidden');
    document.getElementById('overlayModal').classList.add('hidden');
    const value = e.target.id;

    deleteCardProduct(value).then((data) => {
      console.log(data);
      const main = document.getElementById('homeCart');
      main.innerText = '';
      main.append(RenderProductsCart());
    });
  }

  const element = El({
    element: 'div',
    id: 'modal',
    className: 'fixed bottom-0 z-20 w-ful h-[300px] bg-white hidden ',
    children: [
      El({ element: 'h3', innerText: 'Remove From Cart?' }),
      El({ element: 'div', id: 'cardForDelete', className: 'p-3' }),
      El({
        element: 'div',
        className: 'flex justify-center items-center w-[80%] gap-2',
        children: [
          El({
            element: 'button',
            id: 'nbbvn',
            className:
              'hover:text-white hover:bg-black rounded-3xl bg-gray-200 w-[50%] text-[14px] h-[40px]',
            innerText: 'cancel',
            onclick: cancelBtn,
          }),
          El({
            element: 'button',
            id: value,
            onclick: removeBtn,

            className:
              'hover:text-white hover:bg-black rounded-3xl bg-gray-200 w-[50%] text-[14px] h-[40px]',
            innerText: 'Yes, Remove',
          }),
        ],
      }),
    ],
  });

  const modal = document.getElementById('modalBody');
  modal.innerText = '';
  modal.append(element);

  return element;
}

function cardModalDelete(product) {
  const element = El({
    element: 'div',
    className: 'truncate cursor-pointer rounded-3xl flex bg-white parent',
    value: product.value,
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
              //   quantityForCart(),
            ],
          }),
        ],
      }),
    ],
  });

  //   function quantityForCart(product) {
  //     let counter = product.quantity;

  //     function subtractButton() {
  //       const quantityCounter = document.getElementById(
  //         `quantity-span${product.id}${product.colors}`
  //       );
  //       if (counter > 0) {
  //         counter--;
  //         quantityCounter.innerText = counter;
  //       }
  //     }

  //     function sumButton() {
  //       const quantityCounter = document.getElementById(
  //         `quantity-span${product.id}${product.colors}`
  //       );
  //       if (counter < 3) {
  //         counter++;
  //         quantityCounter.innerText = counter;
  //       }
  //     }
  //     const element = El({
  //       element: 'div',
  //       className: 'flex gap-5',
  //       children: [
  //         El({
  //           element: 'div',
  //           className: 'flex items-center gap-5 rounded-3xl bg-gray-300 ',
  //           children: [
  //             El({
  //               element: 'span',
  //               innerText: '-',
  //               onclick: subtractButton,
  //               className:
  //                 'px-2 text-2xl cursor-pointer hover:bg-gray-600 hover:rounded-l-3xl',
  //               id: 'sub-button',
  //             }),
  //             El({
  //               element: 'span',
  //               innerText: counter,
  //               className: 'text-2xl',
  //               id: `quantity-span${product.id}${product.colors}`,
  //             }),
  //             El({
  //               element: 'span',
  //               innerText: '+',
  //               onclick: sumButton,
  //               className:
  //                 'px-2 text-2xl cursor-pointer hover:bg-gray-600 hover:rounded-r-3xl',
  //               id: 'sum-button',
  //             }),
  //           ],
  //         }),
  //       ],
  //     });

  return element;
  //   }
}
