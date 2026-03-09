import { motion, AnimatePresence } from "motion/react";
import { Mail, Briefcase, User, Home, FolderKanban, ChevronRight, Github, Twitter, Instagram, Youtube, Linkedin, ExternalLink, ArrowUp, Heart } from "lucide-react";
import React, { useState, useEffect } from "react";

// --- Types ---
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  color: string;
}

interface Experience {
  id: number;
  period: string;
  role: string;
  company: string;
  description: string;
  color: string;
}

interface Hobby {
  id: number;
  name: string;
  icon: string;
  description: string;
  color: string;
}

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Studio user research and analysis",
    category: "UI/UX Design",
    description: "In ultricies viverra sed at hendrerit drogon nunc scelerisque nisl pellentesque et dignissim at aenean tempor adipiscing eget mi diam at tempus.",
    image: "https://picsum.photos/seed/studio/800/600",
    color: "bg-brand-purple"
  },
  {
    id: 2,
    title: "Venture Workspace web app redesign",
    category: "Web Design",
    description: "In ultricies viverra sed at hendrerit drogon nunc scelerisque nisl pellentesque et dignissim at aenean tempor adipiscing eget mi diam at tempus.",
    image: "https://picsum.photos/seed/venture/800/600",
    color: "bg-brand-blue"
  },
  {
    id: 3,
    title: "EcoTrack Sustainability Platform",
    category: "Product Design",
    description: "A comprehensive platform for tracking and reducing carbon footprints for small to medium enterprises.",
    image: "https://picsum.photos/seed/eco/800/600",
    color: "bg-emerald-500"
  }
];

const EXPERIENCES: Experience[] = [
  {
    id: 1,
    period: "Jan 2023 - Jan 2026",
    role: "国际物流",
    company: "Studio Design Agency",
    description: "国际/国内物流整体信息化解决方案",
    color: "bg-brand-blue"
  },
  {
    id: 2,
    period: "Feb 2021 - Dec 2023",
    role: "低代码平台",
    company: "Venture Tech",
    description: "低代码搭建智慧社区平台",
    color: "bg-brand-yellow"
  },
  {
    id: 3,
    period: "Sep 2018 - Feb 2021",
    role: "政府服务",
    company: "Freelance",
    description: "政务服务行业解决方案与平台设计规范",
    color: "bg-brand-pink"
  }
];

const HOBBIES: Hobby[] = [
  {
    id: 1,
    name: "摄影",
    icon: "📸",
    description: "捕捉美好瞬间，通过镜头探索视觉故事。",
    color: "bg-brand-pink"
  },
  {
    id: 2,
    name: "滑板",
    icon: "🛹",
    description: "一个不会做dropping的陆冲野生滑手，滑起来享受身体和灵魂的自由。",
    color: "bg-brand-blue"
  },
  {
    id: 3,
    name: "剑术",
    icon: "⚔️",
    description: "剑术入门2个月，努力练习手腕灵活度，强身健体；",
    color: "bg-brand-purple"
  },
  {
    id: 4,
    name: "书法",
    icon: "✍️",
    description: "练习隶书曹全碑中，修身养性，学习传统文化。",
    color: "bg-brand-yellow"
  }
];

// --- Components ---

