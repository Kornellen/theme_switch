import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem("theme") || "light"
  );

  const handleChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <header className={`${theme}`}>
        <nav>
          <ul>
            <li>
              <div className="theme-switch">
                <button
                  onClick={handleChangeTheme}
                  className={`theme-button ${theme}`}
                >
                  {theme === "light" ? (
                    <FontAwesomeIcon icon={faMoon} />
                  ) : (
                    <FontAwesomeIcon icon={faSun} />
                  )}
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default App;
