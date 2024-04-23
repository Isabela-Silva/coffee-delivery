import { Navigate, Route, Routes } from "react-router-dom";
import { Checkout } from "./pages/Checkout.tsx/index.tsx";
import { Home } from "./pages/Home";
import { Success } from "./pages/Success";

export function Router() {
  return (
    <Routes>
      {/* no preojeto de crinograma rocketseat tem um route que abraçã os outros */}
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
