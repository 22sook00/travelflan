import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {GlobalStyle} from './GlobalStyle';
import Nav from './components/common/nav/Nav';
import Footer from './components/common/footer/Footer';
import Landing from './pages/Landing';
import Mypage from './pages/Mypage';
import Post from './pages/Post';
import Loading from './components/common/loading/Loading'

// const Landing = lazy(
//   () =>
//     new Promise((resolve: any) =>
//       setTimeout(() => resolve(import("./pages/Landing")), 3000)
//     )
// );


function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Nav />

          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>

            <Route path="/posts">
              <Post />
            </Route>

            <Route path="/mypage">
              <Mypage />
            </Route>
          </Switch>

          <Footer />
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
