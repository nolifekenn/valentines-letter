import { motion, useTransform, MotionValue } from "framer-motion";
import { Heart } from "lucide-react";

interface EnvelopeProps {
    scrollProgress: MotionValue<number>;
}

export default function Envelope({ scrollProgress }: EnvelopeProps) {
    const opacity = useTransform(
        scrollProgress,
        [0.28, 0.40, 0.82, 0.88],
        [0, 1, 1, 0]
    );

    const scale = useTransform(
        scrollProgress,
        [0.28, 0.45],
        [0.4, 1]
    );

    const y = useTransform(
        scrollProgress,
        [0.35, 0.52],
        [80, 0]
    );

    const flapRotation = useTransform(
        scrollProgress,
        [0.52, 0.68],
        [0, 180]
    );

    return (
        <motion.div
            className="absolute z-5 flex items-center justify-center"
            style={{ opacity, scale, y }}
        >
            <div
                className="relative w-72 h-48 md:w-80 md:h-56"
                style={{ perspective: "1000px" }}
            >
                {/* Envelope body */}
                <div className="absolute inset-0 envelope-body rounded-lg shadow-xl overflow-hidden border border-border/30">
                    {/* Back triangles for depth */}
                    <div
                        className="absolute inset-x-0 bottom-0 h-1/2 bg-secondary/30"
                        style={{
                            clipPath: "polygon(0 100%, 50% 30%, 100% 100%)",
                        }}
                    />

                    {/* Left fold */}
                    <div
                        className="absolute left-0 top-0 bottom-0 w-1/2"
                        style={{
                            background: "hsl(var(--cream) / 0.8)",
                            clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                        }}
                    />

                    {/* Right fold */}
                    <div
                        className="absolute right-0 top-0 bottom-0 w-1/2"
                        style={{
                            background: "hsl(var(--cream) / 0.8)",
                            clipPath: "polygon(100% 0, 0 50%, 100% 100%)",
                        }}
                    />

                    {/* Seal/Heart decoration */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-background/50 rounded-full shadow-md">
                            <Heart className="w-8 h-8 md:w-10 md:h-10 text-primary fill-primary" />
                        </div>
                    </div>
                </div>

                {/* Envelope flap (top tongue) */}
                <motion.div
                    className="absolute inset-x-0 top-0 h-28 md:h-32 envelope-flap origin-top rounded-t-lg"
                    style={{
                        rotateX: flapRotation,
                        clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                        transformStyle: "preserve-3d",
                    }}
                />

                {/* Inner flap back (shows when flap opens) */}
                <div
                    className="absolute inset-x-0 top-0 h-28 md:h-32 bg-secondary/20"
                    style={{
                        clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                        zIndex: -2,
                    }}
                />
            </div>
        </motion.div>
    );
}