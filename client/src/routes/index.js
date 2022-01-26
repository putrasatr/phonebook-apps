import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth/container";
import Home from "pages/Home";
import Testing from "pages/Testing";
import Register from "../pages/Auth/Register";
import PhoneBookBox from "../components/PhoneBookBox";
import Layout from "containers/Layouts";
import { LangContext } from "contexts/LanguageProvider";
import translate from "translations";
import Post from "pages/post";

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
  { path: "/testing", Element: Testing },
  { path: "/post", Element: Post, isUsingSidebar: true },
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
      {routers.map(({ path, Element, isUsingSidebar }) => (
        <Route
          key={path}
          path={path}
          element={renderWithLayout(Element, { lang, setLang, isUsingSidebar })}
        />
      ))}
    </Routes>
  );
};

export default Router;
