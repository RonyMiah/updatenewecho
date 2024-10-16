"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
// import { AcmeLogo } from "./AcmeLogo";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoChevronDownSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const menus = [
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      menu: [{ name: "Name", path: "/services/name" }],
    },
    { name: "Projects", path: "/projects" },
  ];

  const AcmeLogo = () => {
    return (
      <Image
        src={"https://html.tonatheme.com/2023/Cleaner/images/header-logo.png"}
        height={40}
        width={100}
        alt="logo"
      />
    );
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarBrand>
          <AcmeLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        {menus.map((menu) => {
          return (
            <>
              {menu.menu ? (
                <Dropdown key={menu.name}>
                  <NavbarItem className="hidden sm:flex">
                    <DropdownTrigger>
                      <Button
                        disableRipple
                        className="p-0 bg-transparent data-[hover=true]:bg-transparent text-base"
                        endContent={<IoChevronDownSharp />}
                        radius="none"
                        variant="light"
                      >
                        Features
                      </Button>
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu
                    aria-label="ACME features"
                    className="w-[340px]"
                    itemClasses={{
                      base: "gap-4",
                    }}
                  >
                    <DropdownItem
                      key="autoscaling"
                      description="ACME scales apps to meet user demand, automagically, based on load."
                      //   startContent={icons.scale}
                    >
                      Autoscaling
                    </DropdownItem>
                    <DropdownItem
                      key="usage_metrics"
                      description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                      //   startContent={icons.activity}
                    >
                      Usage Metrics
                    </DropdownItem>
                    <DropdownItem
                      key="production_ready"
                      description="ACME runs on ACME, join us and others serving requests at web scale."
                      //   startContent={icons.flash}
                    >
                      Production Ready
                    </DropdownItem>
                    <DropdownItem
                      key="99_uptime"
                      description="Applications stay on the grid with high availability and high uptime guarantees."
                      //   startContent={icons.server}
                    >
                      +99% Uptime
                    </DropdownItem>
                    <DropdownItem
                      key="supreme_support"
                      description="Overcome any challenge with a supporting team ready to respond."
                      //   startContent={icons.user}
                    >
                      +Supreme Support
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <NavbarItem
                  key={menu.name}
                  className="hidden sm:flex"
                  isActive={pathname.includes(menu.path)}
                >
                  <Link href={menu.path}>{menu.name}</Link>
                </NavbarItem>
              )}
            </>
          );
        })}
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              //   size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
