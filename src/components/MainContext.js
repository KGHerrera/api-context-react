import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

export default function MainContext() {

  const {auth} = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const {texts} = useContext(LanguageContext);

  return (
    <main className={theme}>
      {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}

      <p>{texts.mainContent}</p>
    </main>
  );
}
