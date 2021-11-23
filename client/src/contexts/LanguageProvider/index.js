import React, { createContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { enLang } from "utils/tokens";

export const LangContext = createContext();

export default function LangProvider({ children }) {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    const langToken = localStorage.getItem("lang");
    if (langToken) {
      const { lang } = jwtDecode(langToken);
      setLang(lang);
      return;
    }
    localStorage.setItem("lang", enLang);
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
