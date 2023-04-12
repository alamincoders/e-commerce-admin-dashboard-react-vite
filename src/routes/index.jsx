import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Customers from "../pages/Customers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
    ],
  },
]);

export default router;
