import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import HomePage from "./pages/HomePage/HomePage";
function App() {
  return (
    <BrowserRouter>
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
