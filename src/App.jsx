import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalCSS";
import { GlobalProvider } from "./context/useGlobalContext";

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
      <GlobalProvider>
        <RouterProvider router={router} />
      </GlobalProvider>
    </>
  );
}

export default App;
