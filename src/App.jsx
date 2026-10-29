import { useEffect, useState } from 'react';

function Sharingan({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 300 300" role="img" aria-label="Animated Sharingan eye">
      <defs>
        <radialGradient id="eyeRed" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#ff7777" />
          <stop offset="42%" stopColor="#e20d21" />
          <stop offset="78%" stopColor="#76000b" />
          <stop offset="100%" stopColor="#160306" />
        </radialGradient>
        <filter id="eyeGlow"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <circle cx="150" cy="150" r="143" fill="#120406" stroke="#8d0a17" strokeWidth="3" />
      <circle cx="150" cy="150" r="130" fill="url(#eyeRed)" stroke="#ff3445" strokeWidth="2" />
      <circle cx="150" cy="150" r="103" fill="none" stroke="#310008" strokeWidth="3" />
      {[0, 120, 240].map((rotation) => (
        <g key={rotation} transform={`rotate(${rotation} 150 150)`} filter="url(#eyeGlow)">
          <path d="M150 54 C174 62 185 82 177 101 C172 113 160 119 150 128 C145 107 131 91 137 74 C140 65 145 59 150 54Z" fill="#160307" stroke="#ff1b32" strokeWidth="2" />
          <circle cx="150" cy="77" r="5" fill="#ff243a" />
        </g>
      ))}
      <circle cx="150" cy="150" r="37" fill="#130306" stroke="#ff3043" strokeWidth="3" />
      <circle cx="150" cy="150" r="18" fill="#050304" stroke="#b80c20" strokeWidth="2" />
      <circle cx="150" cy="150" r="7" fill="#ff3348" />
      <circle cx="150" cy="150" r="139" fill="none" stroke="#ff3445" strokeWidth="1" opacity=".6" />
    </svg>
  );
}

const skills = ['Python', 'HTML / CSS', 'SQL', 'AWS', 'JavaScript', 'React'];

