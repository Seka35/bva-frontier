import { useRef } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Target, TrendingUp, Users } from "lucide-react";
import { ParticleCard, GlobalSpotlight } from "@/components/MagicBento";
import ScrollFloat from "@/components/ScrollFloat";
import { useIsMobile } from "@/hooks/use-mobile";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description: "Agile methodologies ensure rapid development without compromising quality.",
  },
  {
    icon: Target,
    title: "Precision Engineering",
    description: "Every solution is meticulously crafted to meet your exact specifications.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Architecture",
    description: "Built to grow with your business, from startup to enterprise scale.",
  },
  {
    icon: Users,
    title: "Dedicated Partnership",
    description: "We're not just vendors—we're long-term partners invested in your success.",
  },
];

const ValueProposition = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-96 bg-primary/5 blur-[100px] rounded-full" />
      
      <div className="container px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ScrollFloat
              containerClassName="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6 text-left"
              textClassName=""
            >
              Why Businesses Choose BVA
            </ScrollFloat>
            <p className="text-lg text-muted-foreground mb-8">
              We combine deep technical expertise with a genuine understanding of 
              business challenges. Our team doesn't just write code—we architect 
              solutions that drive real business outcomes.
            </p>

            <ul className="space-y-4">
              {[
                "Cutting-edge technology stack",
                "Transparent communication & process",
                "Proven track record of success",
                "Post-launch support & optimization",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right content - Feature cards */}
          <div
            ref={gridRef}
            className="bento-section grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <GlobalSpotlight
              gridRef={gridRef}
              disableAnimations={isMobile}
              enabled
              spotlightRadius={400}
              glowColor="132, 0, 255"
            />
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ParticleCard
                  className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                  disableAnimations={isMobile}
                  particleCount={12}
                  glowColor="132, 0, 255"
                  enableTilt={false}
                  clickEffect
                  enableMagnetism={false}
                  enableBorderGlow
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold font-display mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </ParticleCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
