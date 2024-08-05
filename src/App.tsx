import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import ContactUsPage from "./pages/ContactUsPage";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import PatientPortalPage from "./pages/PatientPortalPage";
import DoctorCollaborationPage from "./pages/DoctorCollaborationPage";

const App: React.FC = () => {
  // Retrieve the theme from localStorage, default to 'default'
  const [theme, setTheme] = useState<string>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "default";
  });

  useEffect(() => {
    // Set the theme on the document root
    document.documentElement.setAttribute("data-theme", theme);
    // Save the theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
  };

  return (
    <Provider store={store}>
      <Router>
        <Header onThemeChange={handleThemeChange} />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/patient-portal" element={<PatientPortalPage />} />
          <Route
            path="/doctor-collaboration"
            element={<DoctorCollaborationPage />}
          />

          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
