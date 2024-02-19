import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar.tsx";
import { FooterNav } from "../components/FooterNav.tsx";
import { FooterInfo } from "../components/FooterInfo.tsx";
import { FloatingSocialButton } from "../components/FloatingSocialButton.tsx";
import { Toaster } from "react-hot-toast";
import { ContactBar } from "../components/ContactBar.tsx";

export const Layout: React.FC = () => {
  const location = useLocation();
  return (
    <main className="grid h-full">
      <Toaster />
      <div className="bg-primary"><ContactBar/>
        {location.pathname !== "/" && <Navbar/>}</div>
      <div className="grid h-full">
        <Outlet />
      </div>
      <FloatingSocialButton />
      {location.pathname !== "/" && <div className="h-20"><FooterNav/></div>}
      <div className="mt-6 flex h-full flex-col place-self-center w-[80%]">
        <FooterInfo />
      </div>
    </main>
  );
};
