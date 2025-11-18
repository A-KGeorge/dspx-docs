import React, { type ReactNode } from "react";
import NavbarLayout from "./Layout";
import NavbarContent from "./Content";

export default function Navbar(): ReactNode {
  return (
    <NavbarLayout>
      <NavbarContent />
    </NavbarLayout>
  );
}
