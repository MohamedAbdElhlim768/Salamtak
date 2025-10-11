import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "about", element: <About /> },
    ],
  },
  { path: "/login", element: <Login /> },
]);

export default function App() {
  return <RouterProvider router={routers} />;
}