function App() {
  const [entered, setEntered] = useState(false);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [active, setActive] = useState('about');

  useEffect(() => {
    const move = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
      setCursorVisible(true);
    };
    const leave = () => setCursorVisible(false);
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('intro-active', !entered);
    return () => document.body.classList.remove('intro-active');
  }, [entered]);

  const openSection = (section) => {
    setActive(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <main className="site-shell">
      <div className={`custom-cursor ${cursorVisible ? 'visible' : ''}`} style={{ left: cursor.x, top: cursor.y }} aria-hidden="true">
        <span />
      </div>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {!entered && (
        <section className="intro-screen" aria-label="Portfolio intro">
          <div className="intro-top mono"><span>UCHIHA ARCHIVE</span><span>SECURE ACCESS // 001</span></div>
          <div className="intro-content">
            <div className="eye-halo"><div className="orbit orbit-a" /><div className="orbit orbit-b" /><Sharingan className="intro-eye" /></div>
            <p className="eyebrow mono">A DEVELOPER'S AWAKENING</p>
            <h1 className="intro-heading">THE <span>SHARINGAN</span></h1>
            <p className="intro-copy">Every great journey begins with a single step.</p>
            <button className="enter-button mono" onClick={() => setEntered(true)}>ENTER THE SHINOBI WORLD <span aria-hidden="true">↗</span></button>
            <p className="intro-hint mono">CLICK TO UNLOCK THE PORTFOLIO</p>
          </div>
          <div className="intro-bottom mono"><span>ARAVIND R.</span><span>WILLPOWER // CURIOSITY // CODE</span></div>
        </section>
      )}

      <div className={`portfolio ${entered ? 'portfolio-visible' : 'portfolio-hidden'}`}>
        <header className="topbar">
          <a className="brand mono" href="#home" onClick={() => setActive('about')}><span className="brand-mark">◉</span> ARAVIND<span className="red">.DEV</span></a>
          <nav className="nav-links" aria-label="Main navigation">
            {['about', 'skills', 'projects', 'contact'].map((item) => <button key={item} className={active === item ? 'nav-link active' : 'nav-link'} onClick={() => openSection(item)}>{item}</button>)}
          </nav>
          <span className="availability mono"><i /> AVAILABLE TO LEARN</span>
        </header>

        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow mono"><span className="eyebrow-line" /> PORTFOLIO / 2026</p>
            <h1>Turning curiosity<br />into <span className="red italic">creation.</span></h1>
            <p className="hero-description">Hey, I'm <strong>Aravind R.</strong> — a BCA student and aspiring developer exploring software, AI, and cloud technology. I'm here to learn, build, and keep getting better.</p>
            <div className="hero-actions"><button className="primary-button" onClick={() => openSection('projects')}>Explore my work <span>↗</span></button><button className="text-button" onClick={() => openSection('contact')}>Let's connect <span>→</span></button></div>
            <div className="hero-meta mono"><span><b>01</b> / DEVELOPER IN PROGRESS</span><span>BASED IN INDIA</span></div>
          </div>
          <div className="hero-visual">
            <div className="visual-grid" />
            <div className="visual-label label-top mono">FIG. 001 — AWAKENING</div>
            <div className="hero-eye-wrap"><div className="hero-eye-ring ring-one" /><div className="hero-eye-ring ring-two" /><Sharingan className="hero-eye" /></div>
            <div className="visual-label label-bottom mono"><span>瞳術</span> FOCUS / DISCIPLINE / EVOLVE</div>
            <div className="vertical-note mono">POWER COMES FROM PRACTICE</div>
          </div>
        </section>

        <div className="ticker mono"><div>LEARN CONSTANTLY <b>✳</b> BUILD WITH PURPOSE <b>✳</b> THINK DIFFERENTLY <b>✳</b> STAY CURIOUS <b>✳</b> LEARN CONSTANTLY <b>✳</b> BUILD WITH PURPOSE <b>✳</b></div></div>

        <section className="dashboard">
          <article className="panel about-panel" id="about">
            <div className="panel-head mono"><span>01 / ABOUT ME</span><span>PROFILE</span></div>
            <div className="about-symbol"><span>影</span></div>
            <h2>Still learning.<br /><span className="red">Always building.</span></h2>
            <p>I'm a Bachelor of Computer Applications student who enjoys solving problems and exploring how technology can make everyday life better. My current path is focused on programming, web development, and cloud computing.</p>
            <div className="panel-foot mono"><span>STATUS: LEVELING UP</span><span>↗</span></div>
          </article>

          <article className="panel skills-panel" id="skills">
            <div className="panel-head mono"><span>02 / SKILL TREE</span><span>MY LOADOUT</span></div>
            <h2>Tools of the <span className="red">trade.</span></h2>
            <p className="muted">Technologies I'm learning and working with.</p>
            <div className="skill-list">{skills.map((skill, index) => <div className="skill-row" key={skill}><span className="skill-index mono">0{index + 1}</span><span>{skill}</span><span className="skill-plus">↗</span></div>)}</div>
            <div className="panel-foot mono"><span>MORE SKILLS IN PROGRESS</span><span>+</span></div>
          </article>

          <article className="panel projects-panel" id="projects">
            <div className="panel-head mono"><span>03 / MISSIONS</span><span>SELECTED WORK</span></div>
            <div className="project-art"><div className="pixel-sun" /><div className="pixel-hill hill-a" /><div className="pixel-hill hill-b" /><span className="project-art-label mono">PYTHON / GAME DEV</span></div>
            <div className="project-title-row"><h2>Mario Mini Game</h2><span className="project-number mono">#001</span></div>
            <p>A simple game project built with Python — one of my first steps toward turning code into something interactive.</p>
            <div className="project-tags mono"><span>PYTHON</span><span>BEGINNER PROJECT</span></div>
            <div className="panel-foot mono"><span>MISSION STATUS: COMPLETE</span><span>↗</span></div>
          </article>

          <article className="panel contact-panel" id="contact">
            <div className="panel-head mono"><span>04 / OPEN CHANNEL</span><span>CONTACT</span></div>
            <div className="contact-orb"><Sharingan className="contact-eye" /></div>
            <p className="eyebrow mono">HAVE A PROJECT IN MIND?</p>
            <h2>Let's make<br />something <span className="red italic">real.</span></h2>
            <p>I'm always happy to connect, learn from others, and explore new opportunities.</p>
            <a className="email-link" href="mailto:arvindarvindr05@gmail.com">arvindarvindr05@gmail.com <span>↗</span></a>
            <a className="linkedin-link" href="https://www.linkedin.com/in/arvind-r-b19568307/" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a>
            <div className="panel-foot mono"><span>TRANSMISSION READY</span><span>●</span></div>
          </article>
        </section>

        <footer className="footer mono"><span>© 2026 ARAVIND R.</span><span>BUILT WITH CURIOSITY <b>♥</b> AND CODE</span><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>BACK TO TOP ↑</button></footer>
      </div>
    </main>
  );
}

export default App;
