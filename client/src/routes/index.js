import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth/container";
import Home from "pages/Home";
import Register from "../pages/Auth/Register";
import PhoneBookBox from "../components/PhoneBookBox";
import Layout from "containers/Layouts";
import { LangContext } from "contexts/LanguageProvider";
import translate from "translations";

const NotFound = ({ lang }) => (
  <div>
    <p style={{ color: "white" }}>{translate[lang]["Router.Notfound"]}</p>
  </div>
);

const routers = [
  { path: "/welcome", Element: PhoneBookBox },
  { path: "/", Element: Auth },
  { path: "/home", Element: Home },
  { path: "/signup", Element: Register },
  { path: "*", Element: NotFound },
];

const renderWithLayout = (Component, props) => (
  <Layout {...props}>
    <Component {...props} />
  </Layout>
);

const Router = () => {
  const { lang, setLang } = useContext(LangContext);
  return (
    <Routes>
      {routers.map(({ path, Element }) => (
        <Route
          key={path}
          path={path}
          element={renderWithLayout(Element, { lang, setLang })}
        />
      ))}
    </Routes>
  );
};

export default Router;
