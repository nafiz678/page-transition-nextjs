import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function page() {
  return (
    <section>
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 gradient-text">About Me</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-foreground/70 leading-relaxed mb-6">
              Founded in 2024, NaiqRy emerged from a simple vision: to transform how businesses connect with their
              audiences through innovative digital solutions. We believe that great design and technology should work
              seamlessly together.
            </p>
            <p className="text-xl text-foreground/70 leading-relaxed mb-6">
              Our team of passionate designers, developers, and strategists work collaboratively to bring your ideas to
              life. We&apos;re committed to delivering excellence in every project, no matter the scale.
            </p>
            <p className="text-xl text-foreground/70 leading-relaxed">
              Today, we&apos;ve partnered with over 50 brands worldwide, helping them achieve their digital goals and exceed
              expectations.
            </p>
          </div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
          <p className="text-xl text-foreground/60">What drives us every day</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-card border border-border rounded-xl card-hover">
            <h3 className="text-2xl font-bold mb-4">Innovation</h3>
            <p className="text-foreground/70 leading-relaxed">
              We stay ahead of trends and constantly explore new technologies to deliver cutting-edge solutions.
            </p>
          </div>
          <div className="p-8 bg-card border border-border rounded-xl card-hover">
            <h3 className="text-2xl font-bold mb-4">Excellence</h3>
            <p className="text-foreground/70 leading-relaxed">
              Quality is non-negotiable. We obsess over details and deliver work we&apos;re proud of.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200 group"
          >
            Explore Our Services
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
