import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route } from "react-router";
import { Header } from "../components/organisms/Header";
import AdminHome from "../components/pages/AdminUser/AdminHome";
import { EditPosts } from "../components/pages/AdminUser/EditPost";
import { NewPosts } from "../components/pages/AdminUser/NewPosts";
import { Blog } from "../components/pages/GeneralUser/Blog";
import { Home } from "../components/pages/GeneralUser/Home";
import { HeaderFooterLayout } from "../components/templates/HeaderFooterLayout";
import { selectPosts } from "../features/post/postSlice";

export const Router: React.VFC = () => {
  const posts = useSelector(selectPosts);
  console.log(posts);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HeaderFooterLayout>
            <Home />
          </HeaderFooterLayout>
        </Route>
        {/* <Route
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
        ></Route> */}
        {posts?.map((post, index) => (
          <Route path={`/${post.title}`} key={index}>
            <Header />
            <Blog post={post} />
          </Route>
        ))}
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
            </Switch>
          )}
        ></Route>
      </Switch>
    </>
  );
};