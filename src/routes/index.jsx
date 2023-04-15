import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Error from "../pages/Error";
import Dashboard from "../pages/Dashboard";
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
        element: <Dashboard/>,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
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
