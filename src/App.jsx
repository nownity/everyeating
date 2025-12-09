import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommonForm from "./common/CommonForm";
import ScrollToTop from "./components/ScrollToTop";

import MainPage from "./pages/MainPage";
import CompanyPage from "./pages/CompanyPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<CommonForm />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