const Navbar = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
  const tabs = [
    { id: 'home', label: '首页', icon: Home },
    { id: 'experience', label: '经历', icon: Briefcase },
    { id: 'works', label: '作品', icon: FolderKanban },
    { id: 'hobbies', label: '爱好', icon: Heart },
    { id: 'about', label: '关于', icon: User },
  ];

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl">
      <div className="bg-black brutal-border rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center justify-between border-white/20">
        <motion.div 
          whileHover={{ rotate: 180 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setActiveTab('home')}
        >
          <div className="w-8 h-8 rounded-full border-4 border-white flex items-center justify-center font-bold text-xl text-white">O</div>
        </motion.div>
        
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative font-bold transition-colors hover:text-brand-pink py-1 ${activeTab === tab.id ? 'text-brand-pink' : 'text-white'}`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-brand-pink rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-full px-4">
        <div className="bg-white/90 backdrop-blur-md brutal-border rounded-2xl p-2 flex justify-around items-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`p-3 rounded-xl transition-all relative ${activeTab === tab.id ? 'text-white' : 'text-black hover:bg-gray-100'}`}
            >
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTabMobile"
                  className="absolute inset-0 bg-brand-pink rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <tab.icon size={24} />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const SectionWrapper = ({ children }: { children: React.ReactNode, key?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Hero = ({ onExplore, setActiveTab }: { onExplore: () => void, setActiveTab: (tab: string) => void }) => {
  return (
    <section className="min-h-screen pt-12 md:pt-16 pb-20 px-4 md:px-6 flex flex-col items-center justify-center max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "backOut" }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl leading-tight md:leading-none mb-6 md:mb-8 text-center lg:text-left text-black">
            我是<br />
            <motion.span 
              className="bg-pink-400 border-2 border-black px-2 py-1"
              whileHover={{ 
                rotate: [0, 5, -5, 5, 0],
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
            >李是这个李</motion.span>，<br />
            A Product Manager，<br />
            练习时长<motion.span 
              className="bg-blue-400 border-2 border-black px-2 py-1"
              whileHover={{ 
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
            >六年半</motion.span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
            产品经理｜AI 智能体搭建｜Vibe Coding｜PMP 项目管理<br />
            擅长从 0 到 1 全生命周期产品设计
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.button 
              whileHover={{ scale: 1.05, x: 2, y: 2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('about')}
              className="brutal-btn flex items-center gap-2"
            >
              <User size={20} /> More about me
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, x: 2, y: 2 }}
              whileTap={{ scale: 0.95 }}
              className="brutal-btn flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> Contact
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="relative max-w-md mx-auto lg:max-w-none"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="brutal-card bg-brand-yellow p-3 md:p-4 aspect-square flex items-end justify-center"
          >
             <motion.img 
               src="/assets/self_image.png" 
               alt="李璐璐" 
               className="w-full h-full object-cover rounded-2xl border-4 border-black"
               referrerPolicy="no-referrer"
               whileHover={{ scale: 1.05, rotate: 2 }}
               transition={{ type: "spring", stiffness: 400, damping: 10 }}
             />
          </motion.div>
          {/* Decorative elements */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -top-4 md:-top-6 -right-4 md:-right-6 w-10 md:w-12 h-10 md:h-12 bg-brand-pink rounded-full brutal-border" 
          />
          <motion.div 
            animate={{ x: [0, 10, 0], rotate: [12, 0, 12] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 w-14 md:w-16 h-14 md:h-16 bg-brand-blue brutal-border rotate-12" 
          />
        </motion.div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl mb-6 md:mb-8 leading-tight">
            <motion.span 
              className="bg-blue-400 border-2 border-black px-2 py-1"
              whileHover={{ 
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.2, ease: "easeInOut" }
              }}
            >这是我的经历</motion.span>
          </h2>

          <button className="brutal-btn">See full resume</button>
        </motion.div>

        <div className="space-y-8 relative">
          {/* Vertical line for timeline */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-black ml-[22px] hidden md:block" />
          
          <div className="space-y-8">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative md:pl-16"
              >
                <div className={`hidden md:flex absolute left-0 top-0 w-12 h-12 rounded-full border-4 border-black ${exp.color} items-center justify-center z-10 brutal-border shadow-none`}>
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="brutal-card p-6 md:p-8"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                    <span className="font-bold text-gray-500 text-sm md:text-base">{exp.period}</span>
                    <div className={`w-10 h-10 rounded-lg border-2 border-black ${exp.color} flex items-center justify-center flex-shrink-0`}>
                      <Briefcase size={20} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl mb-2">{exp.role}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{exp.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const WorksSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:text-center"
      >
        <h2 className="text-4xl sm:text-5xl md:text-7xl mb-6 leading-tight">
            这是我的 <br className="lg:hidden" />
            <span className="highlight-yellow mt-4 lg:mt-0">设计作品</span>
          </h2>
      </motion.div>

      <div className="space-y-12 md:space-y-16">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="brutal-card grid grid-cols-1 lg:grid-cols-2 group"
          >
            <div className="p-6 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-purple rounded-lg flex items-center justify-center text-white font-bold">S</div>
                <span className="font-bold text-lg md:text-xl">studio</span>
              </div>
              <div className="bg-black text-white px-3 py-1 rounded-full text-xs md:text-sm font-bold w-fit mb-6">
                {project.category}
              </div>
              <h3 className="text-3xl md:text-4xl mb-6">{project.title}</h3>
              <p className="text-gray-600 text-base md:text-lg mb-8">{project.description}</p>
              <motion.button 
                whileHover={{ x: 10 }}
                className="flex items-center gap-2 font-bold group/btn"
              >
                View case study <ChevronRight className="group-hover/btn:text-brand-pink transition-colors" />
              </motion.button>
            </div>
            <div className={`${project.color} p-6 md:p-10 flex items-center justify-center border-t-4 lg:border-t-0 lg:border-l-4 border-black overflow-hidden`}>
              <motion.div 
                whileHover={{ scale: 1.05, rotate: 0 }}
                className="bg-white brutal-border rounded-2xl p-3 md:p-4 w-full max-w-md rotate-2 transition-all duration-500"
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto rounded-lg border-2 border-black"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>


    </section>
  );
};

const HobbiesSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl md:text-7xl mb-6 leading-tight">
            <span className="highlight-pink mt-4 lg:mt-0">爱好 & 兴趣</span>
          </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          不工作的时候，喜欢倒腾这些，它们让我保持热爱生活和创造力。
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {HOBBIES.map((hobby, index) => (
          <motion.div
            key={hobby.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="brutal-card p-8 flex flex-col items-center text-center group"
          >
            <div className="w-20 h-20 rounded-2xl border-4 border-black bg-black flex items-center justify-center text-4xl mb-6 brutal-border shadow-none group-hover:rotate-12 transition-transform">
              <div className={`w-full h-full rounded-xl flex items-center justify-center ${hobby.color} border-2 border-black`}>
                {hobby.id === 2 ? '🛹' : hobby.icon}
              </div>
            </div>
            <h3 className="text-2xl mb-4">{hobby.name}</h3>
            <p className="text-gray-600">{hobby.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative max-w-md mx-auto lg:max-w-none"
        >
          <div className="rounded-full border-4 md:border-8 border-black aspect-square overflow-hidden bg-brand-pink relative">
            <img 
              src="/assets/anout_me.png" 
              alt="李是这个李" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 bg-brand-yellow brutal-border p-4 md:p-6 rounded-2xl rotate-6"
          >
            <p className="font-bold text-xl md:text-2xl">6+ Years</p>
          </motion.div>
        </motion.div>

        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-7xl mb-6 md:mb-8 leading-tight"
          >
            Welcome to <br className="lg:hidden" />
            <span className="bg-blue-400 border-2 border-black px-2 py-1">李是这个李</span>的世界！
          </motion.h2>
  
          
          <div className="space-y-6 mb-10">
            {[  
              { color: 'bg-brand-blue', title: '6 年产品经验', text: '从 B 端到 G 端，从 0 到 1 全流程拿捏，产品圈摸爬滚打经验值拉满。' },
              { color: 'bg-brand-pink', title: 'AI 折腾爱好者', text: '热衷于探索 AI 技术在产品中的应用，擅长使用 AI 工具提升产品设计和开发效率。' },
              { color: 'bg-brand-yellow', title: 'PMP 认证选手', text: '跨部门协作、带项目都很稳，保证活儿干得漂亮还不翻车。' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="flex items-start gap-4"
              >
                <div className={`w-8 h-8 rounded-lg ${item.color} brutal-border mt-1 flex-shrink-0`} />
                <div>
                  <h4 className="text-xl md:text-2xl font-bold">{item.title}</h4>
                  <p className="text-gray-600 text-sm md:text-base">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ setActiveTab }: { setActiveTab: (tab: string) => void }) => {
  return (
    <footer className="bg-black text-white pt-16 md:pt-20 pb-24 md:pb-10 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white brutal-border rounded-3xl p-6 md:p-12 mb-16 md:mb-20 flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-blue rounded-full border-4 border-black flex items-center justify-center flex-shrink-0">
              <Mail size={32} className="text-white md:hidden" />
              <Mail size={40} className="text-white hidden md:block" />
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-5xl text-black">留下你的联系方式</h3>
          </div>
          <div className="flex flex-col sm:flex-row w-full lg:w-auto brutal-border rounded-xl overflow-hidden">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-white text-black px-4 md:px-6 py-3 md:py-4 outline-none w-full sm:w-64 md:w-80"
            />
            <button className="bg-black text-white px-6 md:px-8 py-3 md:py-4 font-bold hover:bg-gray-800 transition-colors">
              确定
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-bold">O</div>
              <span className="text-2xl font-bold">Paperfolio X</span>
            </div>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor amet consecte adipiscing elit. Lectus mattis nunc.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <motion.button 
                  key={i} 
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-brand-blue border-2 border-white flex items-center justify-center"
                >
                  <Icon size={20} />
                </motion.button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Pages</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" onClick={() => setActiveTab('home')} className="hover:text-white transition-colors cursor-pointer">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Utility Pages</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Style Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Licenses</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contact us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-2"><Mail size={16} /> hello@example.com</li>
              <li className="flex items-center gap-2"><ExternalLink size={16} /> +1 (555) 000-0000</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-10 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} John Carter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <SectionWrapper key="home">
            <Hero onExplore={() => setActiveTab('works')} setActiveTab={setActiveTab} />
            <ExperienceSection />
            <WorksSection />
            <HobbiesSection />
            <AboutSection />
          </SectionWrapper>
        );
      case 'experience':
        return (
          <SectionWrapper key="experience">
            <ExperienceSection />
          </SectionWrapper>
        );
      case 'works':
        return (
          <SectionWrapper key="works">
            <WorksSection />
          </SectionWrapper>
        );
      case 'hobbies':
        return (
          <SectionWrapper key="hobbies">
            <HobbiesSection />
          </SectionWrapper>
        );
      case 'about':
        return (
          <SectionWrapper key="about">
            <AboutSection />
          </SectionWrapper>
        );
      default:
        return (
          <SectionWrapper key="default">
            <Hero onExplore={() => setActiveTab('works')} setActiveTab={setActiveTab} />
          </SectionWrapper>
        );
    }
  };

  return (
    <div className="min-h-screen selection:bg-brand-pink selection:text-white overflow-x-hidden bg-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="pt-20 md:pt-24 lg:pt-28">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>

      <Footer setActiveTab={setActiveTab} />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-24 md:bottom-10 right-6 z-50 bg-black text-white p-4 rounded-full brutal-border shadow-lg hover:bg-gray-800 transition-colors"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
