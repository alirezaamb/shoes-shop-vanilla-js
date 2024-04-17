import { RenderActiveOrders } from '../components/ORDERS/Render-Orders-active/RendersOrderActive';
import { RenderCompletedOrders } from '../components/ORDERS/Render-Orders-completed/RendersOrderCompleted';
import { El } from '../utils/create-element';

export function orders() {
  function openCity(evt, cityName, setActive = false) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.add('hidden');
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove('active');
      tablinks[i].classList.add('text-gray-600', 'border-gray-300'); // Set text and border color to gray for inactive tabs
    }
    document.getElementById(cityName).classList.remove('hidden');
    evt.currentTarget.classList.add('active');
    evt.currentTarget.classList.remove('text-gray-600', 'border-gray-300'); // Remove text and border color classes for active tab
    evt.currentTarget.classList.add('text-black', 'border-black'); // Set text and border color to black for active tab
  }

  // Call openCity with the appropriate parameters to make "Active" tab active by default
  document.addEventListener('DOMContentLoaded', function () {
    openCity(
      { currentTarget: document.querySelector('.tablinks:nth-child(1)') },
      'Active',
      true
    );
  });

  return El({
    element: 'div',
    className: ' justify-center items-center flex flex-col m-auto ',
    children: [
      El({
        element: 'div',
        className:
          'flex w-full mx-auto border-b border-solid border-gray-300 rounded-3xl',
        children: [
          El({
            element: 'button',
            className:
              'tablinks px-4 py-2  w-2/4 border-b-4 border-black m-auto rounded-sm',
            onclick: (evt) => openCity(evt, 'Active'),
            innerText: 'Active',
          }),
          El({
            element: 'button',
            className:
              'tablinks px-4 py-2  w-2/4 m-auto border-b-4 border-black rounded-sm',
            onclick: (evt) => openCity(evt, 'Completed'),
            innerText: 'Completed',
          }),
        ],
      }),
      El({
        element: 'div',
        id: 'Active',
        className: 'tabcontent hidden',
        children: [RenderActiveOrders()],
      }),
      El({
        element: 'div',
        id: 'Completed',
        className: 'tabcontent hidden flex justify-center items-center',
        children: [RenderCompletedOrders()],
      }),
    ],
  });
}
