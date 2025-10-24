import { Star } from "lucide-react"

export default function page() {
  const projects = [
    {
      title: "Project Alpha",
      description: "A sleek e-commerce platform with modern UI and seamless checkout experience.",
      category: "E-commerce",
    },
    {
      title: "Project Beta",
      description: "A productivity-focused mobile app with intuitive interface and smart notifications.",
      category: "Mobile App",
    },
  ]

  const testimonials = [
    {
      name: "Sophia Martinez",
      role: "Marketing Director",
      feedback: "NaiqRy transformed our online presence! The design and functionality exceeded expectations.",
    },
    {
      name: "James Lee",
      role: "Startup Founder",
      feedback: "Their attention to detail and creativity made our project a success. Highly recommended!",
    },
  ]

  return (
    <main>
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Our Work</h1>
          <p className="text-xl text-foreground/70 leading-relaxed">
            Explore our portfolio of innovative projects that showcase our expertise and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl overflow-hidden card-hover fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-64 bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all">
                <div className="text-center">
                  <div className="w-16 h-16 bg-linear-to-br from-primary to-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Star size={32} className="text-primary-foreground" />
                  </div>
                  <p className="text-foreground/40">{project.category}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/60 mb-4">{project.description}</p>
                <button className="text-primary font-semibold hover:gap-2 transition-all inline-flex items-center gap-1">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-foreground/60">Real feedback from real clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 card-hover fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">&quot;{testimonial.feedback}&quot;</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-primary text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
