"use client"

import Link from "next/link"
import { ArrowRight, Zap, Smartphone } from "lucide-react"

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance for seamless user experiences.",
    },
    {
      icon: Smartphone,
      title: "Fully Responsive",
      description: "Beautiful on every device, every time.",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
            Transforming Ideas into Digital Experiences
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
            We design and build modern, innovative solutions that elevate brands and engage audiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/work"
              className="px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              Discover Our Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-primary rounded-lg font-semibold hover:bg-primary/5 transition-all duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose NaiqRy</h2>
          <p className="text-xl max-w-2xl mx-auto">
            We combine creativity with technology to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-xl card-hover fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12  rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
