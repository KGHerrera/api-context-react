import React from "react";

export default function Main({ theme, texts, auth }) {
  return (
    <main className={theme}>
      {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}

      <p>{texts.mainContent}</p>
    </main>
  );
}
