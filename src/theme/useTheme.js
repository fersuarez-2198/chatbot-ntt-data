import { useEffect, useState } from "react";
import { setToLS, getFromLS } from "../utils/storage";

export const useTheme = () => {
  const themes = getFromLS("all-themes");
  const [theme, setTheme] = useState(themes.data.ecopetrol);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode) => {
    setToLS("theme", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = getFromLS("theme");
    localTheme ? setTheme(localTheme) : setTheme(themes.data.ecopetrol);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};
