import { El } from '../../utils/create-element';

export function ProductCard(product) {
  // function test() {
  //   console.log(product.id);
  // }

  // console.log(product);
  const el = El({
    element: 'div',
    // onclick: test,
    id: `${product.id}`,
    className:
      'h-[244px] w-[182px] truncate cursor-pointer hover:bg-gray-300 rounded p-1',
    children: [
      El({
        element: 'img',
        src: product.imageURL,
        className: 'w-[182px] h-[182px] rounded-3xl',
      }),
      El({ element: 'h2', className: '', innerText: product.name }),
      El({ element: 'p', className: '', innerText: `$ ${product.price}` }),
    ],
  });

  return el;
}
