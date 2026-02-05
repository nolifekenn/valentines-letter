import { motion, useTransform, MotionValue } from "framer-motion";

interface RoseBloomProps {
    scrollProgress: MotionValue<number>;
}

function RoseIllustration() {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Center of the rose */}
            <div 
                className="absolute w-14 h-14 md:w-16 md:h-16 rounded-full rose-center z-20"
                style={{ top: '48%', left: '50%', transform: 'translate(-50%, 45%)' }}
            />

            {/* Inner petals */}
            {[...Array(5)].map((_, i) => (
                <div
                    key={`inner-${i}`}
                    className="absolute w-14 h-18 md:w-16 md:h-20 rounded-[50%_0_50%_50%]"
                    style={{
                        background: `linear-gradient(135deg, hsl(345 65% 62%) 0%, hsl(345 80% 46%) 50%, hsl(345 85% 36%) 100%)`,
                        transform: `rotate(${i * 72}deg) translateY(-14px)`,
                        transformOrigin: "center bottom",
                        boxShadow: "inset 0 -4px 8px rgba(0,0,0,0.1)",
                    }}
                />
            ))}

            {/* Outer petals */}
            {[...Array(7)].map((_, i) => (
                <div
                    key={`outer-${i}`}
                    className="absolute w-18 h-22 md:w-20 md:h-24 rounded-[50%_0_50%_50%]"
                    style={{
                        background: `linear-gradient(135deg, hsl(345 60% 68%) 0%, hsl(345 65% 62%) 50%, hsl(345 80% 46%) 100%)`,
                        transform: `rotate(${i * 51.4 + 25}deg) translateY(-22px)`,
                        transformOrigin: "center bottom",
                        boxShadow: "inset 0 -4px 8px rgba(0,0,0,0.1)",
                        opacity: 0.9,
                    }}
                />
            ))}

            {/* Outermost petals */}
            {[...Array(8)].map((_, i) => (
                <div
                    key={`outer2-${i}`}
                    className="absolute w-22 h-28 md:w-24 md:h-30 rounded-[50%_0_50%_50%]"
                    style={{
                        background: `linear-gradient(135deg, hsl(345 55% 75%) 0%, hsl(345 60% 68%) 50%, hsl(345 65% 62%) 100%)`,
                        transform: `rotate(${i * 45 + 10}deg) translateY(-30px)`,
                        transformOrigin: "center bottom",
                        boxShadow: "inset 0 -4px 8px rgba(0,0,0,0.08)",
                        opacity: 0.8,
                    }}
                />
            ))}
        </div>
    );
}

export default function RoseBloom({ scrollProgress }: RoseBloomProps) {
    const opacity = useTransform(
        scrollProgress,
        [0.18, 0.28, 0.45, 0.55],
        [0, 1, 1, 0]
    );

    const scale = useTransform(
        scrollProgress,
        [0.18, 0.35, 0.45],
        [0.2, 1.1, 1]
    );

    const rotate = useTransform(
        scrollProgress,
        [0.18, 0.40],
        [-15, 0]
    );

    const y = useTransform(
        scrollProgress,
        [0.35, 0.50],
        [0, -120]
    );

    return (
        <motion.div
            className="absolute z-10 flex items-center justify-center"
            style={{ opacity, scale, rotate, y }}
        >
            <div className="relative w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse-glow" />
                <div className="relative w-full h-full">
                    <RoseIllustration />
                </div>
            </div>
        </motion.div>
    );
}
