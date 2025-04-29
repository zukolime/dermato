export const modalSuccess = () => {
  const successModal = new bootstrap.Modal(
    document.querySelector(".modal-success")
  );
  successModal.show();
};
