import { motion, useTransform, MotionValue } from "framer-motion";
import { useMemo } from "react";

interface RosePetalsProps {
    scrollProgress: MotionValue<number>;
}

interface PetalData {
    id: number;
    initialX: number;
    initialY: number;
    initialRotation: number;
    scale: number;
    delay: number;
    hue: number;
}

function generatePetalData(count: number): PetalData[] {
    return Array.from({ length: count }, (_, i) => ({
        id: i,
        initialX: (Math.random() - 0.5) * 600,
        initialY: (Math.random() - 0.5) * 600,
        initialRotation: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.5,
        delay: Math.random() * 0.15,
        hue: 340 + Math.random() * 20,
    }));
}

function Petal({ petal, scrollProgress }: { petal: PetalData; scrollProgress: MotionValue<number> }) {
    const x = useTransform(
        scrollProgress,
        [0 + petal.delay * 0.1, 0.22 + petal.delay * 0.03],
        [petal.initialX, 0]
    );

    const y = useTransform(
        scrollProgress,
        [0 + petal.delay * 0.1, 0.22 + petal.delay * 0.03],
        [petal.initialY, 0]
    );

    const rotation = useTransform(
        scrollProgress,
        [0, 0.22],
        [petal.initialRotation, petal.initialRotation + 180]
    );

    const scale = useTransform(
        scrollProgress,
        [0, 0.15, 0.25],
        [petal.scale * 0.8, petal.scale * 1.2, petal.scale * 0.5]
    );

    return (
        <motion.div className="absolute" style={{ x, y }}>
            <motion.div
                className="w-10 h-14 md:w-12 md:h-16 rounded-[50%_0_50%_50%]"
                style={{
                    rotate: rotation,
                    scale,
                    background: `linear-gradient(135deg, 
            hsl(${petal.hue}, 75%, 65%) 0%, 
            hsl(${petal.hue - 10}, 80%, 45%) 50%, 
            hsl(${petal.hue - 20}, 85%, 35%) 100%)`,
                    boxShadow: "0 4px 12px hsla(345, 80%, 46%, 0.4)",
                }}
            />
        </motion.div>
    );
}

export default function RosePetals({ scrollProgress }: RosePetalsProps) {
    const petals = useMemo(() => generatePetalData(16), []);

    const containerOpacity = useTransform(
        scrollProgress,
        [0, 0.20, 0.25, 0.30],
        [1, 1, 0.5, 0]
    );

    return (
        <motion.div
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
            style={{ opacity: containerOpacity }}
        >
            {petals.map((petal) => (
                <Petal key={petal.id} petal={petal} scrollProgress={scrollProgress} />
            ))}
        </motion.div>
    );
}
