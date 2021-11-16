import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth/container";
import Register from "../pages/Auth/Register";
import PhoneBookBox from "../components/PhoneBookBox";
import Layout from "containers/Layouts";

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

const renderWithLayout = (Component) => (
  <Layout>
    <Component />
  </Layout>
);

const Router = () => {
  return (
    <Routes>
      {routers.map(({ path, Element }) => (
        <Route key={path} path={path} element={renderWithLayout(Element)} />
      ))}
    </Routes>
  );
};

export default Router;
