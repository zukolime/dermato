import { setFieldState } from "./helpers";

export const handleDateAndTime = () => {
  const timeInput = document.getElementById("formGroupTimeInput");
  const dateInput = document.getElementById("formGroupDateInput");

  const now = new Date();
  const today = now.toISOString().slice(0, 10);

  const selectedDate = dateInput.value;

  dateInput.min = today;

  if (selectedDate === today) {
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = (now.getMinutes() + 10).toString().padStart(2, "0");
    timeInput.min = `${hours}:${minutes}`;
  } else {
    timeInput.min = "00:00";
  }

  dateInput.addEventListener("change", () => {
    handleDateAndTime();

    if (
      dateInput.value === today &&
      timeInput.value &&
      timeInput.value < timeInput.min
    ) {
      timeInput.value = "";
    }
  });
};
