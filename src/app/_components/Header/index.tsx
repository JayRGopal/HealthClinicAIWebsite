"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import "@/styles/navbar.css";
import GetStarted from "../ui/started-button";
import DashboardButton from "../ui/dashboard-button";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  const { user } = useUser();
  // Assume role is stored in user.publicMetadata.role
  const isBiller = user?.publicMetadata?.role === "biller";

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition dark:bg-gray-dark dark:shadow-sticky-dark"
            : "absolute h-20 bg-transparent bg-opacity-90"
        }`}
      >
        <div className="container mx-auto flex flex-col items-center justify-between px-4 lg:flex-row">
          <div className="relative flex w-full flex-col items-center justify-between lg:flex-row">
            {/* Logo */}
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
              >
                <Image
                  src="/images/logo/kyron_medical.png"
                  alt="Kyron Logo"
                  width={140}
                  height={30}
                  className="w-full dark:hidden"
                />

                <Image
                  src="/images/logo/kyron_medical.png"
                  alt="Kyron Logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                />
              </Link>
            </div>
            <div className="flex w-full flex-col items-center justify-between px-4 lg:flex-row">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />

                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />

                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>

                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 flex w-[250px] flex-col rounded border-[.5px] border-body-color/50 bg-white px-6  duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:flex-row lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="mb-5 block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? (
                          <Link
                            href={menuItem.path}
                            className={`nav-link flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              usePathName === menuItem.path
                                ? "active text-primary underline-offset-2 dark:text-white"
                                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            <div
                              className={`submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                openIndex === index ? "block" : "hidden"
                              }`}
                            >
                              {menuItem.submenu?.map((submenuItem, index) =>
                                submenuItem.path ? (
                                  <Link
                                    href={submenuItem.path}
                                    key={index}
                                    className={`block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3
        ${usePathName === submenuItem.path ? "active text-primary underline underline-offset-2" : ""}
      `}
                                  >
                                    {submenuItem.title}
                                  </Link>
                                ) : null,
                              )}
                            </div>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>

                  {/* Mobile-only login and signup */}
                  <div className="mb-5 block lg:hidden">
                    <SignedOut>
                      <div className="flex flex-col items-center justify-between gap-4">
                        <SignInButton>Login</SignInButton>
                        <GetStarted />
                      </div>
                    </SignedOut>
                    <SignedIn>
                      <div className="flex flex-col items-center justify-between gap-4"></div>
                      {isBiller && <DashboardButton />}
                      <UserButton />
                    </SignedIn>
                  </div>
                </nav>
              </div>

              {/* Large screen login and signup */}
              <div className="hidden flex-col items-center justify-end gap-4 sm:flex-row lg:flex">
                <SignedOut>
                  <SignInButton>Login</SignInButton>
                  <GetStarted />
                </SignedOut>
                <SignedIn>
                  {isBiller && <DashboardButton />}
                  <UserButton />
                </SignedIn>
              </div>
            </div>{" "}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
