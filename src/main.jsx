import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductProvider from "./context/Productcontext.jsx";
import SidebarProvider from "./context/SidebarContexit.jsx";
import CartProvider from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
