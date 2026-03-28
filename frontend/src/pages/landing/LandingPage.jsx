import AsideBar from "@/components/AsideBar";
import React from "react";

export default function LandingPage() {
  return (
    <section className="max-w-7xl mx-auto p-4 md:px-8 lg:px-12">
      <div className="mx-auto w-full">
        <div className="flex flex-row gap-5">
          <div className="lg:w-1/5">
            <AsideBar />
          </div>
          <div className="w-full lg:w-4/5 border">
            <div className="text-center p-4">
              <h1 className="text-4xl font-bold">Welcome to Life Logs</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
