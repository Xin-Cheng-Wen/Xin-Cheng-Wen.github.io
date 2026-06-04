import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { CONTACT } from '../data/personal';

// --- ICONS ---
const ICONS = {
    Email: (
        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
    ),
    Scholar: (
        <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.242 13.769L0.5 9.5 12 1l11.5 8.5-4.742 4.269C17.847 11.41 15.071 9.5 12 9.5s-5.847 1.91-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
        </svg>
    ),
    GitHub: (
        <svg width="45" height="45" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
    ),
};

// --- DATA ---
// 联系方式的文字内容统一在 data/personal.ts (CONTACT)；位置/角度/颜色在这里调
const CONTACT_CARDS = [
    {
        id: 'email',
        title: 'EMAIL',
        value: CONTACT.email,
        color: '#F97316', // Orange
        icon: ICONS.Email,
        position: { x: '-120%', y: '13%' },
        rotation: 8,
        hoverRotation: 10
    },
    {
        id: 'scholar',
        title: 'GOOGLE SCHOLAR',
        value: CONTACT.scholar,
        color: '#4285F4', // Google Blue
        icon: ICONS.Scholar,
        position: { x: '-20%', y: '15%' },
        rotation: -4,
        hoverRotation: -6
    },
    {
        id: 'github',
        title: 'GITHUB',
        value: CONTACT.github,
        color: '#181717', // GitHub black
        icon: ICONS.GitHub,
        position: { x: '80%', y: '12%' },
        rotation: -14,
        hoverRotation: -16
    }
];

// --- FLOOR MARQUEE COMPONENT ---
const FloorMarquee: React.FC<{ direction: 'left' | 'right', text: string, className?: string, rotate?: number, style?: React.CSSProperties }> = React.memo(({ direction, text, className, rotate = 0, style }) => {
    return (
        <div 
            className="absolute left-[-20%] w-[140%] pointer-events-auto overflow-visible flex will-change-transform"
            style={{ 
                transform: `translateZ(-100px) rotate(${rotate}deg)`, 
                zIndex: 0,
                ...style,
            }}
        >
            <motion.div
                className={`flex whitespace-nowrap ${className}`}
                initial={{ x: direction === 'left' ? '0%' : '-50%' }}
                animate={{ x: direction === 'left' ? '-50%' : '0%' }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
                {[...Array(6)].map((_, i) => (
                    <span key={i} className="mx-4 transition-colors duration-300">
                        {text} <span className="mx-4 opacity-30">•</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
});

// --- 3D CARD COMPONENT ---
const Card3D: React.FC<{ item: typeof CONTACT_CARDS[number]; index: number }> = ({ item, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCopy = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigator.clipboard.writeText(item.value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            className="absolute perspective-1000"
            style={{
                left: '50%',
                top: '25%', // 🟢 Changed from 35% to 25% (Moved UP)
                x: item.position.x, 
                y: item.position.y,
                zIndex: isHovered ? 100 : 10,
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1, type: "spring" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleCopy}
        >
            <motion.div
                className="relative cursor-pointer"
                animate={{
                    // Idle: 1.5x original size (200 * 1.5 = 300)
                    // Hover: Slightly larger than idle
                    width: isHovered ? 400 : 300,
                    height: isHovered ? 520 : 300,
                    rotateX: isHovered ? 0 : 0, 
                    rotateY: isHovered ? 0 : 0,
                    
                    // 🟢 核心动画逻辑：这里读取上面数据中定义的 hoverRotation
                    rotateZ: isHovered ? item.hoverRotation : item.rotation,
                    
                    y: isHovered ? -100 : 0, // Lift up
                }}
                transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 15
                }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* --- SHADOW GLOW (Only on Hover) --- */}
                <motion.div
                    className="absolute inset-0 rounded-[2rem] blur-[60px] opacity-0 transition-opacity duration-500"
                    animate={{ opacity: isHovered ? 0.6 : 0 }}
                    style={{ backgroundColor: item.color, transform: 'translateZ(-50px)' }}
                />

                {/* --- MAIN CARD --- */}
                <div 
                    className="absolute inset-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col items-center justify-center text-center transition-colors duration-300"
                    style={{ 
                        backgroundColor: isHovered ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.05)',
                        borderColor: isHovered ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.2)'
                    }}
                >
                    {/* ICON (Animated Position) */}
                    <motion.div
                        animate={{
                            y: isHovered ? -40 : 0,
                            scale: isHovered ? 1 : 1,
                            color: isHovered ? item.color : '#000000',
                            opacity: 1
                        }}
                        className="text-black/80"
                    >
                        {item.icon}
                    </motion.div>

                    {/* CONTENT (Revealed on Hover) */}
                    <motion.div
                        className="absolute bottom-10 left-0 w-full px-6 flex flex-col items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                    >
                         <h3 className="text-sm font-bold tracking-widest text-gray-400 mb-2 uppercase">{item.title}</h3>
                         <p className="text-xl font-albert-black text-black break-words leading-tight select-all">{item.value}</p>

                         <div className="mt-6 flex items-center justify-center gap-2 text-sm font-mono text-gray-400">
                             {copied ? (
                                 <span className="text-green-500 font-bold flex items-center gap-1">
                                     <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                     COPIED!
                                 </span>
                             ) : (
                                 <span>CLICK TO COPY</span>
                             )}
                         </div>
                    </motion.div>
                </div>

                {/* --- 3D THICKNESS SIDES --- */}
                <div 
                    className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none"
                    style={{ transform: 'translateZ(-20px)' }}
                />

            </motion.div>
        </motion.div>
    );
};

// --- MAIN COMPONENT ---
const Contact: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    return (
        <section 
            ref={containerRef}
            className="relative w-full bg-white overflow-hidden"
            style={{ height: '100vh' }}
        >
            <div className="w-full h-full flex items-center justify-center perspective-2000">
                {/* Floor Container */}
                <motion.div
                    className="relative w-full max-w-[1400px] h-full transform-gpu"
                    style={{
                        rotateX: "40deg", // Permanent tilt for the floor
                        y,
                        scale: 0.8, // 🟢 80% ZOOM EFFECT
                        transformStyle: "preserve-3d",
                    }}
                >
                    {/* Replaced 'HELLO' with Floor Marquee */}
                     <FloorMarquee 
                        direction="right" 
                        text="GET IN TOUCH" 
                        rotate={-10} 
                        className="text-[120px] md:text-[180px] font-albert-black text-gray-100 leading-none" 
                        style={{ top: '40%' }} // 🟢 Changed from 50% to 40% (Moved UP)
                    />

                    {/* Cards Container */}
                    <div className="absolute inset-0 pointer-events-auto" style={{ transformStyle: "preserve-3d" }}>
                         {CONTACT_CARDS.map((card, idx) => (
                             <Card3D key={card.id} item={card} index={idx} />
                         ))}
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Contact;