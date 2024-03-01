import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar.tsx";
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
      {location.pathname === "/" ? (
        <div className="flex h-full flex-1 flex-col">
          <Outlet />
        </div>
      ) : (
        <div className="flex h-full w-full flex-1 flex-col self-center px-6 lg:max-w-[75%] lg:px-0">
          <Outlet />
        </div>
      )}
      <FloatingSocialButton />
      <div className="mt-6 flex h-full w-full flex-col place-self-center">
        <FooterInfo />
      </div>
    </main>
  );
};
