import React from 'react';
import { motion } from 'framer-motion';
import { INTERNSHIPS } from '../data/personal';

// ──────────────────────────────────────────────
// Internships — dedicated section listing industry research internships.
//   To edit: change INTERNSHIPS in data/personal.ts.
// ──────────────────────────────────────────────

const Internships: React.FC = () => {
    return (
        <section className="relative w-full bg-white py-32 px-6 md:px-16 overflow-hidden">
            {/* Floor giant text echo */}
            <div className="absolute inset-x-0 top-8 pointer-events-none select-none flex justify-center">
                <span className="text-[140px] md:text-[200px] font-albert-black text-gray-100 leading-none tracking-tighter whitespace-nowrap">
                    INTERN
                </span>
            </div>

            <div className="relative max-w-6xl mx-auto">
                <div className="mb-16 flex items-end justify-between flex-wrap gap-3">
                    <div>
                        <h2 className="text-5xl md:text-6xl font-albert-black tracking-tighter text-black mb-3">
                            Internships
                        </h2>
                        <p className="font-mono text-sm text-gray-500 tracking-widest uppercase">
                            Industry research · most recent first
                        </p>
                    </div>
                    <span className="font-mono text-xs text-gray-400 tracking-widest uppercase">
                        {INTERNSHIPS.length} positions
                    </span>
                </div>

                <ol className="relative space-y-8 md:space-y-12">
                    {INTERNSHIPS.map((it, i) => (
                        <motion.li
                            key={it.id}
                            className="relative grid grid-cols-1 md:grid-cols-[180px_1fr] gap-4 md:gap-12 border-t border-gray-200 pt-8 group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.3) }}
                        >
                            {/* Period column */}
                            <div className="flex flex-col gap-2">
                                <span className="font-mono text-xs md:text-sm tracking-widest text-gray-500 uppercase">
                                    {it.period}
                                </span>
                                <span
                                    className="inline-block w-3 h-3 rounded-full"
                                    style={{ backgroundColor: it.color }}
                                />
                            </div>

                            {/* Body */}
                            <div>
                                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                                    <h3 className="font-albert-black text-2xl md:text-3xl text-black tracking-tight">
                                        {it.company}
                                    </h3>
                                    {it.team && (
                                        <span className="font-albert-regular text-base md:text-lg text-gray-500">
                                            · {it.team}
                                        </span>
                                    )}
                                </div>
                                <div className="font-albert-regular text-sm md:text-base text-gray-700 mb-1">
                                    {it.role}
                                </div>
                                {it.program && (
                                    <div
                                        className="inline-block mt-1 mb-3 font-mono text-[10px] tracking-widest uppercase px-2.5 py-0.5 rounded-full border"
                                        style={{ color: it.color, borderColor: it.color + '55' }}
                                    >
                                        🏆 {it.program}
                                    </div>
                                )}
                                <p className="mt-3 font-albert-regular text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl">
                                    {it.desc}
                                </p>
                            </div>
                        </motion.li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Internships;
