import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar/SideBar";
import HomePage from "./pages/HomePage/HomePage";
function App() {
  return (
    <BrowserRouter>
      <SideBar />
      
      <Routes>
        <Route path="/" component={HomePage} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
