"use client";
import Footer from "components/components/layout/Footer/Footer";
import Header from "components/components/layout/Header/Header";
import "./globals.css";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import global_en from "../json/i18n/en/global.json";
import global_es from "../json/i18n/es/global.json";
import BannerLoop from "components/components/layout/BannerLoop/BannerLoop";
/*
i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});
*/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Title</title>
        <meta name="description" content="Description" />
      </head>
      <body>
        {/*<I18nextProvider i18n={i18next}>*/}
        <main>
          <BannerLoop />
          <Header />
          {children}
          <Footer />
        </main>
        {/*</I18nextProvider>*/}
      </body>
    </html>
  );
}
