import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Server, 
  ShieldCheck, 
  Cloud, 
  Database, 
  Code2, 
  ExternalLink, 
  Download,
  Menu,
  X,
  ChevronRight,
  Award,
  Zap,
  CheckCircle2,
  Send
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Cloud Savings', value: '$19k+' },
    { label: 'System Uptime', value: '99.9%' },
    { label: 'Deployment Speed', value: '+60%' }
  ];

  const certifications = [
    {
      title: "CKA: Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation (CNCF)",
      link: "https://www.credly.com/badges/fcd57251-62ce-4c37-9cfc-67e566cc0174/public_url",
      icon: <Server className="w-5 h-5 text-blue-400" />,
      highlight: true
    },
    {
      title: "HashiCorp Certified: Terraform Associate",
      issuer: "HashiCorp",
      link: "https://www.credly.com/badges/04f2fc5e-b604-49a7-b6d2-2313c6c90921/public_url",
      icon: <Terminal className="w-5 h-5 text-purple-400" />,
      highlight: true
    }
  ];

  const services = [
    {
      title: "Cloud Infrastructure",
      desc: "Specializing in AWS & Azure ecosystems, high-scale Kubernetes clusters, and Docker containerization.",
      icon: <Cloud className="w-6 h-6 text-blue-400" />
    },
    {
      title: "IaC & Automation",
      desc: "Terraform & Ansible expert. Automating resource lifecycles to ensure consistent, auditable environments.",
      icon: <Terminal className="w-6 h-6 text-purple-400" />
    },
    {
      title: "Security & Compliance",
      desc: "Hardening production environments using AWS GuardDuty, Security Hub, and regular Nessus scanning.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Site Reliability",
      desc: "Managing high-volume data streams (Kafka) and centralized monitoring (Zabbix/ELK) for 24/7 stability.",
      icon: <Zap className="w-6 h-6 text-yellow-400" />
    }
  ];

  const projects = [
    {
      title: "Cloud Cost Optimization Engine",
      impact: "$19,000+ Annual Savings",
      desc: "Rerouted database backups from EFS to optimized EBS and analyzed multi-cloud expenditure to reduce monthly spend by 98%.",
      tags: ["AWS", "EBS/EFS", "Cost Analysis"]
    },
    {
      title: "National Biometric Infrastructure",
      impact: "Millions of Records",
      desc: "Architected core system for Biometric Residence Cards, implementing Kafka clusters for high-volume data ingestion.",
      tags: ["Kafka", "PostgreSQL", "On-Premise"]
    },
    {
      title: "Cross-Cloud Monitoring Hub",
      impact: "+40% Visibility",
      desc: "Engineered a centralized Zabbix platform spanning AWS and Azure for proactive fault detection.",
      tags: ["Zabbix", "Multi-Cloud", "Monitoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-200 selection:bg-blue-500/30 font-sans">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white group-hover:rotate-12 transition-transform">S</div>
            <span className="font-bold text-xl tracking-tight text-white">Mohd Salman Isha</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#expertise" className="hover:text-blue-400 transition-colors">Expertise</a>
            <a href="#work" className="hover:text-blue-400 transition-colors">Featured Work</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">Certifications</a>
            <a href="mailto:salman.isha@hotmail.com" className="px-5 py-2 bg-white text-black rounded-full hover:bg-blue-500 hover:text-white transition-all">Get in touch</a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0a0a0c] pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6 text-2xl font-bold">
            <a href="#expertise" onClick={() => setIsMenuOpen(false)}>Expertise</a>
            <a href="#work" onClick={() => setIsMenuOpen(false)}>Work</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>Certifications</a>
            <a href="mailto:salman.isha@hotmail.com" className="text-blue-500">Contact</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
               <CheckCircle2 className="w-4 h-4 text-blue-400" />
               <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">CKA Certified</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full">
               <CheckCircle2 className="w-4 h-4 text-purple-400" />
               <span className="text-purple-400 text-xs font-bold uppercase tracking-wider">Terraform Associate</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8 max-w-4xl">
            DevOps Engineer & <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-extrabold tracking-tight">Infrastructure Architect.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Over 10 years experience specializing in designing resilient, high-scale cloud infrastructure on AWS and Kubernetes. Proven expertise in IaC, pipeline automation, and large-scale Linux environments.
          </p>

          <div className="flex flex-wrap gap-4 mb-20">
          <a href="mailto:salman.isha@hotmail.com" className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all flex items-center gap-2 shadow-lg shadow-emerald-600/20">
              <Send className="w-5 h-5 text-white" /> <span className="text-white">Get In Touch</span>
            </a>
            <div className="flex items-center gap-3 px-4 border-l border-white/10 ml-2">
              <a href="https://linkedin.com/in/salmanisha/" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="https://github.com/Salmanisha" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-white/5">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-white mb-1 tracking-tight">{stat.value}</div>
                <div className="text-slate-500 text-xs uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Expertise</h2>
              <h3 className="text-4xl font-bold text-white">Verified Architectural <br />Capabilities.</h3>
            </div>
            <p className="text-slate-400 max-w-md">
              Focusing on scalable architectures that combine performance, security, and cost-efficiency across multi-cloud environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all group">
                <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{s.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white">Featured Impact</h2>
            <div className="h-px flex-1 bg-white/10"></div>
          </div>

          <div className="grid gap-6">
            {projects.map((p, i) => (
              <div key={i} className="group relative bg-white/5 border border-white/5 rounded-3xl p-8 md:p-12 hover:bg-white/[0.07] transition-all overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-blue-500/20 group-hover:text-blue-500/40 transition-colors">
                  <Terminal size={120} />
                </div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-10 items-start">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded-full mb-6 uppercase tracking-wider">
                      Case Study
                    </span>
                    <h4 className="text-3xl font-bold text-white mb-4 tracking-tight">{p.title}</h4>
                    <p className="text-slate-400 text-lg mb-8 max-w-2xl leading-relaxed">{p.desc}</p>
                    <div className="flex flex-wrap gap-3">
                      {p.tags.map(t => (
                        <span key={t} className="px-4 py-1.5 bg-black/40 border border-white/10 rounded-full text-sm text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="w-full md:w-64 bg-black/40 border border-white/10 rounded-2xl p-6 flex flex-col justify-center border-l-4 border-l-blue-500">
                    <span className="text-slate-500 text-xs uppercase font-bold mb-2">Key Outcome</span>
                    <span className="text-2xl font-bold text-blue-400 tracking-tight">{p.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Horizontal Scroll */}
      <section className="py-20 border-y border-white/5 bg-black/20">
        <div className="max-w-6xl mx-auto px-6 overflow-hidden">
          <div className="flex gap-12 items-center justify-between whitespace-nowrap opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {['AWS', 'Azure', 'Kubernetes', 'Terraform', 'Ansible', 'Kafka', 'PostgreSQL', 'Python', 'Docker', 'ELK Stack'].map(tech => (
              <span key={tech} className="text-2xl font-bold tracking-tighter text-white">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            {/* Left Column: Certs & Education */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-3">
                <Award className="text-blue-500" /> Industry Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, i) => (
                  <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:bg-white/[0.08] transition-all group">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                        {cert.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-1 leading-snug">{cert.title}</h4>
                        <p className="text-slate-500 text-sm mb-3">{cert.issuer}</p>
                        {cert.link && (
                          <a href={cert.link} target="_blank" className="text-xs text-blue-400 font-bold flex items-center gap-1 hover:underline">
                            Verify Credential <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-10 mt-20 flex items-center gap-3">
                <div className="p-1 bg-purple-500/20 rounded"><Code2 className="text-purple-500" size={20} /></div> Education
              </h3>
              <div className="space-y-8">
                <div className="relative pl-8 border-l border-white/10">
                  <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[6px] top-2 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                  <h4 className="font-bold text-white">MSc: Cyber Security</h4>
                  <p className="text-slate-400 text-sm">University of Wolverhampton • 2022</p>
                </div>
                <div className="relative pl-8 border-l border-white/10">
                  <div className="absolute w-3 h-3 bg-white/20 rounded-full -left-[6px] top-2"></div>
                  <h4 className="font-bold text-white">BSc: Computer Science & Engineering</h4>
                  <p className="text-slate-400 text-sm">Ahsanullah University of Science and Technology • 2011</p>
                </div>
              </div>
            </div>

            {/* Right Column: Professional Path */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-10">Professional Path</h3>
              <div className="space-y-12">
                {[
                  { company: "Neota", role: "DevOps Engineer", date: "2023 - Present", loc: "London" },
                  { company: "Tiger IT Bangladesh", role: "DevOps Engineer", date: "2019 - 2021", loc: "Dhaka" },
                  { company: "Wunderman Thompson", role: "Operations Engineer", date: "2015 - 2019", loc: "Dhaka" },
                  { company: "Solution9 Limited", role: "IT Operations Engineer", date: "2011 - 2015", loc: "Dhaka" }
                ].map((exp, i) => (
                  <div key={i} className="group cursor-default relative pl-6 border-l border-white/5 hover:border-blue-500 transition-colors">
                    <div className="flex justify-between items-center mb-1 text-blue-500 font-mono text-xs uppercase tracking-widest font-bold">
                      {exp.date}
                      <span className="text-slate-600 font-sans tracking-normal font-normal text-xs lowercase italic">@{exp.loc}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h4>
                    <p className="text-slate-500">{exp.company}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center font-bold text-white text-xs">S</div>
              <span className="font-bold text-lg text-white tracking-tight">Mohd Salman Isha</span>
            </div>
            <p className="text-slate-500 max-w-xs text-sm">
              SRE & DevOps specialist based in London. Let's build stable, scalable systems together.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-8">
              <a href="https://linkedin.com/in/salmanisha/" className="text-slate-400 hover:text-white transition-all text-sm font-medium">LinkedIn</a>
              <a href="https://github.com/Salmanisha" className="text-slate-400 hover:text-white transition-all text-sm font-medium">GitHub</a>
              <a href="mailto:salman.isha@hotmail.com" className="text-slate-400 hover:text-white transition-all text-sm font-medium">Email</a>
            </div>
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} Mohd Salman Isha. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
