import React from "react";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";
import Cart from "../components/cart/Cart";
import AuthPage from "../pages/AuthPage";
import { Route, Routes } from "react-router-dom";
import ContactsPage from "../pages/ContactsPage";
import AddProduct from "../components/product/AddProduct";
import EditPage from "../pages/EditPage";
import AddCategory from "../components/product/AddCategory";
import AdminPage from "../pages/AdminPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <HomePage /> },
    { id: 2, link: "/products", element: <ProductPage /> },
    { id: 3, link: "/about", element: <AboutPage /> },
    { id: 4, link: "*", element: <NotFoundPage /> },
    { id: 5, link: "/cart", element: <Cart /> },
    { id: 6, link: "/auth", element: <AuthPage /> },
    { id: 7, link: "/contacts", element: <ContactsPage /> },
    { id: 8, link: "/edit/:id", element: <EditPage /> },
    { id: 9, link: "/admin", element: <AdminPage /> },
  ];

  return (
    <div>
      <Routes>
        {PUBLIC_ROUTES.map((elem) => (
          <Route path={elem.link} key={elem.id} element={elem.element} />
        ))}
      </Routes>
    </div>
  );
};

export default MainRoutes;
