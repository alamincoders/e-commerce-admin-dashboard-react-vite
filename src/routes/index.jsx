import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
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
        path: "/forms",
        element: <Form />,
      },
    ],
  },
]);

export default router;
