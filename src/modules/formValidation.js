import { setFieldState } from "./helpers";

export const formValidation = (selectorForm) => {
  const form = document.querySelector(selectorForm);

  const nameRegExp = /^[a-zA-ZáâãàéêíóôõúüçÁÂÃÀÉÊÍÓÔÕÚÜÇ\s-]+$/;
  const emailRegExp = /^[a-zA-Z0-9._%\+\-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const isValid = (regExp, input) => regExp.test(input.value.trim());

  form.addEventListener(
    "input",
    (e) => {
      const target = e.target;
      if (
        target.matches("input[placeholder='Nome']") ||
        target.matches("input[placeholder='Sobrenome']")
      ) {
        setFieldState(target, isValid(nameRegExp, target));
      }
      if (target.matches("input[placeholder='name@example.com']")) {
        setFieldState(target, isValid(emailRegExp, target));
      }
    },
    true
  );
};
