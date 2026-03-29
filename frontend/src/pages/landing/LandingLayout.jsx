import AsideBar from "@/components/AsideBar";
import React from "react";
import { Outlet } from "react-router-dom";

export default function LandingLayout() {
  return (
    <section className="min-h-screen  px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <AsideBar />
          </div>

          <main className="space-y-5 lg:col-span-4">
            <Outlet />
          </main>
        </div>
      </div>
    </section>
  );
}
