import { BrowserRouter, Route, Routes } from "react-router-dom";
import Success from "./Success";
import Form from "./Form";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
