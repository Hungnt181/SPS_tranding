import "./App.css";
import { Route, Routes } from "react-router-dom";
import LayoutWebsite from "./pages/(website)/layout";
import HomePgae from "./pages/(website)/home/page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route path="/" element={<HomePgae />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
