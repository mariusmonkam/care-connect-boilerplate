import React, { useEffect, useState } from "react";
import "../../styles/Header.css";
import appData from "../../data/appData";

interface HeaderProps {
  onThemeChange: (theme: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onThemeChange }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<string>("default");

  useEffect(() => {
    // Retrieve the current theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    setSelectedTheme(savedTheme || "default");
  }, []);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const handleChangeTheme = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = event.target.value;
    setSelectedTheme(newTheme);
    onThemeChange(newTheme);
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">{appData.companyName}</div>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="menu-icon">&#9776;</span>
        </button>
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            {appData.navigation.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
          <select
            className="theme-selector"
            onChange={handleChangeTheme}
            value={selectedTheme} // Use state to reflect the current theme
          >
            <option value="default">Default Theme</option>
            <option value="dark">Dark</option>
            <option value="corporate">Corporate</option>
            <option value="elegant">Elegant</option>
            <option value="modern">Modern</option>
            <option value="soft">Soft</option>
          </select>
        </nav>
      </div>
    </header>
  );
};

export default Header;
