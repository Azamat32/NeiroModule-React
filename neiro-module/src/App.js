import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

import SideBar from "./components/SideBar/SideBar";
import HomePage from "./pages/HomePage/HomePage";
import ModalWindow from "./components/ModalWindow/ModalWindow";

function App() {
  const [modal, setModal] = useState(true);
  const handleModalChange = (newModal) => {
    setModal(newModal);
  };
  return (
    <BrowserRouter>
      <ModalWindow modal={modal} setModal={setModal} />

      <div className="main_page">
        <SideBar />
        <div className="main_content">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
