import { motion, useTransform, MotionValue } from "framer-motion";

interface LetterProps {
    scrollProgress: MotionValue<number>;
}

export default function Letter({ scrollProgress }: LetterProps) {
    const slideY = useTransform(
        scrollProgress,
        [0.68, 0.82],
        [150, 0]
    );

    const opacity = useTransform(
        scrollProgress,
        [0.68, 0.75],
        [0, 1]
    );

    const unfoldRotation = useTransform(
        scrollProgress,
        [0.85, 0.98],
        [85, 0]
    );

    const scale = useTransform(
        scrollProgress,
        [0.82, 0.92],
        [0.85, 1]
    );

    const contentOpacity = useTransform(
        scrollProgress,
        [0.90, 1.0],
        [0, 1]
    );

    return (
        <motion.div
            className="absolute z-20 w-full max-w-sm md:max-w-md px-4"
            style={{
                opacity,
                y: slideY,
                scale,
                perspective: "1200px"
            }}
        >
            <motion.div
                className="letter-paper relative p-6 md:p-8 rounded-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-border/20"
                style={{
                    rotateX: unfoldRotation,
                    transformOrigin: "top center",
                    transformStyle: "preserve-3d",
                }}
            >
                {/* Paper texture overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply bg-paper-texture rounded-sm" />

                {/* Letter content */}
                <motion.div
                    className="relative z-10"
                    style={{ opacity: contentOpacity }}
                >
                    {/* Decorative flourish */}
                    <div className="flex justify-center mb-4">
                        <span className="text-primary text-3xl md:text-4xl">❦</span>
                    </div>

                    {/* Greeting */}
                    <h2
                        className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6 text-center italic"
                        style={{ fontFamily: "var(--font-handwriting)" }}
                    >
                        My Dearest Lalove,
                    </h2>

                    {/* Letter body */}
                    <div
                        className="space-y-3 md:space-y-4 text-sm md:text-base leading-relaxed text-justify text-foreground"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        <p>
                            Happy Anniversary, my bebi! I love you so much! I am always grateful for the joy and warmth you bring into my life. Your smile and laughter always brighten up my day.
                        </p>
                        <p>
                            I can't express how much you mean to me. You inspire me always to be a better version of myself. You've always supported me through thick and thin, and I want you to know that I will always be here for you, just as you have been for me.
                        </p>
                        <p>
                            I cherish every laugh we share, every silence we fill with comfort, and every dream we weave together for our future. You are my muse, my confidant, and my greatest adventure.
                        </p>
                    </div>

                    {/* Signature */}
                    <div className="mt-8 md:mt-10 flex flex-col items-end">
                        <p
                            className="text-base md:text-lg font-bold italic text-primary"
                            style={{ fontFamily: "var(--font-handwriting)" }}
                        >
                            Forever Yours,
                        </p>
                        <p
                            className="text-lg md:text-xl mt-2 text-secondary"
                            style={{ fontFamily: "var(--font-handwriting)" }}
                        >
                            ♡ Dino
                        </p>
                    </div>
                </motion.div>

                {/* Folded letter back (visible during unfold animation) */}
                <div
                    className="absolute inset-0 rounded-sm"
                    style={{
                        background: "hsl(var(--cream))",
                        transform: "rotateX(180deg)",
                        backfaceVisibility: "hidden",
                        zIndex: -1,
                    }}
                />
            </motion.div>
        </motion.div>
    );
}
