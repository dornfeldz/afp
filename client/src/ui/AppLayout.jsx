import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { createContext, useState } from "react";

export const Context = createContext();

function AppLayout() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Context.Provider value={{ cartItems, setCartItems }}>
      <div>
        <ScrollToTop />
        <Header />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default AppLayout;
