import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router";
import { Header } from "../components/organisms/Header";
import { AdminHome } from "../components/pages/AdminUser/AdminHome";
import { EditPosts } from "../components/pages/AdminUser/EditPost";
import { LoginPage } from "../components/pages/AdminUser/LoginPage";
import { NewPosts } from "../components/pages/AdminUser/NewPosts";
import { Blog } from "../components/pages/GeneralUser/Blog";
import { Home } from "../components/pages/Home";
import { NotFoundPage } from "../components/pages/NotFoundPage";
import { HeaderFooterLayout } from "../components/templates/HeaderFooterLayout";
import { selectPosts } from "../features/post/postSlice";

export const Router: React.VFC = () => {
  const posts = useSelector(selectPosts);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <HeaderFooterLayout>
            <Home />
          </HeaderFooterLayout>
        </Route>
        {posts?.map((post, index) => (
          <Route path={`/${post.id}`} key={index}>
            <Header />
            <Blog post={post} />
          </Route>
        ))}
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route
          path="/adminUser"
          render={({ match: { url } }) => (
            <Switch>
              <Route exact path={`${url}`}>
                <Header />
                <AdminHome />
              </Route>
              <Route path={`${url}/newPosts`}>
                <Header />
                <NewPosts />
              </Route>
              <Route path={`${url}/editPost`}>
                <Header />
                <EditPosts />
              </Route>
              <Route path={`${url}/*`}>
                <NotFoundPage />
              </Route>
            </Switch>
          )}
        ></Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </>
  );
};
