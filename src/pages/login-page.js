import { loginForm } from '../templates/login';
import { El } from '../utils/create-element';

export function loginPage() {
  return El({ element: 'div', className: '', children: [loginForm()] });
}
