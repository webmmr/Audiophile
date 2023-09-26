import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalCSS";

import AppLayout from "./ui/AppLayout";
import Home, { loader as dataLoader } from "./pages/Home";
import Category from "./pages/Category";
import SingleProduct, { loader as productLoader } from "./pages/SingleProduct";

import Error from "./ui/Error";
import Checkout from "./features/checkout/Checkout";
import Shop from "./pages/Shop";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    loader: dataLoader,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: dataLoader,
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: dataLoader,
      },
      {
        path: "/category/:category",
        element: <Category />,
        loader: dataLoader,
      },
      {
        path: "/product/:slug",
        element: <SingleProduct />,
        loader: productLoader,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />

      <RouterProvider router={router} />
    </>
  );
}

export default App;
