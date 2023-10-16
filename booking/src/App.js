import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Ground from "./pages/ground/Ground";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ground" element={<List />} />
        <Route path="/ground/:id" element={<Ground />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
