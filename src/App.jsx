import { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Terminal, 
  Server, 
  ShieldCheck, 
  Cloud, 
  Code2, 
  ExternalLink, 
  Download,
  Menu,
  X,
  ChevronRight,
  Award,
  Zap,
  CheckCircle2,
  Send,
  Phone,
  MapPin
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
    { label: 'Annual Cloud Savings', value: '$19k+' },
    { label: 'Client-Facing Uptime', value: '99.9%' },
    { label: 'Faster Deployments', value: '60%' }
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
      desc: "Automating resource lifecycles with Terraform & Ansible — consistent, auditable infrastructure across AWS and Azure.",
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
      title: "Cloud Cost Optimization",
      impact: "$19,000+ Annual Savings",
      desc: "Discovered a costly EFS backup misconfiguration and rerouted database backups to optimized EBS storage — cutting monthly cloud spend by 98% (~$19,000+ annualised).",
      tags: ["AWS", "EBS/EFS", "FinOps"]
    },
    {
      title: "National Biometric Infrastructure",
      impact: "Millions of Citizen Records",
      desc: "Engineered the core platform for a government Biometric Residence Card system with 24/7 high-throughput demands. Architected Kafka clusters for low-latency ingestion — 99.99% data durability with sub-second delivery to downstream services.",
      tags: ["Kafka", "PostgreSQL", "MinIO", "On-Premise"]
    },
    {
      title: "Cross-Cloud Monitoring Hub",
      impact: "100+ Servers Monitored",
      desc: "Designed and deployed a centralised Zabbix platform spanning AWS and Azure, extending coverage to 100+ servers with threshold-based alerts and triggers for on-call responders.",
      tags: ["Zabbix", "Multi-Cloud", "Monitoring"]
    },
    {
      // Hidden until the remaining site improvements land (CONTENT-PLAN.md section 5)
      visible: false,
      title: "This Site: Self-Hosted Infrastructure",
      impact: "3 Replicas, Auto-Scaled",
      desc: "This portfolio runs on my own K3s cluster — multi-stage Docker build, nginx, Traefik Gateway API routing, and a CPU-based HorizontalPodAutoscaler.",
      tags: ["K3s", "Docker", "Traefik", "Gateway API"]
    }
  ];

  const skillGroups = [
    { category: "Cloud Platforms", skills: ["AWS", "Azure", "Multi-Cloud Strategy"] },
    { category: "Containers", skills: ["Kubernetes (CKA)", "EKS", "Docker", "Helm", "K3s"] },
    { category: "IaC & CI/CD", skills: ["Terraform", "Ansible", "GitHub Actions", "Jenkins", "GoCD", "GitOps"] },
    { category: "Observability", skills: ["Zabbix", "ELK Stack", "Incident Response"] },
    { category: "Data & Streaming", skills: ["Kafka", "PostgreSQL", "MySQL", "Redis", "MinIO"] },
    { category: "Security & Compliance", skills: ["GuardDuty", "Security Hub", "WAF", "Nessus", "IAM"] },
    { category: "Reliability & FinOps", skills: ["High Availability", "Disaster Recovery", "Cost Optimization", "Rightsizing"] },
    { category: "Scripting & OS", skills: ["Python", "Bash", "Linux Administration"] }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-200 selection:bg-blue-500/30 font-sans">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white group-hover:rotate-12 transition-transform">S</div>
            <span className="font-bold text-xl tracking-tight text-white">Mohd Salman Isha</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#expertise" className="hover:text-blue-400 transition-colors">Expertise</a>
            <a href="#work" className="hover:text-blue-400 transition-colors">Featured Work</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">Certifications</a>
            {/* Blog Link */}
            <a href="https://blog.salmanisha.com" className="hover:text-blue-400 transition-colors">Blog</a>
             {/* Download CV Button */}
            <a 
              href="/CV_Salman_Isha.pdf" 
              download="CV_Salman_Isha.pdf"
              className="flex items-center gap-2 px-5 py-2 bg-white text-black rounded-full hover:bg-emerald-600 hover:text-white transition-all font-bold shadow-lg shadow-white/5"
            >
              <Download size={16} />
              Download CV
            </a>
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
            <a href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#expertise" onClick={() => setIsMenuOpen(false)}>Expertise</a>
            <a href="#work" onClick={() => setIsMenuOpen(false)}>Work</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>Certifications</a>
            <a href="https://blog.salmanisha.com" onClick={() => setIsMenuOpen(false)}>Blog</a>
            <a 
              href="/CV_Salman_Isha.pdf" 
              download 
              className="text-emerald-500 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Download /> Download CV
            </a>
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
            Senior DevOps Engineer & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-extrabold tracking-tight">Infrastructure Architect.</span>
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            Senior DevOps / SRE Engineer with 10+ years architecting and operating resilient multi-cloud platforms across AWS, Azure, and on-premises from national-scale government systems to client-facing applications. Proven record of 98% cloud cost reduction and 99.9%+ uptime.
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
          <a href="mailto:salman.isha@hotmail.com" className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-all flex items-center gap-2 shadow-lg shadow-emerald-600/20">
              <Send className="w-5 h-5 text-white" /> <span className="text-white">Get In Touch</span>
            </a>
            <div className="flex items-center gap-3 px-4 border-l border-white/10 ml-2">
              <a href="https://linkedin.com/in/salmanisha/" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="https://github.com/Salmanisha" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Github className="w-5 h-5" /></a>
              <a href="tel:+447599664271" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors"><Phone className="w-5 h-5" /></a>
            </div>
          </div>

          <p className="flex items-center gap-2 text-slate-500 text-sm mb-20">
            <MapPin size={16} className="text-blue-400" /> London, UK · Open to onsite / hybrid / UK remote
          </p>

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
            {projects.filter(p => p.visible !== false).map((p, i) => (
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

      {/* Skills Matrix */}
      <section id="skills" className="py-24 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Skills Matrix</h2>
            <h3 className="text-4xl font-bold text-white">The Production Toolbox.</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map(g => (
              <div key={g.category} className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all">
                <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{g.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-black/40 border border-white/10 rounded-full text-xs text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
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
                  <h4 className="font-bold text-white">MSc: Cyber Security with Professional Practice</h4>
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
                  {
                    company: "Neota Logic Ltd",
                    role: "DevOps Engineer",
                    date: "2023 - Present",
                    loc: "London",
                    points: [
                      "Cut monthly cloud spend by 98% (~$19k+ annualised) by resolving an EFS-to-EBS backup misconfiguration",
                      "Built a centralised Zabbix platform spanning AWS & Azure — 100+ servers under threshold-based alerting",
                      "Automated multi-cloud provisioning with Terraform & Ansible; 99.9% uptime on client-facing applications"
                    ]
                  },
                  {
                    company: "University of Wolverhampton",
                    role: "Full-time MSc, Cyber Security",
                    date: "2021 - 2022",
                    loc: "UK",
                    edu: true
                  },
                  {
                    company: "Tiger IT Bangladesh",
                    role: "DevOps Engineer",
                    date: "2019 - 2021",
                    loc: "Dhaka",
                    points: [
                      "Engineered core infrastructure for a government Biometric Residence Card system — millions of citizen records, 24/7 throughput",
                      "Architected Kafka ingestion at 99.99% data durability; cut deployment time 60% with end-to-end Ansible automation"
                    ]
                  },
                  {
                    company: "Wunderman Thompson",
                    role: "Operations Engineer",
                    date: "2015 - 2019",
                    loc: "Dhaka",
                    points: [
                      "Managed core AWS infrastructure across a hybrid Windows/Linux estate, owning database availability",
                      "Automated the CI/CD pipeline with GoCD — ~40% faster time-to-market for new features"
                    ]
                  },
                  {
                    company: "Solution9 Limited",
                    role: "IT Operations Engineer",
                    date: "2011 - 2015",
                    loc: "Dhaka",
                    points: [
                      "Maintained hybrid Linux/Windows infrastructure and Xen virtualisation for co-location clients",
                      "Implemented configuration management and scheduled backups across production and development"
                    ]
                  }
                ].map((exp, i) => (
                  <div key={i} className="group cursor-default relative pl-6 border-l border-white/5 hover:border-blue-500 transition-colors">
                    <div className="flex justify-between items-center mb-1 text-blue-500 font-mono text-xs uppercase tracking-widest font-bold">
                      <span className="flex items-center gap-2">
                        {exp.date}
                        {exp.edu && (
                          <span className="px-2 py-0.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 font-sans normal-case tracking-normal font-bold">
                            Education
                          </span>
                        )}
                      </span>
                      <span className="text-slate-600 font-sans tracking-normal font-normal text-xs lowercase italic">@{exp.loc}</span>
                    </div>
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h4>
                    <p className="text-slate-500">{exp.company}</p>
                    {exp.points && (
                      <ul className="mt-3 space-y-2">
                        {exp.points.map(pt => (
                          <li key={pt} className="flex items-start gap-2 text-sm text-slate-400 leading-relaxed">
                            <ChevronRight size={14} className="mt-1 shrink-0 text-blue-500" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    )}
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
              Senior DevOps Engineer based in London. Let's build stable, scalable systems together.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-8">
              <a href="https://linkedin.com/in/salmanisha/" className="text-slate-400 hover:text-white transition-all text-sm font-medium">LinkedIn</a>
              <a href="https://github.com/Salmanisha" className="text-slate-400 hover:text-white transition-all text-sm font-medium">GitHub</a>
              <a href="mailto:salman.isha@hotmail.com" className="text-slate-400 hover:text-white transition-all text-sm font-medium">Email</a>
              <a href="tel:+447599664271" className="text-slate-400 hover:text-white transition-all text-sm font-medium">+44 7599 664271</a>
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
