import { useState } from "react";
import {
  GitHub,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { Drawer, IconButton } from "@mui/material";
import { Logo } from "../icons";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Performance", href: "#performance" },
    { label: "Examples", href: "#examples" },
    { label: "Docs", href: "/docs/using%20dspx/getting-started" },
    { label: "Blog", href: "/blog" },
    {
      label: (
        <>
          <GitHub style={{ fontSize: "1.2rem", marginRight: 6 }} />
          GitHub
        </>
      ),
      href: "https://github.com/A-KGeorge/dspx",
      external: true,
    },
  ];

  return (
    <header className="bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 w-full border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0 flex items-center">
            <Logo width={64} height={32} />
            {/* Width is almost twice the height; original width = 223.2, height = 110.88 */}
            <span className="text-white text-2xl font-bold ml-3">dspx</span>
          </div>

          {/* Desktop Nav — visible at ≥1024px */}
          <nav className="hidden lg:flex space-x-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="navbar__item navbar__link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Hamburger — visible below 1024px */}
          <div className="lg:hidden">
            <IconButton
              onClick={() => setOpen(true)}
              size="large"
              sx={{ color: "white" }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
      </div>

      {/* Drawer Menu */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#0d1422",
            width: "260px",
            paddingTop: "20px",
            paddingLeft: "20px",
          },
        }}
      >
        <div className="flex justify-end pr-4 mb-4">
          <IconButton onClick={() => setOpen(false)} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </div>

        <nav className="flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="navbar__item navbar__link text-lg text-white"
              style={{ paddingBottom: "8px" }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Drawer>
    </header>
  );
};

export default Header;
