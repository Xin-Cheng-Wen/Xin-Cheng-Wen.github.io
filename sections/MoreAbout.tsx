import React from 'react';
import { motion } from 'framer-motion';
import { HONORS, SERVICES, TALKS } from '../data/personal';

// ──────────────────────────────────────────────
// MoreAbout — three small lists in a 3-col grid:
//   Honors / Services / Talks
//
// Keeps the academic content but stays visually quiet so it doesn't
// fight the bigger sections above/below.
// ──────────────────────────────────────────────

const Column: React.FC<{
    title: string;
    subtitle: string;
    children: React.ReactNode;
    index: number;
}> = ({ title, subtitle, children, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="border-t border-gray-300 pt-6"
    >
        <div className="mb-5">
            <h3 className="font-albert-black text-xl md:text-2xl text-black tracking-tight mb-1">
                {title}
            </h3>
            <div className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">
                {subtitle}
            </div>
        </div>
        {children}
    </motion.div>
);

const MoreAbout: React.FC = () => {
    return (
        <section className="relative w-full bg-white py-24 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <p className="font-mono text-xs tracking-widest text-gray-400 uppercase mb-2">
                        More about
                    </p>
                    <h2 className="text-3xl md:text-4xl font-albert-black tracking-tight text-black">
                        Honors · Services · Talks
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
                    {/* Honors */}
                    <Column title="Honors & Awards" subtitle={`${HONORS.length} entries`} index={0}>
                        <ul className="space-y-4">
                            {HONORS.map((h, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="font-mono text-xs text-gray-500 tracking-widest mt-1 w-12 flex-shrink-0">
                                        {h.year}
                                    </span>
                                    <span className="font-albert-regular text-sm text-gray-700 leading-snug">
                                        {h.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Column>

                    {/* Services */}
                    <Column
                        title="Services"
                        subtitle={`Reviewer · ${SERVICES.reviewer.length} · Subreviewer · ${SERVICES.subreviewer.length}`}
                        index={1}
                    >
                        <div className="space-y-5">
                            <div>
                                <div className="font-mono text-[10px] tracking-widest text-gray-500 uppercase mb-2">
                                    Reviewer
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {SERVICES.reviewer.map((v) => (
                                        <span
                                            key={v}
                                            className="px-2.5 py-0.5 text-xs font-mono tracking-widest rounded border border-gray-300 text-gray-700"
                                        >
                                            {v}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <div className="font-mono text-[10px] tracking-widest text-gray-500 uppercase mb-2">
                                    Subreviewer
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {SERVICES.subreviewer.map((v) => (
                                        <span
                                            key={v}
                                            className="px-2.5 py-0.5 text-xs font-mono tracking-widest rounded border border-gray-200 text-gray-500"
                                        >
                                            {v}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Column>

                    {/* Talks */}
                    <Column title="Talks & Presentations" subtitle={`${TALKS.length} entries`} index={2}>
                        <ul className="space-y-4">
                            {TALKS.map((t, i) => (
                                <li key={i}>
                                    <div className="flex items-baseline gap-2 mb-0.5">
                                        <span className="font-mono text-xs text-gray-500 tracking-widest">
                                            {t.date}
                                        </span>
                                        <span className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">
                                            · {t.label}
                                        </span>
                                    </div>
                                    <span className="block font-albert-regular text-sm text-gray-700 leading-snug">
                                        {t.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </Column>
                </div>
            </div>
        </section>
    );
};

export default MoreAbout;
