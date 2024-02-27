import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar.tsx";
import { FooterNav } from "../components/FooterNav.tsx";
import { FooterInfo } from "../components/FooterInfo.tsx";
import { FloatingSocialButton } from "../components/FloatingSocialButton.tsx";
import { Toaster } from "react-hot-toast";

export const Layout: React.FC = () => {
  const location = useLocation();
  return (
    <main className="flex h-full flex-1 flex-col justify-between">
      <Toaster />
      <div className="h-fit bg-primary">
        {location.pathname !== "/" && <Navbar />}
      </div>
      <div className="flex h-full flex-1 flex-col">
        <Outlet />
      </div>
      <FloatingSocialButton />
      {location.pathname !== "/" && (
        <div className="h-20">
          <FooterNav />
        </div>
      )}
      <div className="mt-6 flex h-full flex-col place-self-center w-[80%]">
        {location.pathname !== "/" && <FooterInfo />}
      </div>
    </main>
  );
};
