import Link from "next/link"
import { ArrowRight, Code, Palette } from "lucide-react"

export default function page() {
  const services = [
    {
      icon: Palette,
      title: "Web Design",
      description: "Beautiful, modern designs that captivate and convert.",
    },
    {
      icon: Code,
      title: "Development",
      description: "Robust, scalable solutions built with cutting-edge technology.",
    },
  ]

  return (
    <main>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Our Services</h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            We offer comprehensive digital solutions tailored to your unique needs and goals.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-xl card-hover fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-6">{service.description}</p>
                <button className="text-primary font-semibold hover:gap-2 transition-all inline-flex items-center gap-1">
                  Learn More →
                </button>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-8 py-4 text-primary-foreground rounded-lg font-semibold hover:shadow-xl transition-all duration-200 group"
          >
            See Our Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  )
}
