import React from "react";
import { Switch, Route } from "react-router";
import { Header } from "../components/organisms/Header";
import AdminHome from "../components/pages/AdminUser/AdminHome";
import { NewPosts } from "../components/pages/AdminUser/NewPosts";
import { Blog } from "../components/pages/GeneralUser/Blog";
import { Home } from "../components/pages/GeneralUser/Home";
import { HeaderFooterLayout } from "../components/templates/HeaderFooterLayout";

export const Router: React.VFC = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HeaderFooterLayout>
            <Home />
          </HeaderFooterLayout>
        </Route>
        <Route
          path="/blog"
          render={({ match: { url } }) => (
            <Switch>
              <Route path={`${url}/1`}>
                <HeaderFooterLayout>
                  <Blog />
                </HeaderFooterLayout>
              </Route>
            </Switch>
          )}
        ></Route>
        <Route
          path="/adminUser"
          render={({ match: { url } }) => (
            <Switch>
              <Route exact path={`${url}`}>
                <Header />
                <AdminHome />
              </Route>

              <Route path={`${url}/blog1`}>
                <Header />
                <Blog />
              </Route>
              <Route path={`${url}/newPosts`}>
                <Header />
                <NewPosts />
              </Route>
            </Switch>
          )}
        ></Route>
      </Switch>
    </>
  );
};
