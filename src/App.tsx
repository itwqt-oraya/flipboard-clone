import "./styles/main.scss";
import { BrowserRouter, Routes, Route } from "react-router";

import About from "./views/about";

// Layout
import { PublicLayout } from "./components/Layouts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<About />} />
        </Route>

        <Route path="*" element={<p>Not found.</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
