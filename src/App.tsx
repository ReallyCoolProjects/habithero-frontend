import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/404/NotFound";
import Dashboard from "./pages/Dashboard";
import AddHabit from "./pages/Habits/AddHabit";
import WithNav from "./pages/HeaderFlag/WithNav";
import WithoutNav from "./pages/HeaderFlag/WithoutNav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Progress from "./pages/progress/Progress";
import Signup from "./pages/Signup";


function App() {
  return (
    <div className="font-Poppins min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route element={<WithoutNav />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add" element={<AddHabit />} />  
            <Route path="/progress/:id" element={<Progress />} />
            <Route path="/404" element={<NotFound />} />  
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
