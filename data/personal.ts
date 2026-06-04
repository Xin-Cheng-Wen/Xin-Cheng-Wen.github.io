// ============================================================
// 🟢 个人信息中心 / Personal Info Central Config
// ============================================================
// 改这一个文件，全站对应位置都会更新。
// Each field below is annotated with where it appears on the page.
// ============================================================


// ──────────────────────────────────────────────
// 1. 基本信息 / BASIC
// ──────────────────────────────────────────────
export const BASIC = {
    // 浏览器标签页标题（index.html <title> 也要手动同步）
    siteTitle: 'Xin-Cheng Wen',

    // Hero 区大标题两行字
    heroTitleLine1: 'XIN-CHENG',
    heroTitleLine2: 'WEN',

    // Profile 区域小字版名字（出现 <br>，两行排列）
    profileNameLine1: 'XIN-CHENG',
    profileNameLine2: 'WEN',

    // ExperienceModal 名片上的名字
    modalDisplayName: 'Xin-Cheng Wen',

    // Modal 上的副文本（原为生日，现改成中文名+在读身份说明）
    birthday: '文昕成 · PhD @ HITSZ',

    // Profile meta 行（原为出生年份，现改成入学+目前阶段）
    establishedYear: 'EST. 2022 PHD',

    // Profile meta 行：城市
    city: 'SHENZHEN',

    // Profile meta 行最后一项：身份/职位简介
    professionShort: 'AI4CODE RESEARCHER',

    // Hero photo 下方多行职业描述
    professionLines: [
        'PhD Candidate · HITSZ',
        'AI for Code · LLM for SE',
    ],

    // Hero 区大头照（hover 时从大字里露出来）—— 引用本仓 images/ 下的 head.png
    // 真实头像可以替换为你想用的图片 URL（建议竖图 400x600）
    heroPhotoUrl: '/head.png',

    // Profile 区域大照片
    profilePhotoUrl: '/head.png',
};


// ──────────────────────────────────────────────
// 2. 经历时间线 / EXPERIENCE TIMELINE
// ──────────────────────────────────────────────
// Profile 区域的卡片 + 点击后的 modal
// 字段含义:
//   year    时间段
//   role    角色/身份
//   company 机构/课题组
//   color   主题色 HEX
//   desc    详细描述（modal 展开），支持 \n 换行
//   tags    3 个标签
// ──────────────────────────────────────────────
export const EXPERIENCE = [
    {
        id: '1',
        year: 'Sep 2022 - Jun 2027',
        role: 'PhD Candidate · Computer Science (硕博连读)',
        company: 'Harbin Institute of Technology (Shenzhen) · STAR Lab',
        color: '#005C4B',
        desc: 'Successive postgraduate-and-doctoral program in CS at HITSZ STAR Lab.\nAdvisor: Prof. Cuiyun Gao.\nResearch focus: AI techniques for software engineering — vulnerability detection, code LLM, repository-level reasoning.',
        tags: ['PHD', 'HITSZ', 'AI4SE'],
    },
    {
        id: '2',
        year: 'Jun 2023 - Aug 2023',
        role: 'Visiting Student',
        company: 'The Chinese University of Hong Kong (CUHK)',
        color: '#7C3AED',
        desc: 'Visiting student at CUHK, supervised by Prof. Michael R. Lyu.\nWorked on advanced topics in software engineering and LLM applications.',
        tags: ['VISITING', 'CUHK', 'COLLAB'],
    },
    {
        id: '3',
        year: 'Sep 2018 - Jun 2022',
        role: 'B.Eng. in Digital Media Technology',
        company: 'School of Informatics, Xiamen University',
        color: '#55FF55',
        desc: 'Bachelor at School of Informatics, Xiamen University.\nAdvisor: Prof. Kun-Hong Liu.\nFinal-year project on cross-corpus speech emotion recognition led to a first-author IJCAI-22 paper.\nOutstanding Graduate of XMU 2022.',
        tags: ['BACHELOR', 'XMU', 'SER'],
    },
];


