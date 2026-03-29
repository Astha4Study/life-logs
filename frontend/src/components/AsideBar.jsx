import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Home, BookOpen, Image, Compass } from "lucide-react";
import { Separator } from "./ui/separator";

import TranslationButton from "./TranslationButton";

const navItems = [
  { label: "Beranda", to: "/", icon: Home, end: true },
  { label: "Catatan", to: "/catatan", icon: BookOpen },
  { label: "Momen", to: "/momen", icon: Image },
  { label: "Rencana", to: "/rencana", icon: Compass },
];

function AsideBar() {
  return (
    <aside className="sticky top-6 w-full font-[DM_Sans,sans-serif]">
      <div className="space-y-4 px-1 py-2">
        {/* USER PROFILE */}
        <div className="flex flex-col items-center text-center">
          {/* AVATAR */}
          <div className="w-20 h-20 rounded-full bg-linear-to-br from-pink-200 to-pink-400 flex items-center justify-center text-sm font-semibold text-pink-800 ">
            A
          </div>
          {/* NAME */}
          <div className="flex mt-3 gap-1 items-center">
            <p className="text-lg font-semibold text-neutral-800">Aysha</p>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              width="18"
              height="18"
            >
              <g
                style={{
                  stroke: "none",
                  strokeWidth: 0,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 10,
                  fill: "none",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="translate(1.4066 1.4066) scale(2.81 2.81)"
              >
                <polygon
                  points="45,6.18 57.06,0 64.41,11.38 77.94,12.06 78.62,25.59 90,32.94 83.82,45 90,57.06 78.62,64.41 77.94,77.94 64.41,78.62 57.06,90 45,83.82 32.94,90 25.59,78.62 12.06,77.94 11.38,64.41 0,57.06 6.18,45 0,32.94 11.38,25.59 12.06,12.06 25.59,11.38 32.94,0"
                  style={{
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "rgb(0,150,241)",
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                />
                <polygon
                  points="40.16,58.47 26.24,45.08 29.7,41.48 40.15,51.52 61.22,31.08 64.7,34.67"
                  style={{
                    stroke: "none",
                    strokeWidth: 1,
                    strokeDasharray: "none",
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    fill: "rgb(255,255,255)",
                    fillRule: "nonzero",
                    opacity: 1,
                  }}
                />
              </g>
            </svg>
          </div>
          <div className="mt-2">
            <TranslationButton />
          </div>
        </div>

        <Separator />

        {/* Nav */}
        <nav className="space-y-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  [
                    "group flex items-center gap-3 rounded-xl px-2.5 py-2 transition-all duration-200",
                    isActive ? "bg-pink-50" : "hover:bg-zinc-50",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    {/* ICON WRAPPER */}
                    <div
                      className={[
                        "w-7.5 h-7.5 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200",
                        isActive
                          ? "bg-pink-100"
                          : "bg-zinc-100 group-hover:bg-zinc-200",
                      ].join(" ")}
                    >
                      <Icon
                        size={14}
                        className={
                          isActive
                            ? "text-pink-600"
                            : "text-zinc-400 group-hover:text-zinc-600"
                        }
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* LABEL */}
                    <span
                      className={[
                        "text-[13px] font-medium transition-colors duration-200",
                        isActive
                          ? "text-pink-700"
                          : "text-zinc-500 group-hover:text-zinc-800",
                      ].join(" ")}
                    >
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="h-px bg-zinc-100 mx-2" />

        {/* FOKUS CARD */}
        <div className="relative overflow-hidden rounded-xl border border-pink-100 p-3.5">
          {/* Decorative circle */}
          <div className="absolute -right-2 -bottom-2 w-12 h-12 rounded-full bg-pink-100 opacity-50 pointer-events-none" />

          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-300 inline-block" />
            <p className="text-[10px] font-semibold uppercase tracking-widest text-pink-500">
              Fokus
            </p>
          </div>
          <p className="text-[12.5px] italic font-serif leading-relaxed text-zinc-500">
            Menjaga hal-hal kecil tetap berarti, tanpa perlu dibuat berlebihan.
          </p>
        </div>
      </div>
    </aside>
  );
}

export default memo(AsideBar);
