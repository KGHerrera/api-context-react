import React from "react";

export default function Footer({ theme, texts }) {
  return (
    <footer className={theme}>
      <h4>{texts.footerTitle}</h4>
    </footer>
  );
}
