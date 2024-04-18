import { OverlayModalForsucces } from '../components/SUCCESFUL/Overlay/OverlayModalForSucces';
import { Succesful } from '../templates/Succesful';
import { El } from '../utils/create-element';

export function SuccesfulPage() {
  const element = El({
    element: 'div',
    className: '',
    children: [Succesful()],
  });
  return element;
}