// ──────────────────────────────────────────────
// 2b. 实习经历 / INTERNSHIPS (single 区域 Internships 显示)
// ──────────────────────────────────────────────
// 按时间倒序，最新在最前
// ──────────────────────────────────────────────
export const INTERNSHIPS = [
    {
        id: 'int-MINIMAX',
        period: 'Apr 2026 - Now',
        company: 'MINIMAX',
        team: 'Post-Training',
        role: 'Research Intern',
        program: 'Top Talent Program',
        color: '#FF7F27',
        desc: 'Leading efforts on code and test-case generation for the MINIMAX M3-series Model. Focus on LLM for Code, RLHF/RLAIF for code tasks, large-scale data curation.',
    },
    {
        id: 'int-ant',
        period: 'Sep 2025 - Mar 2026',
        company: 'Ant Group',
        team: 'CodeFuse & InClusion AI',
        role: 'Research Intern',
        program: 'Star Plan A',
        color: '#FFCC00',
        desc: 'Large Language Models for SWE-Bench and code tasks. Worked closely with Dr. Peng Di and Dr. Hang Yu.',
    },
    {
        id: 'int-tencent-teg',
        period: 'Jul 2024 - Aug 2025',
        company: 'Tencent',
        team: 'TEG',
        role: 'Research Intern',
        program: 'Rhino-Bird Elite Talent Program',
        color: '#3B82F6',
        desc: 'Multi-Agent Framework and Large Language Models for Code. Worked closely with Dr. Deheng Ye and Dr. Yijun Yang.',
    },
    {
        id: 'int-tencent-wxg',
        period: 'Nov 2023 - Jun 2024',
        company: 'Tencent',
        team: 'WXG',
        role: 'Research Intern',
        program: '',
        color: '#10B981',
        desc: 'Repository-Level Code Completion and Retrieval-Augmented Generation (RAG).',
    },
];


// ──────────────────────────────────────────────
// 2c. 荣誉 / HONORS (Profile 区底部显示)
// ──────────────────────────────────────────────
export const HONORS = [
    { year: '2024', text: 'ICSE\'24 Best Paper Award · Industry Challenge Track' },
    { year: '2023', text: 'Binxing Fang Scholarship' },
    { year: '2022', text: 'Outstanding Graduate of XMU' },
];


// ──────────────────────────────────────────────
// 2d. 服务 / SERVICES (Profile 区显示)
// ──────────────────────────────────────────────
export const SERVICES = {
    reviewer: ['TOSEM', 'TNNLS', 'TIFS', 'TKDE'],
    subreviewer: ['ASE', 'FSE', 'ISSTA', 'TSE', 'IST', 'JSS', 'EMSE', 'CVPR'],
};


// ──────────────────────────────────────────────
// 2e. 学术邀请 / TALKS (Profile 区显示)
// ──────────────────────────────────────────────
export const TALKS = [
    { date: '11/2025', label: 'Presentation', text: 'ASE 2025 @ Seoul, South Korea' },
    { date: '09/2024', label: 'Presentation', text: 'ISSTA 2024 @ Austria' },
    { date: '08/2024', label: 'Invited', text: 'CCF TCSE' },
    { date: '01/2024', label: 'Talk', text: 'Nadi Daoudi @ University of Luxembourg' },
    { date: '01/2024', label: 'Invited', text: 'CAAI' },
    { date: '05/2023', label: 'Presentation', text: 'ICSE 2023 @ Australia' },
];


// ──────────────────────────────────────────────
// 3. 研究方向 / RESEARCH INTERESTS  (Skills 区显示)
// ──────────────────────────────────────────────
// 4 张玻璃卡 + hover 时飞出来的预览
// 字段含义:
//   title          研究方向名（卡片正面大字）
//   percent        信心/侧重度 0-100（影响进度条长度）
//   percentText    显示的百分比文本
//   color          主题色 HEX
//   tags           关键子话题/技术，逗号分隔
//   previewImg     hover 时飞入的图（任意学术图、网页截图）
//   previewText    飞入图右下角的小字标签
//   previewRotate  飞入卡片的旋转角度
// ──────────────────────────────────────────────
export const SKILLS = [
    {
        id: 'r1',
        title: 'AI for Code',
        percent: 95,
        percentText: 'CORE',
        color: '#F59E0B',
        tags: 'Code Generation, Code LLM, RL for Code',
        previewImg: 'https://picsum.photos/seed/research-aicode/600/800',
        previewRotate: -6,
        previewText: 'AI4Code',
        longDesc: 'Building reasoning-driven LLMs that generate, repair, and test real-world code. Currently working on post-training (SFT + RL) for code-focused foundation models.',
    },
    {
        id: 'r2',
        title: 'LLM for SE',
        percent: 90,
        percentText: 'MAIN',
        color: '#3B82F6',
        tags: 'Repository-level Tasks, Agent, RAG',
        previewImg: 'https://picsum.photos/seed/research-llm4se/600/800',
        previewRotate: 8,
        previewText: 'LLM4SE',
        longDesc: 'Applying LLMs to repository-level software-engineering tasks: SWE-bench style agents, retrieval-augmented generation over codebases, and multi-file reasoning.',
    },
    {
        id: 'r3',
        title: 'Vulnerability Detection',
        percent: 88,
        percentText: 'KEY',
        color: '#EA580C',
        tags: 'Repository-level, Graph Learning, Patch',
        previewImg: 'https://picsum.photos/seed/research-vuldet/600/800',
        previewRotate: -12,
        previewText: 'VulDet',
        longDesc: 'Detecting and repairing software vulnerabilities at the repository level — graph representation learning, structured comment trees, and reasoning LLMs for security patches.',
    },
];


