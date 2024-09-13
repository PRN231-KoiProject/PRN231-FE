import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./index.css";

import HomePage from "./pages/homePage";

function App() {
  return (
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
}

export default App;
