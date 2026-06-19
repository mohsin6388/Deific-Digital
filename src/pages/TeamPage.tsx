import { CTABanner } from "@/components/site/CTABanner";
import { Linkedin, Twitter } from "lucide-react";
import team1 from "@/assets/team-mohit.jpeg";
import team2 from "@/assets/team-2.jpeg";
import team3 from "@/assets/team-3.jpeg";
import team4 from "@/assets/team-4.jpeg";
import team5 from "@/assets/team-5.jpeg";
import team6 from "@/assets/team-6.jpeg";

const team = [
  { name: "Mohit Sharma", role: "CEO & Founder", dept: "Leadership", photo: team1 },
  { name: "Arjun Verma", role: "CTO", dept: "Technology", photo: team2 },
  { name: "Rahul Gupta", role: "Senior Developer", dept: "Engineering", photo: team3 },
  { name: "Vikram Patel", role: "Backend Architect", dept: "Engineering", photo: team4 },
  { name: "Karan Mehta", role: "Project Manager", dept: "Management", photo: team5 },
  { name: "Ankit Singh", role: "UI/UX Lead", dept: "Design", photo: team6 },
];

export default function TeamPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-red-50/30 py-20 text-center">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-100 rounded-full blur-3xl opacity-40" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4">
          <span className="inline-block rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-red-700 mb-4">
            Our Team
          </span>
          <h1 className="text-4xl font-extrabold sm:text-5xl text-gray-900">
            Meet The <span className="text-red-600">Experts</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            30+ passionate professionals dedicated to building exceptional digital products.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div
              key={m.name}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative overflow-hidden h-72">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Social icons on hover */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {[Linkedin, Twitter].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="h-9 w-9 flex items-center justify-center rounded-full bg-white text-gray-800 hover:bg-red-600 hover:text-white transition-colors shadow-md"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <span className="inline-block rounded-full bg-red-50 text-red-700 text-xs font-semibold px-3 py-1 mb-2">
                  {m.dept}
                </span>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-red-600 transition-colors">
                  {m.name}
                </h3>
                <p className="text-sm text-gray-500 mt-0.5">{m.role}</p>
              </div>

              {/* Red accent bottom bar */}
              <div className="h-0.5 bg-gradient-to-r from-red-600 to-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