// ──────────────────────────────────────────────
// 4. 代表会议/期刊 / VENUE BADGES  (Skills 区下方的图标按钮)
// ──────────────────────────────────────────────
// 原本是软件图标，现改成"我发表过 / 经常投稿的代表会议"
// name           按钮上显示的简写
// iconUrl        hover 时飞出来的预览图（可用任意学术 logo 或截图）
// color          主题色
// previewRotate  hover 飞入卡片旋转角度
// y              按钮基础 Y 偏移
// previewY       hover 飞入图 Y 偏移
// ──────────────────────────────────────────────
export const SOFTWARES = [
    {
        name: 'ICSE',
        iconUrl: 'https://picsum.photos/seed/venue-icse/400/400',
        color: '#1E40AF',
        previewRotate: 15,
        y: 0,
        previewY: 0,
    },
    {
        name: 'ASE',
        iconUrl: 'https://picsum.photos/seed/venue-ase/400/400',
        color: '#7C3AED',
        previewRotate: -10,
        y: 5,
        previewY: -10,
    },
    {
        name: 'TSE',
        iconUrl: 'https://picsum.photos/seed/venue-tse/400/400',
        color: '#DC2626',
        previewRotate: 8,
        y: -2,
        previewY: 6,
    },
    {
        name: 'ISSTA',
        iconUrl: 'https://picsum.photos/seed/venue-issta/400/400',
        color: '#059669',
        previewRotate: -15,
        y: 12,
        previewY: 0,
    },
    {
        name: 'ACL',
        iconUrl: 'https://picsum.photos/seed/venue-acl/400/400',
        color: '#EA580C',
        previewRotate: 12,
        y: -2,
        previewY: -8,
    },
    {
        name: 'IJCAI',
        iconUrl: 'https://picsum.photos/seed/venue-ijcai/400/400',
        color: '#0891B2',
        previewRotate: -8,
        y: 6,
        previewY: 4,
    },
];


// ──────────────────────────────────────────────
// 5. 联系方式 / CONTACT
// ──────────────────────────────────────────────
// 学术主页只保留 3 张卡：邮箱 / Google Scholar / GitHub
// 想再加：先在这里加字段，再去 sections/Contact.tsx 复制一张卡进去
// ──────────────────────────────────────────────
export const CONTACT = {
    email: 'xiamenwxc@foxmail.com',
    scholar: 'https://scholar.google.com/citations?user=Lzttj0MAAAAJ&hl=zh-CN',
    github: 'https://github.com/Xin-Cheng-Wen',
};


