import { CTABanner } from "@/components/site/CTABanner";
import { FileText } from "lucide-react";

const posts = [
  {
    title: "Why React Remains the Top Choice for Web Development in 2026",
    cat: "Web Dev",
    date: "May 28, 2026",
    read: "5 min",
    excerpt: "React's ecosystem continues to evolve with Server Components and improved performance. Here's why it's still the best choice.",
  },
  {
    title: "AI-Powered Mobile Apps: What Businesses Need to Know",
    cat: "AI/ML",
    date: "May 20, 2026",
    read: "7 min",
    excerpt: "Integrating AI into mobile applications is no longer a luxury—it's becoming a competitive necessity.",
  },
  {
    title: "Cloud Cost Optimization: Practical Strategies for Startups",
    cat: "Cloud",
    date: "May 12, 2026",
    read: "6 min",
    excerpt: "Most startups overpay for cloud services. Learn proven strategies to cut your AWS/GCP bill by up to 40%.",
  },
  {
    title: "The Rise of Flutter: Building Cross-Platform Apps in 2026",
    cat: "Mobile",
    date: "Apr 30, 2026",
    read: "4 min",
    excerpt: "Flutter has matured significantly. We share our experience building production apps with Flutter 3.x.",
  },
  {
    title: "UI/UX Trends That Are Reshaping Digital Products",
    cat: "Design",
    date: "Apr 18, 2026",
    read: "5 min",
    excerpt: "From glassmorphism to spatial interfaces—here are the design trends shaping product experiences this year.",
  },
  {
    title: "How We Scaled a SaaS Platform from 1K to 100K Users",
    cat: "Case Study",
    date: "Apr 5, 2026",
    read: "8 min",
    excerpt: "A behind-the-scenes look at the architecture decisions and optimizations that made 100x growth possible.",
  },
];

export default function BlogPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <span className="inline-block rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-red-700 mb-4">
            Blog
          </span>
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Insights & <span className="text-red-700">Tech Stories</span>
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Expert articles, case studies, and technology insights from our team.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">

        <div className="w-full">
      <div className="h-64 w-full max-w-md mx-auto flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-gray-300 bg-gray-50">
        <FileText className="w-10 h-10 text-gray-400" />
        <p className="text-lg font-medium text-gray-600">No Blog Posts Yet</p>
        <p className="text-sm text-gray-400">New articles will appear here once published</p>
      </div>
   </div>
        {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {posts.map((p) => (
            <article
              key={p.title}
              className="group rounded-2xl border border-border bg-white overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div className="h-40 bg-red-50 flex items-center justify-center">
                <span className="text-6xl">📝</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="rounded-full bg-red-50 text-red-700 text-xs font-semibold px-3 py-1">
                    {p.cat}
                  </span>
                  <span className="text-xs text-muted-foreground">{p.date}</span>
                  <span className="text-xs text-muted-foreground">· {p.read} read</span>
                </div>
                <h3 className="font-bold group-hover:text-red-700 transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div> */}
      </section>

      <CTABanner />
    </div>
  );
}
