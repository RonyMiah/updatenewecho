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
import logo from "@/assets/logo.png";

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
    return <Image src={logo} height={50} width={50} alt="logo" />;
  };

  return (
    <>
      <div>
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
            <NavbarBrand as={Link} href={"/"}>
              <AcmeLogo />
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex gap-4" justify="end">
            <NavbarBrand as={Link} href={"/"}>
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
                        className="w-[220px] text-left "
                        itemClasses={{
                          base: "gap-4",
                        }}
                      >
                        <DropdownItem
                          key="autoscaling"
                          //   startContent={icons.scale}
                        >
                          <Link href={"/services#01"}>Commercial Cleaning</Link>
                        </DropdownItem>

                        <DropdownItem
                          key="usage_metrics"
                          //   startContent={icons.activity}
                        >
                          <Link href={"/services#02"}>Office Cleaning</Link>
                        </DropdownItem>
                        <DropdownItem
                          key="production_ready"
                          //   startContent={icons.flash}
                        >
                          <Link href={"/services#03"}>Window Cleaning</Link>
                        </DropdownItem>
                        <DropdownItem
                          key="99_uptime"
                          //   startContent={icons.server}
                        >
                          <Link href={"/services#04"}>Carpet Cleaning</Link>
                        </DropdownItem>
                        <DropdownItem
                          key="supreme_support"
                          //   startContent={icons.user}
                        >
                          <Link href={"/services#05"}>Janitorial Cleaning</Link>
                        </DropdownItem>
                        <DropdownItem
                          key="supreme_support"
                          //   startContent={icons.user}
                        >
                          <Link href={"/services#06"}>Washroom Cleaning</Link>
                        </DropdownItem>
                        <DropdownItem
                          key="supreme_support"
                          //   startContent={icons.user}
                        >
                          <Link href={"/services#07"}>
                            Property Maintenance
                          </Link>
                        </DropdownItem>
                        <DropdownItem
                          key="supreme_support"
                          //   startContent={icons.user}
                        >
                          <Link href={"/services#08"}>
                            Hard Floor Maintenance
                          </Link>
                        </DropdownItem>
                        <DropdownItem
                          key="supreme_support"
                          //   startContent={icons.user}
                        >
                          <Link href={"/services#09"}>
                            Grass Cutting Services
                          </Link>
                        </DropdownItem>
                        <DropdownItem
                          key="supreme_support"
                          //   startContent={icons.user}
                        >
                          <Link href={"/services#010"}>
                            Tree & Garden Maintenance
                          </Link>
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
              <Button as={Link} color="success" href="/contacts" variant="flat">
                Contact
              </Button>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu>
            {menus.map((item, index) => (
              <>
                {item.menu ? (
                  <Dropdown key={item.name}>
                    <NavbarMenuItem
                      className="flex sm:hidden"
                      isActive={pathname.includes(item.path)}
                    >
                      <DropdownTrigger>
                        <Button
                          disableRipple
                          className="p-0 bg-transparent data-[hover=true]:bg-transparent text-lg"
                          endContent={<IoChevronDownSharp />}
                          radius="none"
                          variant="light"
                        >
                          Services
                        </Button>
                      </DropdownTrigger>
                    </NavbarMenuItem>

                    <DropdownMenu
                      aria-label="ACME features"
                      className="w-[220px] text-left "
                      itemClasses={{
                        base: "gap-4",
                      }}
                    >
                      <DropdownItem
                        onClick={() => setIsMenuOpen(false)}
                        key="autoscaling"
                        //   startContent={icons.scale}
                      >
                        <Link href={"/services#01"}>Commercial Cleaning</Link>
                      </DropdownItem>

                      <DropdownItem
                        onClick={() => setIsMenuOpen(false)}
                        key="usage_metrics"
                        //   startContent={icons.activity}
                      >
                        <Link href={"/services#02"}>Office Cleaning</Link>
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => setIsMenuOpen(false)}
                        key="production_ready"
                        //   startContent={icons.flash}
                      >
                        <Link href={"/services#03"}>Window Cleaning</Link>
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => setIsMenuOpen(false)}
                        key="99_uptime"
                        //   startContent={icons.server}
                      >
                        <Link href={"/services#04"}>Carpet Cleaning</Link>
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => setIsMenuOpen(false)}
                        key="supreme_support"
                        //   startContent={icons.user}
                      >
                        <Link href={"/services#05"}>Janitorial Cleaning</Link>
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => setIsMenuOpen(false)}
                        key="supreme_support"
                        //   startContent={icons.user}
                      >
                        <Link href={"/services#06"}>Washroom Cleaning</Link>
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => setIsMenuOpen(false)}
                        key="supreme_support"
                        //   startContent={icons.user}
                      >
                        <Link href={"/services#07"}>Property Maintenance</Link>
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => setIsMenuOpen(false)}
                        key="supreme_support"
                        //   startContent={icons.user}
                      >
                        <Link href={"/services#08"}>
                          Hard Floor Maintenance
                        </Link>
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => setIsMenuOpen(false)}
                        key="supreme_support"
                        //   startContent={icons.user}
                      >
                        <Link href={"/services#09"}>
                          Grass Cutting Services
                        </Link>
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => setIsMenuOpen(false)}
                        key="supreme_support"
                        //   startContent={icons.user}
                      >
                        <Link href={"/services#010"}>
                          Tree & Garden Maintenance
                        </Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                ) : (
                  <NavbarMenuItem key={`${item.name}-${index}`}>
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
                      {item.name}
                    </Link>
                  </NavbarMenuItem>
                )}
              </>
            ))}
          </NavbarMenu>
        </Navbar>
      </div>
    </>
  );
}
