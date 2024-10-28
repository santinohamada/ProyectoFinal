import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DateProvider } from "./components/Context/DateContext.jsx";
import { CartProvider } from "./components/Context/CartContext.jsx";
import { FiltersProvider } from "./components/Context/FiltersContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FiltersProvider>
      <DateProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </DateProvider>
    </FiltersProvider>
  </StrictMode>
);
