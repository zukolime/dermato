import { statusBlockStyle } from "./statusBlockStyle";
import { modalForm, modalSuccess } from "./modal";

export const sendForm = (formSelector) => {
  const form = document.querySelector(formSelector);
  const statusBlock = document.createElement("p");

  const sendData = async (data) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");

    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    sendData(formBody)
      .then(() => {
        formElements.forEach((input) => {
          input.value = "";
          input.classList.remove("success");
        });
        modalForm.hide();
        modalSuccess.show();
      })
      .catch((error) => {
        statusBlockStyle(modal, statusBlock, "Erro no envio dos dados", "red");
        console.log(error.message);
      });
  };

  try {
    if (!form) {
      throw new Error("Форма сбежала :(");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};