// ──────────────────────────────────────────────
// 6. News & Updates 时间线
// ──────────────────────────────────────────────
// 显示在 Hero 和 Profile 之间的新区域 (sections/News.tsx)
// 每条 = 一个时间节点 + 类型 + 文本 + (可选)链接
// 字段含义:
//   date  显示在左侧，如 '06/2026'
//   type  小标签：'NEWS' | 'CONFERENCE' | 'JOURNAL' | 'VISITING' | 'AWARD'
//   text  主要文本（支持 markdown 风格的简单 **bold** 加粗，组件里会渲染）
//   link  (可选) 点击跳转的 URL
// 想加新动态：在数组最前面 push 一条
// ──────────────────────────────────────────────
export const NEWS = [
    {
        date: '06/2026',
        type: 'NEWS',
        text: '**MINIMAX M3** is coming!!! 🎉',
        link: 'https://www.minimaxi.com/models/text/m3',
    },
    {
        date: '02/2026',
        type: 'NEWS',
        text: '**SWE-Fuse** achieved TOP 3 🏆 in the 8B (49.8%) and 32B (65.2%) of code agents in the SWE-bench Verified leaderboard 🎉',
        link: 'https://arxiv.org/abs/2603.07927',
    },
    {
        date: '01/2026',
        type: 'JOURNAL',
        text: 'Our paper has been accepted by **TSE**.',
    },
    {
        date: '08/2025',
        type: 'CONFERENCE',
        text: 'Our paper directly accepted by **ASE 2025** without revision (acceptance rate 9.9%, 113/1136).',
        link: 'https://arxiv.org/abs/2510.05480',
    },
    {
        date: '05/2025',
        type: 'CONFERENCE',
        text: 'Our paper accepted by **ACL 2025 Findings**.',
        link: 'https://aclanthology.org/2025.findings-acl.467/',
    },
    {
        date: '11/2024',
        type: 'CONFERENCE',
        text: 'Our paper directly accepted by **ICSE 2025** without revision (acceptance rate 10.3%, 66/662).',
        link: 'https://ieeexplore.ieee.org/abstract/document/11029757',
    },
    {
        date: '07/2024',
        type: 'CONFERENCE',
        text: 'One demo paper accepted by **ISSTA/ECOOP 2024** Doctoral Symposium.',
    },
    {
        date: '03/2024',
        type: 'JOURNAL',
        text: 'Our paper has been accepted by **TSE**.',
    },
    {
        date: '03/2024',
        type: 'CONFERENCE',
        text: 'Our paper accepted by **ISSTA 2024**.',
        link: 'https://dl.acm.org/doi/abs/10.1145/3650212.3652124',
    },
    {
        date: '02/2024',
        type: 'CONFERENCE',
        text: 'Paper accepted by **ICSE 24 Challenge Track** — the first repository-level vulnerability dataset.',
        link: 'https://arxiv.org/abs/2401.13169',
    },
    {
        date: '11/2023',
        type: 'JOURNAL',
        text: 'Our paper has been accepted by **TSE**.',
    },
    {
        date: '08/2023',
        type: 'CONFERENCE',
        text: 'Paper accepted by **ASE 2023**.',
    },
    {
        date: '06/2023',
        type: 'VISITING',
        text: 'Visiting student at **CUHK**, supervised by Prof. Michael R. Lyu.',
    },
    {
        date: '06/2023',
        type: 'JOURNAL',
        text: 'Our paper accepted by **Soft Computing**.',
    },
    {
        date: '11/2022',
        type: 'CONFERENCE',
        text: 'Our paper accepted by **ICSE 2023**.',
    },
    {
        date: '07/2022',
        type: 'JOURNAL',
        text: 'Our paper accepted by **Speech Communication**.',
    },
    {
        date: '04/2022',
        type: 'CONFERENCE',
        text: 'Our paper accepted by **IJCAI 2022**.',
    },
];


// ──────────────────────────────────────────────
// 7. 论文 / PUBLICATIONS  (Publications 区显示)
// ──────────────────────────────────────────────
// 17 篇全部论文，按 3 类分组（Publications.tsx 会根据 category 字段分组渲染）：
//   conference   - Conference Papers (9)
//   journal      - Journal Papers (4)
//   collaborative - Collaborative Papers (4)
//
// 字段含义:
//   id          唯一 key
//   category    'conference' | 'journal' | 'collaborative' (分组依据)
//   title       论文标题
//   venueShort  会议/期刊简称（如 'ASE 2025'）—— 用于 PaperPlaceholder 大字
//   label       完整会议/期刊 + CCF 等级（rendered as tag）
//   year        发表年份（用于左侧排序栏）
//   client      作者列表（保留这个字段名以兼容旧组件）
//   color       venue 主题色 HEX（影响占位卡颜色 + hover 高亮）
//   desc        一句话简介
//   tools       关键技术词条 (tags)
//   link        论文 PDF / 项目页 URL
//   img         (可选) 若你提供本地论文截图 URL（如 '/papers/xxx.png'），优先用这个；否则用 PaperPlaceholder 自动生成
// ──────────────────────────────────────────────

