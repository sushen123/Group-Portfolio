"use client";

import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { Badge } from "./aextera-theme";

const faqs = [
    {
        question: "How can AI Automation benefit my business?",
        answer: "AI automation can handle repetitive tasks like data entry, lead sorting, and customer support, allowing your team to focus on strategic growth while reducing operational costs.",
    },
    {
        question: "How long does a typical web development project take?",
        answer: "A standard web project usually takes between 4 to 12 weeks, depending on the complexity, features, and level of custom design required.",
    },
    {
        question: "Do you provide post-launch support?",
        answer: "Yes, we offer ongoing maintenance and support to ensure your website and automation systems continue to perform at their best as your business scales.",
    },
    {
        question: "Can you help with existing website redesigns?",
        answer: "Absolutely. We specialize in transforming outdated websites into modern, high-converting digital experiences that align with your current brand goals.",
    },
    {
        question: "What is your process for AI integration?",
        answer: "We start by analyzing your current workflows, identifying redundancies, and then designing custom AI agents or integrations that seamlessly fit into your existing stack.",
    },
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex w-full items-center justify-between py-5 text-left"
            >
                <span className="text-lg font-medium text-white">{question}</span>
                <span className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-xl leading-none text-aextera-coral">
                    {isOpen ? "−" : "+"}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-5 text-base text-white/60">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const FAQ = () => {
    return (
        <section className="w-full bg-aextera-dark py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-16 text-center">
                    <Badge className="mb-4">FAQ</Badge>
                    <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                        Frequently Asked <span className="text-aextera-coral">Questions</span>
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
                        Our services help you create digital products. Stay ahead of the curve with our latest insights, tips, and industry trends.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className="flex flex-col justify-start">
                        <h3 className="text-3xl font-bold text-white md:text-4xl">
                            Need More Info?
                        </h3>
                        <p className="mt-4 text-lg text-white/60">
                            If you have any questions or need further information about our services, feel free to reach out. We&apos;re here to help you find the right solutions for your business.
                        </p>
                        <div className="mt-8">
                            <a
                                href="#contact"
                                className="inline-block rounded-full bg-aextera-coral px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>

                    <div>
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
