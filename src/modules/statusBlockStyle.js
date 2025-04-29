export const statusBlockStyle = (container, block, message, color) => {
  container.insertAdjacentElement("beforeend", block);
  block.style.fontWeight = "bold";
  block.style.textAlign = "center";

  block.textContent = message;
  block.style.color = color;
};
