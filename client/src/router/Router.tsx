import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Example1, Example2, Home } from "../pages";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/example-1" element={<Example1 />} />
        <Route path="/example-2" element={<Example2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
