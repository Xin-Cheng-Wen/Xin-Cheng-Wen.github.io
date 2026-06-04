import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../data/personal';

// ──────────────────────────────────────────────
// Education — academic background as 3 horizontal cards.
//   Data source: EXPERIENCE in data/personal.ts.
//   To edit: change EXPERIENCE entries (year/role/company/desc/color).
// ──────────────────────────────────────────────

const Education: React.FC = () => {
    return (
        <section className="relative w-full bg-white py-24 md:py-28 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="mb-10 md:mb-14 flex items-end justify-between flex-wrap gap-3">
                    <div>
                        <p className="font-mono text-xs tracking-widest text-gray-400 uppercase mb-2">
                            Academic background
                        </p>
                        <h2 className="text-3xl md:text-4xl font-albert-black tracking-tight text-black">
                            Education
                        </h2>
                    </div>
                    <span className="font-mono text-[11px] text-gray-400 tracking-widest uppercase">
                        {EXPERIENCE.length} stages
                    </span>
                </div>

                {/* 3 cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                    {EXPERIENCE.map((item, i) => (
                        <motion.div
                            key={item.id}
                            className="relative group rounded-2xl border border-gray-200 bg-white p-6 md:p-7 hover:border-gray-400 transition-colors duration-300 overflow-hidden"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            whileHover={{ y: -4 }}
                        >
                            {/* Color stripe on top */}
                            <span
                                className="absolute left-0 top-0 h-1 w-full"
                                style={{ backgroundColor: item.color }}
                            />

                            {/* Year */}
                            <div className="font-mono text-[11px] tracking-widest text-gray-500 uppercase mb-3">
                                {item.year}
                            </div>

                            {/* Role */}
                            <h3 className="font-albert-black text-lg md:text-xl text-black leading-snug tracking-tight mb-2">
                                {item.role}
                            </h3>

                            {/* Company / institution */}
                            <div
                                className="font-albert-regular text-sm md:text-base mb-4"
                                style={{ color: item.color }}
                            >
                                {item.company}
                            </div>

                            {/* Description — only first line for compactness */}
                            <p className="font-albert-regular text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-3">
                                {item.desc}
                            </p>

                            {/* Tags */}
                            <div className="mt-4 flex flex-wrap gap-1.5">
                                {item.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="px-2 py-0.5 text-[10px] font-mono tracking-widest uppercase rounded border border-gray-200 text-gray-500"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
