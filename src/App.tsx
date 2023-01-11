import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Navbar,
  Landing,
  Learn,
  LearningCards,
  Practice,
  Error,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="section_container">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/learn">
            <Route index element={<Learn />} />
            <Route path=":topic" element={<LearningCards />} />
          </Route>
          <Route path="/practice" element={<Practice />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
