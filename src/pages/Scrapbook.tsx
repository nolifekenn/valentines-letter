import { motion } from "framer-motion";
import { Construction, Image, Video, FileText, Heart } from "lucide-react";
import BottomNav from "@/components/BottomNav";

export default function Scrapbook() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12 pb-24"
      style={{ background: "linear-gradient(180deg, var(--color-background) 0%, var(--color-accent) 50%, hsl(350 40% 93%) 100%)" }}
    >
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="relative z-10 text-center">
        {/* Construction icon */}
        <div className="mb-8 flex justify-center">
          <motion.div
            animate={{
              rotate: [0, -10, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          >
            <Construction className="w-16 h-16 md:w-20 md:h-20 text-primary" />
          </motion.div>
        </div>

        {/* Title */}
        <h1
          className="text-3xl font-bold mb-4 text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Under Construction
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg max-w-xs mx-auto leading-relaxed mb-8 text-secondary"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Our scrapbook is being prepared with love.
          Check back soon for our cherished memories! 💕
        </p>

        {/* Decorative hearts */}
        <div className="flex justify-center gap-4 mt-6">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-6 h-6 text-primary" />
            </motion.div>
          ))}
        </div>

        {/* Coming soon features */}
        <div
          className="mt-12 p-6 rounded-xl backdrop-blur-sm bg-background/50 border border-border"
        >
          <h3
            className="text-sm font-bold uppercase tracking-widest mb-4 text-secondary"
          >
            Coming Soon
          </h3>
          <ul className="space-y-3 text-left text-foreground">
            <li className="flex items-center gap-3">
              <Image className="w-5 h-5 text-primary" />
              <span className="text-sm">Photo memories</span>
            </li>
            <li className="flex items-center gap-3">
              <Video className="w-5 h-5 text-primary" />
              <span className="text-sm">Video clips</span>
            </li>
            <li className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-primary" />
              <span className="text-sm">Romantic captions</span>
            </li>
          </ul>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
