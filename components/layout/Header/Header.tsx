"use client";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import HeaderPlatform from "./HeaderPlatform/HeaderPlatform";

export default async function Header() {
  const allCategories = [
    {
      name: "Pipas y Accesorios",
      href: "#",
      current: false,
    },
    {
      name: "Hierbas de Fumado",
      href: "#",
      current: false,
    },
    {
      name: "Papel de Fumar y Envoltorios",
      href: "#",
      current: false,
    },
    {
      name: "Productos de Almacenamiento",
      href: "#",
      current: false,
    },
    {
      name: "Vaporizadores",
      href: "#",
      current: false,
    },
    {
      name: "Productos de Limpieza",
      href: "#",
      current: false,
    },
  ];

  return (
    <header className="min-h-[5rem] md:mx-4">
      <div className="hidden md:block">
        <HeaderPlatform allCategories={allCategories} />
      </div>
      <div className="block md:hidden">
        <HeaderMobile allCategories={allCategories} />
      </div>
    </header>
  );
}
