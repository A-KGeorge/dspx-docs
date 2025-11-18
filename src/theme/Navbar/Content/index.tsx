import React, { type ReactNode } from "react";
import clsx from "clsx";
import {
  useThemeConfig,
  ErrorCauseBoundary,
  ThemeClassNames,
} from "@docusaurus/theme-common";
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
import NavbarItem, { type Props as NavbarItemConfig } from "@theme/NavbarItem";
import NavbarMobileSidebarToggle from "../MobileSidebar/Toggle";
import { Logo } from "../../../components/icons";

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function NavbarItems({ items }: { items: NavbarItemConfig[] }): ReactNode {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              { cause: error }
            )
          }
        >
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

function NavbarContentLayout({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <nav className="bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 w-full h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className={clsx(
              ThemeClassNames.layout.navbar.containerLeft,
              "navbar__items"
            )}
          >
            {left}
          </div>
          <div
            className={clsx(
              ThemeClassNames.layout.navbar.containerRight,
              "navbar__items navbar__items--right"
            )}
          >
            {right}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function NavbarContent(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();

  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);

  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items?
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <a href="/" className="shrink-0 flex items-center no-underline!">
            {/* Corrected Tailwind syntax for CSS variables */}
            <Logo width={64} height={32} />
            <span className="text-white text-2xl font-bold ml-3">dspx</span>
          </a>
          <NavbarItems items={leftItems} />
        </>
      }
      right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
          <NavbarItems items={rightItems} />
        </>
      }
    />
  );
}
