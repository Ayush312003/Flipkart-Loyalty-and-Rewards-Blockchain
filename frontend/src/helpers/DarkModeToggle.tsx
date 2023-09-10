import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export const DarkModeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);

    if (checked) {
      document.documentElement.style.backgroundColor = "#333"; // Dark gray background
    } else {
      document.documentElement.style.backgroundColor = "white"; // White background
    }
  };

  return (
    <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} size={35} />
  );
};
