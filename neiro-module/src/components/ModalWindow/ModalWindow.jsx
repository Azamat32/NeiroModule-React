import React from "react";
import "./ModalWindow.scss";

// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs/';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
function ModalWindow({ modal, setModal }) {
   
  return (
    <div className={modal ? "ModalWindow active" : "ModalWindow"}>
      <div className="ModalWindow_inner">
        <div className="ModalWindow_inner_title">
          <h1>Создание заявки на тестирование</h1>
        </div>
        <form>
          <input type="text" placeholder="Наименование теста" />
          <input type="text" placeholder="Кандидаты на тестирование" />
          <div className="calendar">
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider> */}
          </div>

          <button ></button>
        </form>
      </div>
    </div>
  );
}

export default ModalWindow;
