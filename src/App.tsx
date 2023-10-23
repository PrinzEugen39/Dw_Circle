import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
