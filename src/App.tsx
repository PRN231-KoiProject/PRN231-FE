import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./index.css";

import ContactPage from "./pages/contactPage";

function App() {
  return (
    <BrowserRouter>
      <ContactPage />
    </BrowserRouter>
  );
}

export default App;
