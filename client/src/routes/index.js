import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth/container";
import Register from "../pages/Auth/Register";
import PhoneBookBox from "../components/PhoneBookBox";
import Layout from "containers/Layouts";
import { LangContext } from "contexts/LanguageProvider";

const NotFound = () => (
  <div>
    <p>There's nothing here!</p>
  </div>
);

const routers = [
  { path: "/welcome", Element: PhoneBookBox },
  { path: "/", Element: Auth },
  { path: "/signup", Element: Register },
  { path: "*", Element: NotFound },
];

const renderWithLayout = (Component, props) => (
  <Layout lang={props.lang} setLang={props.setLang}>
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
