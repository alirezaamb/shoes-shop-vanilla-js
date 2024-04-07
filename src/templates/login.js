import { Button } from '../components/button/Button';
import { El } from '../utils/create-element';

export function loginForm() {
  function changeEmailColor() {
    const emailSpan = document.getElementById('emailSpan');
    const emailInput = document.getElementById('emailInput');
    if (emailInput.value != '') {
      emailSpan.classList.remove('text-gray-400');
    } else {
      emailSpan.classList.add('text-gray-400');
    }
  }

  function changePasswordColor() {
    const passwordSpan = document.getElementById('passwordSpan');
    const passwordSpanEye = document.getElementById('passwordSpanEye');
    const passwordInput = document.getElementById('passwordInput');
    if (passwordInput.value != '') {
      passwordSpan.classList.remove('text-gray-400');
      passwordSpanEye.classList.remove('text-gray-400');
    } else {
      passwordSpan.classList.add('text-gray-400');
      passwordSpanEye.classList.add('text-gray-400');
    }
  }
  function showPassword() {
    const passwordInput = document.getElementById('passwordInput');

    if (passwordInput.hasAttribute('type')) {
      passwordInput.removeAttribute('type');
    } else {
      passwordInput.setAttribute('type', 'password');
    }
  }
  //   function submit() {}

  const el = El({
    element: 'div',
    className: 'flex flex-col items-center gap-10 mx-auto mt-16',
    children: [
      El({ element: 'img', src: './src/assets/image/logo.svg' }),
      El({
        element: 'h1',
        className: 'font-semibold text-3xl',
        innerText: 'Login To Your Account',
      }),
      El({
        element: 'form',
        className: 'flex flex-col justify-center items-center gap-3',
        children: [
          El({
            element: 'div',
            className: 'flex flex-col gap-3',
            children: [
              El({
                element: 'div',
                className: 'flex items-center relative',
                children: [
                  El({
                    element: 'span',
                    id: 'emailSpan',
                    className:
                      'icon-[clarity--email-line] absolute top-[9px] start-1 text-gray-400',
                  }),
                  El({
                    element: 'input',
                    type: 'email',
                    placeholder: 'email',
                    id: 'emailInput',
                    className:
                      'py-1 px-6 outline-black bg-gray-100 rounded w-full',
                    eventListener: [
                      {
                        event: 'keyup',
                        callback: () => {
                          changeEmailColor();
                        },
                      },
                    ],
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'flex items-center relative',
                children: [
                  El({
                    element: 'span',
                    id: 'passwordSpan',
                    className:
                      'icon-[clarity--lock-line] absolute top-[9px] start-1 text-gray-400',
                  }),
                  El({
                    element: 'input',
                    type: 'password',
                    id: 'passwordInput',
                    placeholder: 'Password',
                    className:
                      'py-1 px-6 outline-black bg-gray-100 rounded w-full',
                    eventListener: [
                      {
                        event: 'keyup',
                        callback: () => {
                          changePasswordColor();
                        },
                      },
                    ],
                  }),
                  El({
                    element: 'span',
                    id: 'passwordSpanEye',
                    className:
                      'icon-[mdi--eye-off] absolute top-[9px] end-1 text-gray-400 cursor-pointer',
                    eventListener: [
                      {
                        event: 'click',
                        callback: () => {
                          showPassword();
                        },
                      },
                    ],
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex  gap-1',
            children: [
              El({
                element: 'input',
                type: 'checkbox',

                className: 'accent-black w-3',
              }),
              El({ element: 'span', innerText: 'Remember me' }),
            ],
          }),
          Button({
            text: 'Sign in',
            className: 'absolute bottom-2',
            type: 'submit',
            id: 'submitButton',
            eventListener: [
              {
                event: 'click',
                callback: () => {
                  submit();
                },
              },
            ],
          }),
        ],
      }),
    ],
  });

  return el;
}
