import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import callgirl from "../../assets/3d-girl.png"

export function CTABanner() {
  return (
    // <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
    //   <div
    //     className="relative overflow-hidden rounded-3xl px-8 py-14 text-white"
    //     style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
    //   >
    //     <div
    //       className="absolute inset-0 opacity-20"
    //       style={{
    //         backgroundImage:
    //           "radial-gradient(circle at 20% 20%, white, transparent 50%), radial-gradient(circle at 80% 80%, white, transparent 50%)",
    //       }}
    //     />
    //     <div className="relative grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
    //       <div>
    //         <h3 className="text-3xl font-bold sm:text-4xl">Ready to start your digital transformation?</h3>
    //         <p className="mt-3 text-white/90 max-w-xl">
    //           Let's discuss your project. Get a free consultation from our experts and a no-obligation proposal.
    //         </p>
    //       </div>
    //       <div className="flex flex-wrap gap-3 lg:justify-end">
    //         <Link
    //           to="/contact"
    //           className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-red-700 shadow-lg transition-transform hover:scale-105"
    //         >
    //           Get Free Consultation <ArrowRight className="h-4 w-4" />
    //         </Link>
    //         <a
    //           href="tel:+918750200899"
    //           className="inline-flex items-center rounded-md border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
    //         >
    //           Call +91 87502 00899
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/*
        Outer wrapper — extra padding-top taaki girl ka top part
        banner ke upar visible ho sake
      */}
      <div className="relative pt-8">
        {/* ── Girl sticker — top-right, floats above banner ── */}
        <div
          className="absolute right-[12px] top-[-67px] z-20 select-none pointer-events-none "
          style={{ width: "100px", height: "110px" }}
          aria-hidden="true"
        >
          {/*
            Apni girl image yahan lagao:
            <img src="/images/girl-sticker.png" alt="" className="w-full h-full object-contain" />
 
            Abhi placeholder emoji use kiya hai:
          */}
          <span
            style={{
              fontSize: "80px",
              lineHeight: 1,
              display: "block",
              textAlign: "center",
            }}
          >
            <img src={callgirl} alt="" />
          </span>
        </div>

        {/*
          Banner background sirf right side se pehle tak —
          right mein gap chhoda hai girl ke liye (pr-28 = ~112px)
          Yahi "cutout" effect create karta hai screenshot jaisa
        */}
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-10 text-white pr-28"
          style={{
            background: "var(--gradient-primary)",
            boxShadow: "var(--shadow-glow)",
            /*
              Agar --gradient-primary defined nahi hai toh yeh fallback use hoga:
              background: "linear-gradient(120deg, #1a1040 0%, #2d1a5e 45%, #c0390a 100%)"
            */
          }}
        >
          {/* Subtle radial overlay */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, white, transparent 45%), radial-gradient(circle at 60% 80%, #ff6b00, transparent 50%)",
            }}
          />

          {/* Content grid */}
          <div className="relative grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <h3 className="text-3xl font-bold sm:text-4xl">
                Ready to start your digital transformation?
              </h3>
              <p className="mt-3 text-white/90 max-w-xl">
                Let's discuss your project. Get a free consultation from our
                experts and a no-obligation proposal.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-red-700 shadow-lg transition-transform hover:scale-105"
              >
                Get Free Consultation <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+918750200899"
                className="inline-flex items-center rounded-md border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Call +91 87502 00899
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
/*
  ── REAL IMAGE USE KARNE KE LIYE ─────────────────────────────
 
  1. Apni girl PNG (transparent background wali) `/public/images/girl-sticker.png` mein rakho
 
  2. Emoji span ko yeh se replace karo:
     <img
       src="/images/girl-sticker.png"
       alt=""
       className="w-full h-full object-contain drop-shadow-lg"
     />
 
  ── SIRF "Made with Love" BANNER CHAHIYE? ───────────────────
 
  Agar tumhara banner chota (single line) chahiye jaise screenshot mein,
  toh niche wala simplified version use karo:
 
  export function MadeWithLoveBanner() {
    return (
      <div className="mx-auto max-w-2xl px-4 py-6 relative pt-10">
        <div className="absolute right-0 top-0 z-20 w-20 h-20 pointer-events-none" aria-hidden="true">
          <img src="/images/girl-sticker.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div
          className="rounded-2xl py-4 px-8 text-white text-center font-medium text-sm pr-24"
          style={{ background: "linear-gradient(120deg, #1a1040 0%, #2d1a5e 45%, #c0390a 100%)" }}
        >
          Made with Love in 🇮🇳
        </div>
      </div>
    );
  }
*/
    
