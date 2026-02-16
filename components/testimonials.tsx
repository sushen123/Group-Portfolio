"use client";

import { motion } from "motion/react";
import React from "react";
import { Badge, GlassCard } from "./aextera-theme";
import Image from "next/image";

const testimonials = [
    {
        name: "Theresa Webb",
        role: "Marketing Manager",
        content:
            "Aextera transformed our vision into a digital masterpiece. Their AI agents have automated 40% of our workflow and boosted our productivity.",
        avatar: "https://avatar.vercel.sh/theresa",
        rating: 5,
    },
    {
        name: "Sarah Ahmed",
        role: "UX Designer",
        content:
            "The web design is simply breathtaking. We've seen a 50% increase in user engagement since the launch. Highly recommend their services.",
        avatar: "https://avatar.vercel.sh/sarah-ahmed",
        rating: 5,
    },
    {
        name: "James Carter",
        role: "Product Manager",
        content:
            "Scale and performance are exactly what we needed. Their development team is top-notch and visionary in every aspect.",
        avatar: "https://avatar.vercel.sh/james-carter",
        rating: 5,
    },
    {
        name: "Elena Rodriguez",
        role: "Creative Director",
        content:
            "Working with them was a seamless experience. They don't just build, they innovate with you and deliver beyond expectations.",
        avatar: "https://avatar.vercel.sh/elena-r",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Software Engineer",
        content:
            "Their technical expertise is unmatched. The solutions they built for us are robust, scalable, and beautifully crafted.",
        avatar: "https://avatar.vercel.sh/michael-chen",
        rating: 5,
    },
    {
        name: "Olivia Park",
        role: "Startup Founder",
        content:
            "From concept to launch, they guided us every step of the way. Our platform looks and performs better than we ever imagined.",
        avatar: "https://avatar.vercel.sh/olivia-park",
        rating: 5,
    },
];

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
            <span
                key={i}
                className={
                    i < rating ? "text-aextera-coral" : "text-white/20"
                }
            >
                ★
            </span>
        ))}
    </div>
);

export const Testimonials = () => {
    return (
        <section className="w-full py-24 bg-aextera-dark overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    className="mb-16 text-center max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Badge className="mb-4">Testimonials</Badge>
                    <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl mt-4">
                        Praise from our{" "}
                        <span className="text-aextera-coral">customers</span>
                    </h2>
                    <p className="mt-6 text-lg text-white/50 leading-relaxed">
                        Our services help you create digital products. Stay
                        ahead of the curve with our latest insights, tips, and
                        industry trends.
                    </p>
                </motion.div>

                <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory scroll-smooth">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            className="min-w-[340px] md:min-w-[400px] snap-start"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.1,
                            }}
                        >
                            <GlassCard className="p-8 h-full flex flex-col gap-6 border-white/10 bg-white/5">
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={t.avatar}
                                        alt={t.name}
                                        width={48}
                                        height={48}
                                        className="rounded-full border-2 border-aextera-coral"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-white">
                                            {t.name}
                                        </h4>
                                        <p className="text-sm text-white/40">
                                            {t.role}
                                        </p>
                                    </div>
                                </div>
                                <StarRating rating={t.rating} />
                                <p className="text-white/70 leading-relaxed">
                                    &ldquo;{t.content}&rdquo;
                                </p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
