import { useState } from "react";
import northouse from "/public/assets/images/northouse.png";

import Image from "next/image";
import Link from "next/link";

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
  const [seach, setSeach] = useState("");
  const [category, setCategory] = useState("");
  return (
    <div className="flex flex-row w-full 2xl:container 2xl:mx-auto justify-between items-center py-8">
      {/*Logo*/}
      <div className="w-auto">
        <Image src={northouse} alt="Northouse" width={100} height={100} />
      </div>
      <div className="flex flex-col w-11/12">
        {/*Buscador, Acceder y Carrito*/}
        <div className="flex flex-row justify-between">
          <div className="w-9/12 grid items-center">
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
          <div className="flex items-center">
            <Link
              href="/login"
              className="px-10 py-2 text-lg text-white bg-turquoise rounded-full hover:bg-turquoiseHover focus:outline-none focus:bg-turquoise-600 focus:ring-2 focus:ring-offset-2 focus:ring-turquoiseHover"
            >
              Accede
            </Link>
          </div>
          <div className="w-[5%] ">
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
        {/*Category*/}
        <div className="">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row items-center justify-between">
              {allCategories.map((category, index) => (
                <Link
                  key={index}
                  className="py-2 mx-4 text-category uppercase font-semibold"
                  href={category.href}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
