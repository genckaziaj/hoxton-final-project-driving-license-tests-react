import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { FixedNavbar } from "./components/FixedNavbar";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Tests } from "./pages/Tests";
import { TestQuestions } from "./pages/TestQuestions";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/tests/:testId" element={<TestQuestions />} />
      </Routes>
      <FixedNavbar />
    </div>
  );
}

export default App;
