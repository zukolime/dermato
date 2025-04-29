export const animate = ({ timing, draw, duration }) => {
  const start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    const progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
};

export const setFieldState = (input, isValid) => {
  // input.style.border = isValid ? "1px solid green" : "1px solid red";
  input.classList.toggle("success", isValid);
};

export const validate = (inputs) => {
  let success = true;
  inputs.forEach((input) => {
    if (
      input.type !== "date" &&
      input.type !== "date" &&
      !input.classList.contains("success")
    ) {
      success = false;
    }
  });
  return success;
};

export const hideMessage = (elem) => {
  setTimeout(() => {
    elem.textContent = "";
  }, 3000);
};
