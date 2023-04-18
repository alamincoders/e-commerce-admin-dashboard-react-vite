import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Layout = lazy(() => import("../layouts/Layout"));
const Error = lazy(() => import("../pages/Error"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Products = lazy(() => import("../pages/Products"));
const Form = lazy(() => import("../components/lib/Form"));
const Table = lazy(() => import("../pages/Table"));
const CardCollection = lazy(() => import("../pages/CardCollection"));
const Modal = lazy(() => import("../pages/Modal"));


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
        path: "/table",
        element: <Table />,
      },
      {
        path: "/forms",
        element: <Form />,
      },
      {
        path: "/card",
        element: <CardCollection />,
      },
      {
        path: "/modal",
        element: <Modal />,
      },
    ],
  },
]);


export default router;
