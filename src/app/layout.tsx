"use client";

import "./styles/globals.css";

import { Footer } from "./components/Footer";
import { Navbar } from "./components/NavBar";
import { store } from "./state/store";
import { Provider } from "react-redux";
import { usePathname } from "next/navigation";
import { DexterToaster } from "./components/DexterToaster";
import { PromoBanner, PromoBannerProps } from "components/PromoBanner";

// Configuration for promo banner
// Once both images and a targetUrl are defined the banner will automatically show
const promoBannerConfig: PromoBannerProps = {
  imageUrl: "/promo-banners/validator-node-staking/desktop-600x80.svg",
  imageUrlMobile: "/promo-banners/validator-node-staking/mobile-600x200.svg",
  redirectUrl:
    "https://dashboard.radixdlt.com/network-staking/validator_rdx1s0sr7xsr286jwffkkcwz8ffnkjlhc7h594xk5gvamtr8xqxr23a99a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  // TODO: after MVP remove "use client", fix all as many Components as possible
  // to be server components for better SSG and SEO
  // and use metadata https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#step-2-creating-a-root-layout

  return (
    <html lang="en" data-theme="dark">
      <head>
        <title>DeXter</title>
      </head>
      <Provider store={store}>
        <body>
          <DexterToaster toastPosition="top-center" />
          <div
            data-path={path}
            className="h-screen prose md:prose-lg lg:prose-xl max-w-none flex flex-col"
          >
            <div className="flex flex-col justify-between min-h-[100vh]">
              <Navbar />
              <PromoBanner {...promoBannerConfig} />
              {children}
              <Footer />
            </div>
          </div>
        </body>
      </Provider>
    </html>
  );
}
