import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";
import Dashboard from "./components/Dashboard";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />

          <Route path="/register" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
