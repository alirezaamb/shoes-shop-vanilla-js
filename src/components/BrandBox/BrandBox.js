import { El } from '../../utils/create-element';

export function BrandBox({ name, logo }) {
  function btnBrand(e) {
    console.log(e.target.closest('#btn').children[1].innerText);
    const brand = e.target.closest('#btn').children[1].innerText;

    switch (`${brand}`) {
      case 'Nike':
        window.location.href = 'shoes-nike';
        break;
      case 'Adidas':
        window.location.href = 'shoes-adidas';
        break;
      case 'Puma':
        window.location.href = 'shoes-puma';
        break;
      case 'Asics':
        window.location.href = 'shoes-asics';
        break;
      case 'Converse':
        window.location.href = 'shoes-converse';
        break;
      case 'New Balance':
        window.location.href = 'shoes-newbalance';
        break;
      case 'Reebok':
        window.location.href = 'shoes-reebok';
        break;
      case 'more':
        window.location.href = 'shoes-allbrands';
        break;
    }
  }

  return El({
    element: 'div',
    className: 'flex flex-col items-center mt-3',
    id: 'btn',
    onclick: btnBrand,
    children: [
      El({
        element: 'div',
        className:
          'bg-gray-300 rounded-full inline py-3 px-4 hover:bg-gray-400 cursor-pointer',
        children: [El({ element: 'span', className: `${logo}` })],
      }),
      El({
        element: 'p',
        innerText: `${name}`,
        className: 'font-semibold text-sm cursor-pointer',
      }),
    ],
  });
}
