import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BASIC, CONTACT, SKILLS } from '../data/personal';

// ──────────────────────────────────────────────
// Hero (text + research strip on the right)
//   - Left column: status pill, two-line giant name, 4-paragraph About body
//   - Right column: 3×1 stacked research-interest cards with hover preview
// ──────────────────────────────────────────────

const linkCls = 'text-black underline underline-offset-4 decoration-gray-300 hover:decoration-black transition-colors';

// One compact research card that expands on hover to show a longer description
const ResearchCard: React.FC<{ skill: typeof SKILLS[number]; index: number }> = ({ skill, index }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <motion.div
            className="relative rounded-2xl border border-gray-200 bg-white overflow-hidden cursor-pointer"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.55 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            whileHover={{ y: -3 }}
        >
            {/* Color stripe */}
            <span
                className="absolute left-0 top-0 h-full w-1 z-10"
                style={{ backgroundColor: skill.color }}
            />

            {/* Background preview (fades in on hover) */}
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        key="bg"
                        className="absolute inset-0 z-0 overflow-hidden"
                        initial={{ opacity: 0, scale: 1.08 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.08 }}
                        transition={{ duration: 0.4 }}
                    >
                        <img
                            src={skill.previewImg}
                            alt={skill.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div
                            className="absolute inset-0 mix-blend-multiply"
                            style={{ backgroundColor: skill.color, opacity: 0.5 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-white/30" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Content — animates height to expand */}
            <motion.div
                className="relative z-10 px-4 py-3 flex items-start gap-3"
                initial={false}
                animate={{ paddingTop: hovered ? 14 : 12, paddingBottom: hovered ? 16 : 12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1">
                        <h3
                            className="font-albert-black text-base md:text-lg leading-tight tracking-tight transition-colors duration-300"
                            style={{ color: hovered ? skill.color : '#000' }}
                        >
                            {skill.title}
                        </h3>
                        <span
                            className="font-mono text-[9px] tracking-widest uppercase"
                            style={{ color: skill.color }}
                        >
                            {skill.percentText}
                        </span>
                    </div>
                    <p className="text-[11px] font-mono text-gray-500 leading-snug truncate">
                        {skill.tags}
                    </p>

                    {/* Mini progress bar */}
                    <div className="mt-2 h-[3px] w-full bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: skill.color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percent}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 + index * 0.1 }}
                        />
                    </div>

                    {/* Long description — expands on hover */}
                    <AnimatePresence initial={false}>
                        {hovered && skill.longDesc && (
                            <motion.div
                                key="longdesc"
                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                animate={{ height: 'auto', opacity: 1, marginTop: 10 }}
                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                            >
                                <p className="text-[12px] font-albert-regular text-gray-700 leading-relaxed">
                                    {skill.longDesc}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Index badge */}
                <div
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-mono text-[10px] font-bold transition-colors duration-300"
                    style={{
                        backgroundColor: hovered ? skill.color : 'transparent',
                        color: hovered ? 'white' : skill.color,
                        border: `1.5px solid ${skill.color}`,
                    }}
                >
                    0{index + 1}
                </div>
            </motion.div>
        </motion.div>
    );
};

const Hero: React.FC = () => {
    return (
        <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col">
            {/* Top spacer for the fixed navbar */}
            <div className="h-20 flex-shrink-0" />

            <div className="flex-1 flex flex-col justify-center px-6 md:px-16 py-8 md:py-10">
                <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 items-start">
                    {/* ========== LEFT COLUMN ========== */}
                    <div>
                        {/* Status pill */}
                        <motion.div
                            className="flex items-center gap-3 mb-6 md:mb-7"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="font-mono text-[11px] tracking-widest text-gray-500 uppercase">
                                On the 2027 job market · code LLMs / RL
                            </span>
                        </motion.div>

                        {/* Two-line name */}
                        <h1 className="font-albert-black tracking-tighter leading-[0.92] text-[13vw] md:text-[9vw] lg:text-[7vw] text-black">
                            <motion.span
                                className="block"
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {BASIC.heroTitleLine1}
                            </motion.span>
                            <motion.span
                                className="block"
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {BASIC.heroTitleLine2}
                            </motion.span>
                        </h1>

                        {/* Subtitle row */}
                        <motion.div
                            className="mt-5 md:mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1 font-albert-regular text-base text-gray-600"
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.35 }}
                        >
                            <span>{BASIC.modalDisplayName}</span>
                            <span className="text-gray-300">·</span>
                            <span className="font-mono text-xs tracking-widest text-gray-400 uppercase">
                                文昕成 · PhD @ HITSZ
                            </span>
                        </motion.div>

                        {/* About body — 4 paragraphs */}
                        <motion.div
                            className="mt-8 md:mt-10 max-w-3xl space-y-3.5 font-albert-regular text-[14px] md:text-[15px] text-gray-700 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <p>
                                Here is <strong className="text-black">Xin-Cheng Wen (文昕成)</strong>.
                            </p>
                            <p>
                                I'm currently a <strong className="text-black">final-year Ph.D. student</strong> specializing in
                                Computer Science (CS) at <strong className="text-black">STAR Lab, Harbin Institute of Technology (Shenzhen)</strong>.
                                I have the privilege of being advised by Prof.{' '}
                                <a href="https://cuiyungao.github.io/" target="_blank" rel="noopener noreferrer" className={linkCls}>
                                    Cuiyun Gao
                                </a>
                                . I received my Bachelor's degree in the School of Informatics at Xiamen University in 2022,
                                advised by Prof.{' '}
                                <a href="https://cdmc.xmu.edu.cn/info/1010/1055.htm" target="_blank" rel="noopener noreferrer" className={linkCls}>
                                    Kun-Hong Liu
                                </a>
                                . My research pursuits primarily revolve around the captivating fields of Artificial Intelligence
                                (AI) techniques for software engineering.
                            </p>
                            <p>
                                I am currently a research intern on the <strong className="text-black">post-training</strong>{' '}
                                team at <strong className="text-black">MINIMAX</strong>, selected into the{' '}
                                <strong className="text-black">Top Talent Program</strong>, where I lead efforts on code and
                                test-case generation for the <strong className="text-black">MINIMAX M3-series Model</strong>.
                            </p>
                            <p>
                                I am on the <strong className="text-black">2027</strong> job market, actively seeking full-time
                                roles on foundation / base-model teams working on <strong className="text-black">code LLMs</strong>{' '}
                                / <strong className="text-black">RL</strong> — please feel free to reach out if our interests align.
                            </p>
                            <p>
                                If you are interested in any aspect of me, I would love to chat and collaborate. Please email me at{' '}
                                <a href={`mailto:${CONTACT.email}`} className={linkCls}>
                                    {CONTACT.email}
                                </a>
                                .
                            </p>
                        </motion.div>
                    </div>

                    {/* ========== RIGHT COLUMN — 3x1 research cards ========== */}
                    <div className="lg:sticky lg:top-28">
                        <motion.div
                            className="mb-4 flex items-baseline gap-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <span className="font-mono text-[10px] tracking-widest text-gray-400 uppercase">
                                Research interests
                            </span>
                            <span className="flex-1 h-px bg-gray-200" />
                        </motion.div>
                        <div className="flex flex-col gap-3">
                            {SKILLS.map((s, i) => (
                                <ResearchCard key={s.id} skill={s} index={i} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <motion.div
                className="flex-shrink-0 border-t border-gray-100 px-6 md:px-16 py-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.85 }}
            >
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-8">
                    <div className="flex flex-wrap items-center gap-4 md:gap-5 font-mono text-[11px] tracking-widest text-gray-500 uppercase">
                        <span>{BASIC.establishedYear}</span>
                        <span className="text-gray-300">·</span>
                        <span>{BASIC.city}</span>
                        <span className="text-gray-300">·</span>
                        <span>{BASIC.professionShort}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 md:gap-5 font-mono text-[11px] tracking-widest text-gray-500 uppercase">
                        <a href={`mailto:${CONTACT.email}`} className="hover:text-black transition-colors">
                            Email
                        </a>
                        <a href={CONTACT.scholar} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                            Scholar
                        </a>
                        <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                            GitHub
                        </a>
                        <span className="text-gray-300 hidden md:inline">·</span>
                        <motion.a
                            href="#experience"
                            className="hidden md:inline-flex items-center gap-1 text-gray-400 hover:text-black transition-colors"
                            animate={{ y: [0, 4, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            Scroll
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </motion.a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
