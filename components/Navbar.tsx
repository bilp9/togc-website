"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[10px] font-semibold tracking-[0.08em] text-black">
            TOGC
          </span>
          <span>
            <span className="block text-xs font-semibold tracking-[0.22em] text-gray-400 uppercase">
              Church Home
            </span>
            <span className="block font-serif text-3xl leading-none text-white">
              Tabernacle of Grace Church
            </span>
          </span>
        </Link>

        <div className="relative flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-white">
          <Link href="/services" className="hover:text-gray-300">
            Services
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              type="button"
              aria-expanded={open}
              aria-haspopup="true"
              onClick={() => setOpen((current) => !current)}
              className="inline-flex items-center gap-2 rounded border border-white/15 px-3 py-2 hover:text-gray-300"
            >
              Ministries
              <span
                className={`text-xs transition-transform ${open ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>

            {open && (
              <div className="absolute left-0 top-full z-20 min-w-[260px] pt-2">
                <div className="rounded-xl bg-white p-3 text-black shadow-xl ring-1 ring-black/10">
                <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                  Ministries
                </p>
                <div className="flex flex-col gap-1">
                  <Link
                    href="/ministries/mens"
                    className="rounded px-3 py-2 hover:bg-gray-100 hover:text-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    Men
                  </Link>
                  <Link
                    href="/ministries/women"
                    className="rounded px-3 py-2 hover:bg-gray-100 hover:text-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    Women
                  </Link>
                  <Link
                    href="/ministries/youth"
                    className="rounded px-3 py-2 hover:bg-gray-100 hover:text-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    Youth
                  </Link>
                  <Link
                    href="/ministries/worship"
                    className="rounded px-3 py-2 hover:bg-gray-100 hover:text-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    Worship
                  </Link>
                  <Link
                    href="/ministries/other"
                    className="rounded px-3 py-2 hover:bg-gray-100 hover:text-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    Other
                  </Link>
                </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>

          <Link
            href="/donate"
            className="inline-flex items-center rounded bg-yellow-500 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-400"
          >
            Give
          </Link>
        </div>
      </div>
    </nav>
  );
}
