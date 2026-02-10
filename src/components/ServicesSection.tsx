import { useRef } from "react";
import { motion } from "framer-motion";
import { Brain, Cog, Code, Smartphone, Cloud, Shield } from "lucide-react";
import { ParticleCard, GlobalSpotlight } from "@/components/MagicBento";
import ScrollFloat from "@/components/ScrollFloat";
import { useIsMobile } from "@/hooks/use-mobile";

const services = [
  {
    icon: Brain,
    title: "AI Solutions & Integration",
    description:
      "Harness the power of machine learning and AI to automate decisions, predict trends, and unlock insights from your data.",
  },
  {
    icon: Cog,
    title: "Business Process Automation",
    description:
      "Streamline operations with intelligent workflows that eliminate repetitive tasks and boost productivity across your organization.",
  },
  {
    icon: Code,
    title: "Custom Web Applications",
    description:
      "Bespoke web solutions built with cutting-edge technologies, designed to scale with your business needs.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences on any device.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description:
      "Scalable, secure cloud infrastructure designed for performance, reliability, and cost efficiency.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description:
      "Comprehensive security frameworks that protect your digital assets and ensure regulatory compliance.",
  },
];

const ServicesSection = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <ScrollFloat
            containerClassName="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6 text-center"
            textClassName=""
          >
            Solutions That Drive Innovation
          </ScrollFloat>
          <p className="text-lg text-muted-foreground">
            From AI-powered automation to custom development, we deliver
            comprehensive digital solutions that transform how you do business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className="bento-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <GlobalSpotlight
            gridRef={gridRef}
            disableAnimations={isMobile}
            enabled
            spotlightRadius={400}
            glowColor="132, 0, 255"
          />
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <ParticleCard
                className="glass-card rounded-2xl p-8 h-full transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.3)]"
                disableAnimations={isMobile}
                particleCount={12}
                glowColor="132, 0, 255"
                enableTilt={false}
                clickEffect
                enableMagnetism={false}
                enableBorderGlow
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold font-display mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </ParticleCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
