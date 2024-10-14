import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./index.css";

import ConsultingPage from "./pages/consultingPage";

function App() {
  return (
    <BrowserRouter>
      <ConsultingPage />
    </BrowserRouter>
  );
}

export default App;
