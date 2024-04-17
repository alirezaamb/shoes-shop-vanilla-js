import { ModalSuccesful } from '../components/SUCCESFUL/Modal-seccesful/modal-succesful';
import { OverlayModalForsucces } from '../components/SUCCESFUL/Overlay/OverlayModalForSucces';
import { El } from '../utils/create-element';

export function Succesful() {
  const element = El({
    element: 'div',
    className: '',
    children: [OverlayModalForsucces(), ModalSuccesful()],
  });

  return element;
}
