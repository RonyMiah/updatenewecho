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
import { FaWhatsappSquare } from "react-icons/fa";

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
    { name: "Home", path: "/" },
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
      <div className="  ">
        <Navbar
          isBordered
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
          className="!bg-[#608BC1] shadow-sm "
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
              <div className="flex flex-wrap ">
                <div className="hidden md:block lg:block">
                  <span className=" ms-2 font-monoton text-[#201558] font-medium not-italic text-2xl">
                    New Eco Resources BM. SDN. BHD.
                  </span>
                  <span className="mt-2 ms-1 text-[#201558] text-base">
                    ( Company No : <span className="font-bold">1497422-X</span>{" "}
                    )
                  </span>
                </div>
                <div className="hidden md:block lg:block">
                  <p className="ms-2 font-sourgummy text-white font-medium">
                    Excellent Cleaning Operation Service, Always Make New
                  </p>
                </div>
              </div>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent justify="end">
            {menus.map((menu) => {
              return (
                <>
                  {menu.menu ? (
                    <Dropdown key={menu.name}>
                      <NavbarItem
                        className="hidden sm:flex "
                        isActive={pathname === menu.path}
                      >
                        <DropdownTrigger>
                          <Button
                            disableRipple
                            className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white text-md"
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
                          <Link prefetch={true} href={"/services#01"}>
                            Commercial Cleaning
                          </Link>
                        </DropdownItem>

                        <DropdownItem
                          key="usage_metrics"
                          //   startContent={icons.activity}
                        >
                          <Link prefetch={true} href={"/services#02"}>
                            Office Cleaning
                          </Link>
                        </DropdownItem>

                        {/* <DropdownItem
                          key="production_ready"
                          //   startContent={icons.flash}
                        >
                          <Link href={"/services#03"}>Window Cleaning</Link>
                        </DropdownItem> */}

                        <DropdownItem
                          key="99_uptime"
                          //   startContent={icons.server}
                        >
                          <Link prefetch={true} href={"/services#04"}>
                            Carpet Cleaning
                          </Link>
                        </DropdownItem>
                        <DropdownItem
                          key="supreme_support"
                          //   startContent={icons.user}
                        >
                          <Link prefetch={true} href={"/services#05"}>
                            Janitorial Cleaning
                          </Link>
                        </DropdownItem>
                        <DropdownItem
                          key="supreme_support"
                          //   startContent={icons.user}
                        >
                          <Link prefetch={true} href={"/services#06"}>
                            Washroom Cleaning
                          </Link>
                        </DropdownItem>
                        <DropdownItem
                          key="supreme_support"
                          //   startContent={icons.user}
                        >
                          <Link prefetch={true} href={"/services#07"}>
                            Property Maintenance
                          </Link>
                        </DropdownItem>
                        <DropdownItem
                          key="supreme_support"
                          //   startContent={icons.user}
                        >
                          <Link prefetch={true} href={"/services#08"}>
                            Hard Floor Maintenance
                          </Link>
                        </DropdownItem>
                        <DropdownItem
                          key="supreme_support"
                          //   startContent={icons.user}
                        >
                          <Link prefetch={true} href={"/services#09"}>
                            Grass Cutting Services
                          </Link>
                        </DropdownItem>
                        <DropdownItem
                          key="supreme_support"
                          //   startContent={icons.user}
                        >
                          <Link prefetch={true} href={"/services#010"}>
                            Tree & Garden Maintenance
                          </Link>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  ) : (
                    <NavbarItem
                      key={menu.name}
                      className="hidden sm:flex px-8 text-white font-extrabold"
                      isActive={pathname === menu.path}
                    >
                      <Link href={menu.path}>{menu.name}</Link>
                    </NavbarItem>
                  )}
                </>
              );
            })}
            <NavbarItem>
              <Button
                as={Link}
                // color="success"
                href="/contacts"
                variant="flat"
                className="text-white bg-[#133E87]"
              >
                Contact
              </Button>
              <Link
                href="https://wa.me/60162606040"
                className="text-green-500 flex justify-center items-center gap-2  hover:underline "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsappSquare className="text-green-500 size-9 gap-2 ms-2" />
                
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarMenu className="pt-20">
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
                          className="p-0 bg-transparent data-[hover=true]:bg-transparent text-lg font-extrabold"
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

                      {/* <DropdownItem
                        onClick={() => setIsMenuOpen(false)}
                        key="production_ready"
                        //   startContent={icons.flash}
                      >
                        <Link href={"/services#03"}>Window Cleaning</Link>
                      </DropdownItem> */}

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
                      href={item.path}
                      //   size="lg"
                    >
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        href={item.path}
                      >
                        {item.name}
                      </Link>
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
