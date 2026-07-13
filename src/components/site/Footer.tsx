import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import logo from "../../assets/dd.webp"

export function Footer() {

  const socialLinks = [
          { icon: Facebook, href: "https://www.facebook.com/deificdigital/", label: "Facebook" },
          // { icon: Twitter, href: "#", label: "Twitter" },
          { icon: Linkedin, href: "https://www.linkedin.com/company/deificdigital/posts/?feedView=all", label: "LinkedIn" },
          { icon: Instagram, href: "https://www.instagram.com/deificdigital?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
          
      ];
  return (
    <footer className="border-t border-border bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-6 justify-between">

          <div>
            <div className="flex items-center gap-2">
              <span
                className="grid h-9 w-9 place-items-center rounded-lg text-white font-bold"
                // style={{ background: "var(--gradient-primary)" }}
              >
                <img src={logo} alt="" />
              </span>
              <span className="text-lg font-bold text-white"> <span className="text-[#EF0F0F]">Deific</span> Digital</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Transforming Ideas Into Powerful Digital Experiences. Trusted by
              550+ clients worldwide.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((Icon, i) => (
                <a
                  key={i}
                  href={Icon.href}
                  className="grid h-9 w-9 place-items-center rounded-md border border-border bg-white text-foreground transition-colors hover:bg-red-700 hover:text-white hover:border-red-700"
                >
                  <Icon.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:text-center">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["/about", "About Us"],
                ["/services/android-app-development", "Services"],
                ["/portfolio", "Work & Clients"],
                // ["/team", "Our Team"],
                ["/careers", "Careers"],
                ["/blog", "Blog"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-muted-foreground hover:text-red-700"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Web Development",
                "Mobile Apps",
                "UI/UX Design",
                "AI Solutions",
                "Cloud & DevOps",
                "Digital Marketing",
              ].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-muted-foreground hover:text-red-700">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <h4 className="font-semibold text-foreground">Get in Touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-red-700 shrink-0" />
                <span>+91 87502 00899</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-red-700 shrink-0" />
                <a
                  href="mailto:deific.solution@hotmail.com"
                  className="hover:text-red-700 break-all"
                >
                  deific.solution@hotmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-red-700 shrink-0" />
                <span>
                  8th Floor A1/4 UPSIDA Building, Lakhanpur, Khyora, Kanpur,
                  Uttar Pradesh 208024, India
                </span>
              </li>
            </ul>

            <div className="mt-5 flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-md border border-input bg-white px-3 py-2 text-sm outline-none focus:border-red-700"
              />
              <button className="rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Deific Digital. All Rights Reserved.</p>
          <p>Crafted with passion in Kanpur, India.</p>
        </div>
      </div>
    </footer>
  );
}
