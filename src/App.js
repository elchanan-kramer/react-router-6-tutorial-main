import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Info from "./pages/Info";
import Todos from "./pages/Todos";
import Albums from "./pages/Albums";
import Photos from "./pages/Photos";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import Login from "./pages/Login";
import SinglePost from "./pages/SinglePost";
import Comments from "./pages/Comments";
function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route index path="login" element={<Login />} />
      <Route path="/" element={<Home />}>
          <Route path="/Info" element={<Info />} />
          <Route path="/Todos" element={<Todos />} />
          <Route path="/Albums" element={<Albums />}>
            <Route path=":albumId" element={<Photos />} />
          </Route>
          <Route path="/Posts" element={<Posts />}>
            <Route path=":postId" element={<SinglePost />} />
            <Route path="Comments" element={<Comments />} />
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
