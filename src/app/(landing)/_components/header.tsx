import React from "react";
import { Navbar } from "./navbar";

const Header: React.FC = () => {
  return (
    <header className="px-2 lg:py-6">
      <Navbar />
    </header>
  );
};

export default Header;
