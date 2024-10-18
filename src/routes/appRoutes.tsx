import { Route, Routes } from "react-router-dom";
import BlogPage from "../pages/blogPage";
import ConsultingPage from "../pages/consultingPage";
import ContactPage from "../pages/contactPage";
import HomePage from "../pages/homePage";
import ResultConsultPage from "../pages/resultConsultPage";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/consulting" element={<ConsultingPage />} />
      <Route path="/consulting/result" element={<ResultConsultPage/>} />
    </Routes>
  );
};

export default AppRoutes;
