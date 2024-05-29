import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Category from "./pages/Category.jsx";
import Seller from "./pages/Seller.jsx";
import BestSellers from "./components/BestSellers.jsx";
import CartContextProvider from "./context/CartContextProvider.jsx";
import CartItemsViewer from "./components/CartItemsViewer.jsx";
const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/category/cok-satanlar",
        element: <BestSellers />,
      },
      {
        path: "/category/:categoryId",
        element: <Category />,
      },
      {
        path: "/seller/:sellerId",
        element: <Seller />,
      },
      {
        path: "/CartItemsViewer",
        element: <CartItemsViewer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <RouterProvider router={router} />
  </CartContextProvider>
);
