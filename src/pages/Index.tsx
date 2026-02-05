import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import RosePetals from "@/components/RosePetals";
import RoseBloom from "@/components/RoseBloom";
import Envelope from "@/components/Envelope";
import Letter from "@/components/Letter";
import BottomNav from "@/components/BottomNav";

function ArrowHint({ scrollProgress }: { scrollProgress: ReturnType<typeof useScroll>['scrollYProgress'] }) {
  const opacity = useTransform(scrollProgress, [0, 0.1], [1, 0]);

  return (
    <motion.div
      className="absolute bottom-24 flex flex-col items-center pointer-events-none"
      style={{ opacity }}
    >
      <p className="text-sm font-bold uppercase tracking-widest text-primary/60 mb-2">Scroll Down</p>
      <ChevronDown className="w-8 h-8 text-primary animate-bounce" />
    </motion.div>
  );
}

export default function Index() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });

  return (
    <main
      className="relative w-full"
      style={{ background: "linear-gradient(180deg, var(--color-background) 0%, var(--color-accent) 50%, hsl(350 40% 93%) 100%)" }}
    >
      {/* SCROLL SPACER - 400vh creates the scrollable distance */}
      <div style={{ height: "400vh" }}>
        {/* FIXED CONTAINER FOR ANIMATIONS */}
        <div className="fixed inset-0 w-full h-screen flex items-center justify-center overflow-hidden">

          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none -z-10"
            style={{
              backgroundImage: "radial-gradient(var(--color-primary) 1px, transparent 1px)",
              backgroundSize: "20px 20px"
            }}
          />

          {/* Animation Content */}
          <div className="relative w-full max-w-2xl mx-auto h-full flex items-center justify-center pb-20">
            <RosePetals scrollProgress={smoothProgress} />
            <RoseBloom scrollProgress={smoothProgress} />
            <Envelope scrollProgress={smoothProgress} />
            <Letter scrollProgress={smoothProgress} />
            <ArrowHint scrollProgress={scrollYProgress} />
          </div>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
