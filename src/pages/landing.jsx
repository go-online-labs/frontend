import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import "./landing-page.css";

export default function LandingPage() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">DevGrow</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#portfolio" className="hover:text-blue-600">Work</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
        <Button>Get a Quote</Button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-br from-blue-50 to-white">
        <motion.h2 className="text-4xl font-bold mb-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>Turn Ideas Into Impact</motion.h2>
        <p className="text-lg max-w-xl mx-auto mb-8">
          Web & App solutions crafted by senior developers with 8–10 years of real-world experience.
        </p>
        <div className="flex justify-center gap-4">
          <Button>Start Your Project</Button>
          <Button variant="outline">View Our Work</Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-12">Senior Developers. Serious Results.</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: "8–10 Years Avg. Experience", icon: "✅" },
            { title: "Launch-Ready Products", icon: "🚀" },
            { title: "Marketing-Driven Builds", icon: "📈" }
          ].map((item, idx) => (
            <Card key={idx}>
              <CardContent className="py-6">
                <div className="text-4xl mb-2">{item.icon}</div>
                <h4 className="font-semibold text-lg">{item.title}</h4>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-semibold text-center mb-12">What We Offer</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Web & App Development", desc: "React, Next.js, Flutter, Node.js, Go, Firebase, and more." },
              { title: "Marketing Solutions", desc: "SEO, conversion funnels, and performance optimization." }
            ].map((item, idx) => (
              <Card key={idx}>
                <CardContent className="py-6">
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-700 mb-4">{item.desc}</p>
                  <Button variant="link" className="text-blue-600">Let’s Build It Right <ArrowRight className="ml-1 w-4 h-4 inline" /></Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 text-center bg-blue-600 text-white">
        <h3 className="text-3xl font-bold mb-4">Ready to Launch Smarter?</h3>
        <p className="max-w-xl mx-auto mb-6">Get a proposal within 24 hours — built by a team with 80+ years of combined dev experience.</p>
        <Button variant="outline" className="text-blue-600 bg-white hover:bg-blue-100">Book Free Strategy Call</Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-white mb-2">DevGrow</h4>
            <p>Crafting high-performance digital solutions since 2015.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#portfolio" className="hover:underline">Work</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Stay in Touch</h4>
            <input type="email" placeholder="Your email" className="p-2 w-full rounded mb-2" />
            <Button className="w-full">Subscribe</Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
