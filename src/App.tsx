import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import AddHabit from "./pages/Habits/AddHabit";
import WithNav from "./pages/HeaderFlag/WithNav";
import WithoutNav from "./pages/HeaderFlag/WithoutNav";
import Home from "./pages/Home";

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
            <Route path="/add" element={<AddHabit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
