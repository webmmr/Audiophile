import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalCSS";
import { GlobalProvider } from "./context/useGlobalContext";

import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:category",
        element: <Category />,
      },
      {
        path: "/product/:slug",
        element: <Product />,
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
