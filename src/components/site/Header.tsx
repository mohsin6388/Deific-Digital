
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logo from "../../assets/dd.webp";
import { servicesMenu } from "../../static/servicesData"; // <-- yahan se data aa raha hai

const nav = [
  { to: "/", label: "Home", hasDropdown: false },
  { to: "/about", label: "About", hasDropdown: false },
  { to: "/services/android-app-development", label: "Services", hasDropdown: true },
  { to: "/portfolio", label: "Work & Clients", hasDropdown: false },
  { to: "/careers", label: "Careers", hasDropdown: false },
  { to: "/blog", label: "Blog", hasDropdown: false },
  { to: "/contact", label: "Contact", hasDropdown: false },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span
            className="grid h-9 w-9 place-items-center rounded-lg text-white font-bold"
            style={{
              background: "var(--gradient-primary)",
              boxShadow: "var(--shadow-glow)",
            }}
          >
            <img src={logo} alt="" />
          </span>
          <span className="text-xl font-bold tracking-tight font-poppins">
            Deific <span className="text-[#EF0F0F]">Digital</span>
          </span>
        </Link>

        {/* ===== DESKTOP NAV ===== */}
        <nav className="hidden xl:flex items-center gap-7">
          {nav.map((n) =>
            n.hasDropdown ? (
              <div key={n.to} className="group relative">
                <Link
                  to={n.to}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-red-700 ${
                    location.pathname === n.to ? "text-red-700" : "text-gray-500"
                  }`}
                >
                  {n.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </Link>

                {/* Dropdown panel */}
                <div className="invisible fixed left-4 right-4 top-20 z-50 origin-top scale-y-90 rounded-b-3xl border border-border bg-white opacity-0 shadow-2xl transition-all duration-150 ease-out group-hover:visible group-hover:scale-y-100 group-hover:opacity-100 sm:left-6 sm:right-6 lg:left-8 lg:right-8">
                  <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-5 gap-8">
                      {servicesMenu.map((col: any) => (
                        <div key={col.title}>
                          <h4 className="mb-3 border-b border-border pb-2 text-base font-bold text-[#0b1f4d]">
                            {col.title}
                          </h4>
                          {col.items ? (
                            <ul className="space-y-2">
                              {col.items.map((item: any) => (
                                <li key={item.to}>
                                  <Link
                                    to={item.to}
                                    className="text-sm text-[#0b1f4d]/80 hover:text-red-700"
                                  >
                                    {item.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <Link to={col.to!}>
                              <p className="text-sm leading-relaxed text-[#0b1f4d]/80 hover:text-red-700">
                                {col.description}
                              </p>
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={n.to}
                to={n.to}
                className={`text-sm font-medium transition-colors hover:text-red-700 ${
                  location.pathname === n.to ? "text-red-700" : "text-gray-500"
                }`}
              >
                {n.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+918750200899"
            className="hidden lg:flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            <Phone className="h-4 w-4 text-red-700" />
            +91 87502 00899
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
            style={{
              background: "var(--gradient-primary)",
              boxShadow: "var(--shadow-glow)",
            }}
          >
            Get Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* ===== MOBILE NAV ===== */}
      {open && (
        <div className="xl:hidden border-t border-border bg-white max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="mx-auto max-w-7xl px-4 py-4 grid gap-1">
            {nav.map((n) =>
              n.hasDropdown ? (
                <div key={n.to} className="rounded-md">
                  <div className="flex items-center justify-between">
                    <Link
                      to={n.to}
                      onClick={closeMobileMenu}
                      className={`flex-1 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50 ${
                        location.pathname === n.to
                          ? "text-red-700"
                          : "text-foreground"
                      }`}
                    >
                      {n.label}
                    </Link>
                    <button
                      onClick={() => setMobileServicesOpen((o) => !o)}
                      aria-label="Toggle services submenu"
                      aria-expanded={mobileServicesOpen}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-gray-500 hover:bg-gray-50"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  {/* Accordion panel */}
                  <div
                    className={`grid overflow-hidden transition-all duration-200 ease-out ${
                      mobileServicesOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="ml-3 mt-1 mb-2 grid gap-3 border-l border-border pl-3">
                        {servicesMenu.map((col: any) => (
                          <div key={col.title}>
                            <p className="px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#0b1f4d]">
                              {col.title}
                            </p>
                            {col.items ? (
                              <ul className="grid gap-0.5">
                                {col.items.map((item: any) => (
                                  <li key={item.to}>
                                    <Link
                                      to={item.to}
                                      onClick={closeMobileMenu}
                                      className="block rounded-md px-3 py-1.5 text-sm text-[#0b1f4d]/80 hover:bg-gray-50 hover:text-red-700"
                                    >
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <Link
                                to={col.to!}
                                onClick={closeMobileMenu}
                                className="block rounded-md px-3 py-1.5 text-sm leading-relaxed text-[#0b1f4d]/80 hover:bg-gray-50 hover:text-red-700"
                              >
                                {col.description}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={closeMobileMenu}
                  className={`rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50 ${
                    location.pathname === n.to
                      ? "text-red-700"
                      : "text-foreground"
                  }`}
                >
                  {n.label}
                </Link>
              )
            )}

            <a
              href="tel:+918750200899"
              onClick={closeMobileMenu}
              className="mt-1 flex items-center gap-2 rounded-md px-3 py-2 text-sm font-semibold text-foreground hover:bg-gray-50"
            >
              <Phone className="h-4 w-4 text-red-700" />
              +91 87502 00899
            </a>

            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-red-700 px-4 py-2 text-sm font-semibold text-white"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


