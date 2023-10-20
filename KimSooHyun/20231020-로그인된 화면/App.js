import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Ground from "./pages/ground/Ground";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import Signtest from "./pages/signup/Signtest";
import Logged from "./pages/home/Logged";
import Mypage from "./pages/mypage/Mypage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ground" element={<List />} />
        <Route path="/ground/:id" element={<Ground />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signtest" element={<Signtest />} />
        <Route path="/logged" element={<Logged />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
