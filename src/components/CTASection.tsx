import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ParticleCard, GlobalSpotlight } from "@/components/MagicBento";
import ScrollFloat from "@/components/ScrollFloat";
import { useIsMobile } from "@/hooks/use-mobile";

const CTASection = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  return (
    <section id="book-schedule" className="relative py-24 sm:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          ref={gridRef}
          className="bento-section relative"
        >
          <GlobalSpotlight
            gridRef={gridRef}
            disableAnimations={isMobile}
            enabled
            spotlightRadius={400}
            glowColor="132, 0, 255"
          />
          {/* CTA Card */}
          <ParticleCard
            className="relative glass-card rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden"
            disableAnimations={isMobile}
            particleCount={12}
            glowColor="132, 0, 255"
            enableTilt={false}
            clickEffect
            enableMagnetism={false}
            enableBorderGlow
          >
            {/* Background gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <ScrollFloat
                containerClassName="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-6 text-center"
                textClassName=""
              >
                Ready to Revolutionize Your Business?
              </ScrollFloat>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Let's discuss how our expertise in AI, automation, and custom development
                can help you achieve your goals. Schedule a free consultation today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://calendly.com/tonyfreour/15-minute-meeting" target="_blank" rel="noopener noreferrer">
                  <Button variant="heroOutline" size="xl" className="group">
                    <MessageCircle className="w-5 h-5" />
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>

              {/* Trust indicators */}
              <p className="mt-8 text-sm text-muted-foreground">
                ✓ Free 30-min consultation • ✓ No commitment required • ✓ Response within 24hrs
              </p>
            </div>
          </ParticleCard>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
