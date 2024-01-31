import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm.jsx"
import Register from "./components/Register.jsx"
import './App.css'
function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="home" element={<Register />} />
          </Routes>
        </BrowserRouter>
        </div>
    </>
  )
}

export default App
