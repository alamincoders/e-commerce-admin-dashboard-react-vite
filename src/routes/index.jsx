import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "../layouts/Layout";
import Error from "../pages/Error";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Customers from "../pages/Customers";
import Table from "../pages/Table";

const Layout = lazy(() => import("../layouts/Layout"));
const Erro = lazy(() => import("../pages/Error"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Products = lazy(() => import("../pages/Products"));
const Customers = lazy(() => import("../pages/Customers"));
const Form = lazy(() => import("../components/lib/Form"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
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
      {
        path: "/table",
        element: <Table />,
      },
      {
        path: "/forms",
        element: <Form />,
      },
    ],
  },
]);


export default router;
