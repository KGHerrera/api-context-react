import React, { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

export default function FooterContext() {
  const {texts} = useContext(LanguageContext);
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={theme}>
      <h4>{texts.footerTitle}</h4>
    </footer>
  );
}
