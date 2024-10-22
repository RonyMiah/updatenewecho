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

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoChevronDownSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import logo from '@/assets/logo.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    "About",
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
        src={logo}
        height={50}
        width={50}
        alt="logo"
      />
    );
  };

  return (
    <>
      <div  >
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
                      <NavbarItem
                        className="hidden sm:flex"
                        isActive={pathname.includes(menu.path)}
                      >
                        <DropdownTrigger>
                          <Button
                            disableRipple
                            className="p-0 bg-transparent data-[hover=true]:bg-transparent text-base"
                            endContent={<IoChevronDownSharp />}
                            radius="none"
                            variant="light"
                          >
                            Services
                          </Button>
                        </DropdownTrigger>
                      </NavbarItem>
                      <DropdownMenu
                        aria-label="ACME features"
                        className="w-[220px] text-center "
                        itemClasses={{
                          base: "gap-4",
                        }}
                      >
                        <DropdownItem
                          key="autoscaling"
                          //   startContent={icons.scale}
                        >
                          Commercial Cleaning
                        </DropdownItem>
                        <DropdownItem
                          key="usage_metrics"
                          //   startContent={icons.activity}
                        >
                          Office Cleaning
                        </DropdownItem>
                        <DropdownItem
                          key="production_ready"
                          //   startContent={icons.flash}
                        >
                          Window Cleaning
                        </DropdownItem>
                        <DropdownItem
                          key="99_uptime"
                          //   startContent={icons.server}
                        >
                          Carpet Cleaning
                        </DropdownItem>
                        <DropdownItem
                          key="supreme_support"
                          //   startContent={icons.user}
                        >
                          Janitorial Cleaning
                        </DropdownItem>
                        <DropdownItem
                          key="supreme_support"
                          //   startContent={icons.user}
                        >
                          Washroom Cleaning
                        </DropdownItem>
                        <DropdownItem
                          key="supreme_support"
                          //   startContent={icons.user}
                        >
                          Property Maintenance
                        </DropdownItem>
                        <DropdownItem
                          key="supreme_support"
                          //   startContent={icons.user}
                        >
                          Hard Floor Maintenance
                        </DropdownItem>
                        <DropdownItem
                          key="supreme_support"
                          //   startContent={icons.user}
                        >
                          Grass Cutting Services
                        </DropdownItem>
                        <DropdownItem
                          key="supreme_support"
                          //   startContent={icons.user}
                        >
                          Tree & Garden Maintenance
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  ) : (
                    <NavbarItem
                      key={menu.name}
                      className="hidden sm:flex px-8"
                      isActive={pathname.includes(menu.path)}
                    >
                      <Link href={menu.path}>{menu.name}</Link>
                    </NavbarItem>
                  )}
                </>
              );
            })}
            <NavbarItem>
              <Button as={Link} color="success" href="#" variant="flat">
                Contact
              </Button>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className="w-full "
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
      </div>
    </>
  );
}
