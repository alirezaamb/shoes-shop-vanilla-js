import { El } from '../../../utils/create-element';

export function OverlayModalForsucces() {
  return El({
    element: 'div',
    id: 'overlayModal',
    className:
      'absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-full h-[1100px] bg-gray-700 bg-opacity-70',
  });
}
