import { slider } from "./modules/slider";
import { formValidation } from "./modules/formValidation";
import { handleDateAndTime } from "./modules/handleDateAndTime";
import { sendForm } from "./modules/sendForm";
import "./style.scss";

slider();
formValidation(".modal-content");
handleDateAndTime();
sendForm(".modal-content");
