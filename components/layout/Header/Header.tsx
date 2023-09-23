import { useTranslation } from "react-i18next";

export default async function Header() {
  //const [t] = useTranslation("global");
  return (
    <header className="text-sm text-neutral-500 dark:text-neutral-400">
      {/*t(["header.product"])*/}
      HEADER
    </header>
  );
}
