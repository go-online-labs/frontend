import { TrendingUp, Code, Search, Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description:
        "Drive targeted traffic and maximize ROI with our data-driven marketing campaigns across all digital channels.",
      color: "service-marketing",
      features: [
        "Google Ads Management",
        "Social Media Advertising",
        "Conversion Optimization",
      ],
    },
    {
      icon: Code,
      title: "Website Development",
      description:
        "Create stunning, responsive websites that convert visitors into customers with our modern development approach.",
      color: "service-development",
      features: [
        "Custom Web Design",
        "E-commerce Solutions",
        "Mobile Optimization",
      ],
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Improve your search rankings and organic visibility with our comprehensive SEO strategies and techniques.",
      color: "service-seo",
      features: ["Keyword Research", "Technical SEO", "Content Strategy"],
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions to accelerate your business
            growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-lg transition-shadow border border-border"
            >
              <div
                className={`w-16 h-16 bg-${service.color} rounded-2xl flex items-center justify-center mb-6`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                {service.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