export type PubCategory = 'conference' | 'journal' | 'collaborative';

export const PUBLICATIONS: Array<{
    id: number;
    category: PubCategory;
    title: string;
    venueShort: string;
    label: string;
    year: string;
    client: string;
    color: string;
    desc: string;
    tools: string[];
    link?: string;
    img?: string;
}> = [
    // ─────────── Conference Papers (9) ───────────
    {
        id: 1,
        category: 'conference',
        title: 'Vul-R2: A Reasoning LLM for Automated Vulnerability Repair',
        venueShort: 'ASE 2025',
        label: 'ASE 2025 · CCF-A',
        year: '2025.11',
        client: 'Xin-Cheng Wen, Zirui Lin, Yijun Yang, Cuiyun Gao, Deheng Ye',
        color: '#FF7F27',
        desc: 'A reasoning-driven LLM for automated vulnerability repair. Directly accepted at ASE 2025 (acceptance rate 9.9%). Interned at Tencent AI Lab.',
        tools: ['Reasoning', 'Vul Repair', 'LLM'],
        link: 'https://arxiv.org/pdf/2510.05480',
    },
    {
        id: 2,
        category: 'conference',
        title: 'Boosting Vulnerability Detection of LLMs via Curriculum Preference Optimization with Synthetic Reasoning Data',
        venueShort: 'ACL 2025 Findings',
        label: 'ACL 2025 Findings',
        year: '2025.07',
        client: 'Xin-Cheng Wen, Yijun Yang, Cuiyun Gao, Yang Xiao, Deheng Ye',
        color: '#FFA500',
        desc: 'Curriculum preference optimization with synthetic reasoning data to boost LLMs on vulnerability detection. Interned at Tencent AI Lab.',
        tools: ['DPO', 'Curriculum', 'Synthetic Data'],
        link: 'https://aclanthology.org/2025.findings-acl.467/',
    },
    {
        id: 3,
        category: 'conference',
        title: 'Repository-Level Graph Representation Learning for Enhanced Security Patch Detection',
        venueShort: 'ICSE 2025',
        label: 'ICSE 2025 · CCF-A',
        year: '2025.05',
        client: 'Xin-Cheng Wen, Zirui Lin, Cuiyun Gao, Hongyu Zhang, Yong Wang, Qing Liao',
        color: '#4DA6FF',
        desc: 'Graph representation learning at the repository level for security patch detection. Directly accepted at ICSE 2025 (rate 10.3%).',
        tools: ['Graph Learning', 'Patch', 'Repo-level'],
        link: 'https://ieeexplore.ieee.org/abstract/document/11029757',
    },
    {
        id: 4,
        category: 'conference',
        title: 'Collaboration to Repository-Level Vulnerability Detection',
        venueShort: 'ISSTA/ECOOP\'24',
        label: 'ISSTA/ECOOP 2024 · Doctoral Symposium',
        year: '2024.09',
        client: 'Xin-Cheng Wen',
        color: '#9333EA',
        desc: 'Doctoral Symposium paper on repository-level vulnerability detection collaboration.',
        tools: ['Doctoral', 'Repo-level', 'VulDet'],
        link: 'https://dl.acm.org/doi/abs/10.1145/3650212.3685562',
    },
    {
        id: 5,
        category: 'conference',
        title: 'SCALE: Constructing Structured Natural Language Comment Trees for Software Vulnerability Detection',
        venueShort: 'ISSTA 2024',
        label: 'ISSTA 2024 · CCF-A',
        year: '2024.09',
        client: 'Xin-Cheng Wen, Cuiyun Gao, Shuzheng Gao, Yang Xiao, Michael R. Lyu',
        color: '#EA2F2F',
        desc: 'Constructing structured natural language comment trees to enhance vulnerability detection.',
        tools: ['Comment Tree', 'Structured NL', 'VulDet'],
        link: 'https://dl.acm.org/doi/abs/10.1145/3650212.3652124',
    },
    {
        id: 6,
        category: 'conference',
        title: 'ReposVul: A Repository-Level High-Quality Vulnerability Dataset',
        venueShort: 'ICSE 2024 Industry',
        label: 'ICSE 2024 Industry · Best Paper',
        year: '2024.04',
        client: 'Xinchen Wang, Ruida Hu, Cuiyun Gao, Xin-Cheng Wen, Yujia Chen, Qing Liao',
        color: '#E0221E',
        desc: 'First repository-level high-quality vulnerability dataset. Won Best Paper of Industry Challenge Track.',
        tools: ['Dataset', 'Repo-level', 'Best Paper'],
        link: 'https://dl.acm.org/doi/abs/10.1145/3639478.3647634',
    },
    {
        id: 7,
        category: 'conference',
        title: 'When Less is Enough: Positive and Unlabeled Learning Model for Vulnerability Detection',
        venueShort: 'ASE 2023',
        label: 'ASE 2023 · CCF-A',
        year: '2023.09',
        client: 'Xin-Cheng Wen, Xinchen Wang, Cuiyun Gao, Shaohua Wang, Yang Liu, Zhaoquan Gu',
        color: '#AA88EE',
        desc: 'Positive and unlabeled learning model — high accuracy in vulnerability detection without full labels.',
        tools: ['PU Learning', 'VulDet', 'Few Labels'],
        link: 'https://ieeexplore.ieee.org/abstract/document/10298363',
    },
    {
        id: 8,
        category: 'conference',
        title: 'Vulnerability Detection with Graph Simplification and Enhanced Graph Representation Learning',
        venueShort: 'ICSE 2023',
        label: 'ICSE 2023 · CCF-A',
        year: '2023.05',
        client: 'Xin-Cheng Wen^, Yupan Chen^, Cuiyun Gao, Hongyu Zhang, Jie M. Zhang, Qing Liao',
        color: '#4ECDC4',
        desc: 'Final-year project at XMU. Graph simplification + enhanced graph representation learning for vulnerability detection.',
        tools: ['Graph', 'Simplification', 'XMU'],
        link: 'https://ieeexplore.ieee.org/document/10172762',
    },
    {
        id: 9,
        category: 'conference',
        title: 'CTL-MTNet: A Novel CapsNet and Transfer Learning-Based Mixed Task Net for Single-Corpus and Cross-Corpus Speech Emotion Recognition',
        venueShort: 'IJCAI 2022',
        label: 'IJCAI 2022 · CCF-A',
        year: '2022.07',
        client: 'Xin-Cheng Wen^, Jia-Xin Ye^, Yan Luo, Yong Xu, Xuan-Ze Wang, Chang-Li Wu, Kun-Hong Liu',
        color: '#7BC5FF',
        desc: 'Novel CapsNet + transfer learning mixed-task net for single-corpus and cross-corpus speech emotion recognition.',
        tools: ['CapsNet', 'Transfer', 'SER'],
        link: 'https://www.ijcai.org/proceedings/2022/0320.pdf',
    },

    // ─────────── Journal Papers (4) ───────────
    {
        id: 10,
        category: 'journal',
        title: 'VulEval: Towards Repository-Level Evaluation of Software Vulnerability Detection',
        venueShort: 'TSE 2026',
        label: 'IEEE TSE · CCF-A',
        year: '2026',
        client: 'Xin-Cheng Wen, Xinchen Wang, Yujia Chen, Ruida Hu, David Lo, Cuiyun Gao',
        color: '#0EA5E9',
        desc: 'Towards repository-level evaluation of software vulnerability detection. Completed at HITSZ in 2024.4.',
        tools: ['Evaluation', 'Repo-level', 'Benchmark'],
        link: 'https://arxiv.org/pdf/2404.15596',
    },
    {
        id: 11,
        category: 'journal',
        title: 'LIVABLE: Exploring Long-Tailed Classification of Software Vulnerability Types',
        venueShort: 'TSE 2024',
        label: 'IEEE TSE · CCF-A',
        year: '2024',
        client: 'Xin-Cheng Wen, Cuiyun Gao, Feng Luo, Haoyu Wang, Ge Li, Qing Liao',
        color: '#06B6D4',
        desc: 'Exploring long-tailed classification of software vulnerability types.',
        tools: ['Long-Tailed', 'Classification', 'VulDet'],
        link: 'https://ieeexplore.ieee.org/abstract/document/10497542',
    },
    {
        id: 12,
        category: 'journal',
        title: 'Meta-Path Based Attentional Graph Learning Model for Vulnerability Detection',
        venueShort: 'TSE 2023',
        label: 'IEEE TSE · CCF-A',
        year: '2023',
        client: 'Xin-Cheng Wen, Cuiyun Gao, Jiaxin Ye, Yichen Li, Zhihong Tian, Yan Jia, Xuan Wang',
        color: '#14B8A6',
        desc: 'Meta-path based attentional graph learning model — first HITSZ project. Completed in 2022.12.',
        tools: ['Meta-Path', 'Attention', 'Graph'],
        link: 'https://ieeexplore.ieee.org/abstract/document/10376026',
    },
    {
        id: 13,
        category: 'journal',
        title: 'GM-TCNet: Gated Multi-Scale Temporal Convolutional Network Using Emotion Causality for Speech Emotion Recognition',
        venueShort: 'Speech Comm.',
        label: 'Speech Communication · CCF-B',
        year: '2022',
        client: 'Jia-Xin Ye^, Xin-Cheng Wen^, Xuan-Ze Wang, Yong Xu, Yan Luo, Chang-Li Wu, Li-Yan Chen, Kun-Hong Liu',
        color: '#8B5CF6',
        desc: 'Gated multi-scale TCN using emotion causality for speech emotion recognition.',
        tools: ['TCN', 'Causality', 'SER'],
        link: 'https://www.sciencedirect.com/science/article/abs/pii/S0167639322000954',
    },

    // ─────────── Collaborative Papers (4) ───────────
    {
        id: 14,
        category: 'collaborative',
        title: 'MLLM-Based UI2Code Automation Guided by UI Layout Information',
        venueShort: 'ISSTA 2025',
        label: 'ISSTA 2025 · CCF-A',
        year: '2025',
        client: 'Fan Wu, Cuiyun Gao, Shuqing Li, Xin-Cheng Wen, Qing Liao',
        color: '#F59E0B',
        desc: 'MLLM-based UI-to-code automation guided by UI layout information.',
        tools: ['MLLM', 'UI2Code', 'Layout'],
        link: 'https://dl.acm.org/doi/abs/10.1145/3728925',
    },
    {
        id: 15,
        category: 'collaborative',
        title: 'What Makes Good In-context Demonstrations for Code Intelligence Tasks with LLMs?',
        venueShort: 'ASE 2023',
        label: 'ASE 2023 · CCF-A',
        year: '2023',
        client: 'Shuzheng Gao, Xin-Cheng Wen, Cuiyun Gao, Wenxuan Wang, Michael R. Lyu',
        color: '#A78BFA',
        desc: 'What makes good in-context demonstrations for code intelligence tasks with LLMs.',
        tools: ['ICL', 'Code Intel.', 'LLM'],
        link: 'https://ieeexplore.ieee.org/abstract/document/10298329',
    },
    {
        id: 16,
        category: 'collaborative',
        title: 'Emo-DNA: Emotion Decoupling and Alignment Learning for Cross-Corpus Speech Emotion Recognition',
        venueShort: 'ACM MM 2023',
        label: 'ACM MM 2023 · CCF-A',
        year: '2023',
        client: 'Jiaxin Ye, Yujie Wei, Xin-Cheng Wen, Chenglong Ma, Zhizhong Huang, Kunhong Liu, Hongming Shan',
        color: '#EC4899',
        desc: 'Emotion decoupling and alignment learning for cross-corpus speech emotion recognition.',
        tools: ['Decoupling', 'Cross-Corpus', 'SER'],
        link: 'https://dl.acm.org/doi/abs/10.1145/3581783.3611704',
    },
    {
        id: 17,
        category: 'collaborative',
        title: 'Temporal Modeling Matters: A Novel Temporal Emotional Modeling Approach for Speech Emotion Recognition',
        venueShort: 'ICASSP 2023',
        label: 'ICASSP 2023 · CCF-B',
        year: '2023',
        client: 'Jiaxin Ye, Xin-Cheng Wen, Yujie Wei, Yong Xu, Kunhong Liu, Hongming Shan',
        color: '#F472B6',
        desc: 'Novel temporal emotional modeling approach for speech emotion recognition.',
        tools: ['Temporal', 'Emotion', 'SER'],
        link: 'https://ieeexplore.ieee.org/abstract/document/10096370',
    },
];
