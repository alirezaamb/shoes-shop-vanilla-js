import { loginForm } from '../templates/login';
import { El } from '../utils/create-element';

export function loginPage() {
  return El({ element: 'div', className: 'mt-48', children: [loginForm()] });
}
