import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./ui/Applayout";

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Applayout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
