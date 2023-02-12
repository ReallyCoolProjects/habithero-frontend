import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import WithNav from "./pages/HeaderFlag/WithNav";
import WithoutNav from "./pages/HeaderFlag/WithoutNav";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <div className="font-Poppins min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
