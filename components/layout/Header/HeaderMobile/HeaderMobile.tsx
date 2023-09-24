import { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

interface Category {
  name: string;
  href: string;
  current: boolean;
}

interface HeaderPlatformProps {
  allCategories: Category[];
}

export default async function HeaderPlatform({
  allCategories,
}: HeaderPlatformProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [seach, setSeach] = useState("");
  const [openNavBar, setOpenNavBar] = useState(false);

  return (
    <div className="py-8">
      <div className="flex flex-row">
        {/*Menu*/}
        <div
          className={`flex items-center ps-4 ${
            openNavBar ? "bg-white absolute z-10 w-full" : ""
          }`}
        >
          <Disclosure as="nav" className="">
            {({ open }) => (
              setOpenNavBar(open),
              (
                <>
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2  focus:outline-none focus:ring-2 focus:ring-inset">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                  <Disclosure.Panel className="md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                      {allCategories.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className={classNames(
                            item ? "" : "",
                            "block rounded-md px-3 py-2 text-base font-medium",
                            { "font-bold": item }
                          )}
                          aria-current={item ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                      <Link
                        href="/login"
                        className="block rounded-md px-3 py-2 text-base font-medium"
                      >
                        Acceder
                      </Link>
                      <Link
                        href="/register"
                        className="block rounded-md px-3 py-2 text-base font-medium"
                      >
                        Registrarse
                      </Link>
                    </div>
                  </Disclosure.Panel>
                </>
              )
            )}
          </Disclosure>
        </div>
        {/*Buscador y Carrito*/}
        <div className={`flex flex-row items-center w-10/12 justify-around`}>
          {/*Buscador */}
          <div className="w-9/12">
            <form>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full rounded-full py-2 px-4 pl-10 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1"
                  onChange={(e) => setSeach(e.target.value)}
                />
              </div>
            </form>
          </div>
          {/*Carrito*/}
          <div className="w-auto">
            <button>
              <div className="relative py-2">
                <div className="t-0 absolute left-3">
                  <p className="flex h-2 w-2 items-center justify-center rounded-full bg-amber-400 p-3 text-xs text-white">
                    3
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="file: mt-4 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
