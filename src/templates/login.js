import { getUser } from '../api/get/get';
import { Button } from '../components/button/Button';
import { setCookie } from '../utils/cookie';
import { El } from '../utils/create-element';

export function loginForm() {
  const el = El({
    element: 'div',
    className: 'flex flex-col items-center gap-10 mx-auto mt-16',
    children: [
      El({
        element: 'span',
        className:
          'w-6 h-6  icon-[ic--sharp-arrow-back] cursor-pointer absolute top-4 left-4',
        eventListener: [
          {
            event: 'click',
            callback: () => {
              window.location.href = '/swiper';
            },
          },
        ],
      }),
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
                      'icon-[clarity--email-line] absolute top-[12px] start-1 text-gray-400',
                  }),
                  El({
                    element: 'input',
                    type: 'email',
                    placeholder: 'email',
                    id: 'emailInput',
                    className:
                      'py-2 px-6 outline-black bg-gray-100 rounded w-[370px] block ',
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
                      'icon-[clarity--lock-line] absolute top-[12px] start-1 text-gray-400',
                  }),
                  El({
                    element: 'input',
                    type: 'password',
                    id: 'passwordInput',
                    placeholder: 'Password',
                    className:
                      'py-2 px-6 outline-black bg-gray-100 rounded w-full',
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
                      'icon-[mdi--eye-off] absolute top-[12px] end-1 text-gray-400 cursor-pointer',
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
            innerText: 'Username or Password is incorrect!!',
            className: 'text-red-600 hidden',
            id: 'errorInput',
          }),
          El({
            element: 'div',
            className: 'flex gap-1 mt-2 ',
            children: [
              El({
                element: 'input',
                type: 'checkbox',
                id: 'rememberMe',
                className: 'accent-black w-3 ',
              }),
              El({ element: 'span', innerText: 'Remember me' }),
            ],
          }),
          Button({
            text: 'Sign in',
            className: 'absolute bottom-5 bg-gray-700',
            type: 'submit',
            id: 'submitButton',
            onclick: btnSingIn,
          }),
        ],
      }),
    ],
  });

  function changeEmailColor() {
    const emailSpan = document.getElementById('emailSpan');
    const emailInput = document.getElementById('emailInput');
    const submitButton = document.getElementById('submitButton');
    if (emailInput.value != '') {
      emailSpan.classList.remove('text-gray-400');
      submitButton.classList.remove('bg-gray-700');
    } else {
      emailSpan.classList.add('text-gray-400');
      submitButton.classList.add('bg-gray-700');
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
    const passwordSpanEye = document.getElementById('passwordSpanEye');

    if (passwordInput.hasAttribute('type')) {
      passwordInput.removeAttribute('type');
      passwordSpanEye.classList.remove('icon-[mdi--eye-off]');
      passwordSpanEye.classList.add('icon-[heroicons-solid--eye]');
    } else {
      passwordInput.setAttribute('type', 'password');
      passwordSpanEye.classList.remove('icon-[heroicons-solid--eye]');

      passwordSpanEye.classList.add('icon-[mdi--eye-off]');
    }
  }

  function btnSingIn(event) {
    event.preventDefault();
    getUser().then((data) => {
      // console.log(data.password);
      const inputPass = document.getElementById('passwordInput');
      const inputEmail = document.getElementById('emailInput');
      const rememberMe = document.getElementById('rememberMe').checked;
      const errorInput = document.getElementById('errorInput');

      if (
        inputPass.value == data[0].password &&
        inputEmail.value == data[0].email
      ) {
        setCookie('email', inputEmail.value, rememberMe ? 7 : 'session');

        window.location.href = '/home';
      } else {
        errorInput.classList.remove('hidden');
      }
    });
  }

  return el;
}
