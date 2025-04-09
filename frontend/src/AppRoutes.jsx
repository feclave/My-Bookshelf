import { BrowserRouter, Route, Routes } from "react-router";
import Core from "./pages/Core";
import NotFound from "./pages/Not Found";
import Bookshelf from "./pages/Bookshelf";
import Home from "./pages/Home";

function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Core />}>
          <Route index element={<Home />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
