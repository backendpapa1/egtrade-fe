import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/home";
import Navigation from "./components/navigation/navigation";
import AppStyle from "./app.style";
import Sidebar from "./components/sidebar/sidebar";
import Post from "./pages/posts/post/post";

function App() {
    const appStyle = new AppStyle();
  return (
    <div >
        <Navigation />
        <div style={appStyle.baseContainer().style} className={appStyle.baseContainer().class} >
            <div style={appStyle.baseLeftContainer().style} className={appStyle.baseLeftContainer().class} >
                <Sidebar />
            </div>
            <div style={appStyle.baseRightContainer().style} className={appStyle.baseRightContainer().class}>
            {/*    route section*/}
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'/posts'} element={<Post />} />

                </Routes>
            </div>
        </div>

    </div>
  );
}

export default App;
