import { useState } from 'react'
import './App.css'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const skillGroups = [
  {
    title: 'Data & Analytics',
    items: [
      'Python',
      'SQL',
      'R',
      'Power BI',
      'Microsoft Excel',
      'Data visualisation',
      'Pandas',
      'NumPy',
    ],
  },
  {
    title: 'Health Informatics & AI',
    items: [
      'Healthcare Data',
      'EHR data analysis',
      'Machine Learning',
      'Deep Learning',
      'Explainable AI',
      'SHAP / Explainable AI',
      'BEHRT / Transformer models',
      'Clinical Decision Support',
    ],
  },
  {
    title: 'Software & Web',
    items: [
      'Flask',
      'FastAPI',
      'React.js',
      'JavaScript',
      'HTML',
      'CSS',
      'REST APIs',
      'Git',
      'GitHub',
      'Next.js',
      'Node.js',
      'Vite',
      'Vercel',
      'NameCheap / cPanel',
    ],
  },
  {
    title: 'Data Extraction & Automation',
    items: ['OCR', 'Tesseract.js', 'Scikit-learn', 'AI model evaluation'],
  },
  {
    title: 'IT Support & Systems',
    items: [
      'Hardware troubleshooting',
      'Software troubleshooting',
      'Operating systems',
      'User support',
      'Device provisioning',
      'Google Admin',
      'Remote Desktop Connection',
      'Networks',
      'Systems & Business Automation',
    ],
  },
]

const cvdGallery = [
  {
    image: '/images/projects/cvd/cdss-dashboard.svg',
    alt: 'Illustrative CDSS landing dashboard for cardiovascular prediction system',
    title: 'CDSS landing/dashboard',
    caption: 'Concept illustration of a clinical decision support dashboard for patient risk monitoring.',
  },
  {
    image: '/images/projects/cvd/patient-input.svg',
    alt: 'Illustrative patient input screen for cardiovascular risk prediction',
    title: 'Patient input screen',
    caption: 'Concept illustration of a form for capturing longitudinal patient data for risk prediction.',
  },
  {
    image: '/images/projects/cvd/risk-result.svg',
    alt: 'Illustrative cardiovascular risk prediction result screen',
    title: 'Cardiovascular risk prediction result',
    caption: 'Concept illustration of risk estimates and clinical interpretation for cardiovascular disease.',
  },
  {
    image: '/images/projects/cvd/shap-visualisation.svg',
    alt: 'Illustrative SHAP explanation visualisation',
    title: 'SHAP explanation',
    caption:
      'Explainable AI — SHAP visualisation showing the features contributing to the model\'s cardiovascular risk prediction.',
  },
  {
    image: '/images/projects/cvd/model-comparison.svg',
    alt: 'Illustrative model comparison and evaluation chart',
    title: 'Model comparison / evaluation',
    caption: 'Illustration of model performance comparisons and evaluation metrics across prediction approaches.',
  },
  {
    image: '/images/projects/cvd/clinical-report.svg',
    alt: 'Illustrative clinical patient report',
    title: 'Clinical patient report',
    caption: 'Concept illustration of a patient report translating model output into interpretable decision support.',
  },
  {
    image: '/images/projects/cvd/system-architecture.svg',
    alt: 'Illustrative system architecture diagram',
    title: 'System architecture',
    caption: 'Illustration of the data, model inference, explainability, and clinical interface layers.',
  },
]

const smartReceiptGallery = [
  {
    image: '/images/projects/smart-receipt/dashboard.svg',
    alt: 'Illustrative main dashboard for Smart Receipt Tracker',
    title: 'Main dashboard',
    caption: 'Concept illustration of an overview dashboard for receipt records and spending patterns.',
  },
  {
    image: '/images/projects/smart-receipt/receipt-upload.svg',
    alt: 'Illustrative receipt upload and scanning interface',
    title: 'Receipt upload/scanning',
    caption: 'Concept illustration of an upload workflow for capturing receipt images for OCR processing.',
  },
  {
    image: '/images/projects/smart-receipt/ocr-extraction.svg',
    alt: 'Illustrative OCR extraction output',
    title: 'OCR extraction',
    caption: 'Concept illustration of merchant, date, total, and line-item data extracted from a receipt image.',
  },
  {
    image: '/images/projects/smart-receipt/receipt-details.svg',
    alt: 'Illustrative detailed receipt record screen',
    title: 'Receipt details',
    caption: 'Concept illustration of a detailed transaction view for receipt information and metadata.',
  },
  {
    image: '/images/projects/smart-receipt/expense-analytics.svg',
    alt: 'Illustrative expense analytics chart',
    title: 'Expense analytics',
    caption: 'Concept illustration of spending trends and category-based insights.',
  },
]

const powerBiGallery = [
  {
    image: '/images/projects/powerbi/dashboard.svg',
    alt: 'Illustrative Power BI dashboard',
    title: 'Power BI dashboard',
    caption: 'Concept illustration of a dashboard for communicating KPIs and operational findings.',
  },
  {
    image: '/images/projects/powerbi/visualisations.svg',
    alt: 'Illustrative data visualisation layouts',
    title: 'Data visualisations',
    caption: 'Concept illustration of charts and trend views for exploring performance and patterns.',
  },
  {
    image: '/images/projects/powerbi/kpi-cards.svg',
    alt: 'Illustrative KPI cards for Power BI report',
    title: 'KPI cards',
    caption: 'Concept illustration of summary indicators for business performance.',
  },
  {
    image: '/images/projects/powerbi/filters-slicers.svg',
    alt: 'Illustrative filters and slicers panel',
    title: 'Filters / slicers',
    caption: 'Concept illustration of filters and slicers for segmenting and exploring data.',
  },
  {
    image: '/images/projects/powerbi/insights.svg',
    alt: 'Illustrative analytical insights slide',
    title: 'Analytical insights',
    caption: 'Concept illustration of insights and recommendations from dashboard analysis.',
  },
]

const researchGallery = [
  {
    image: '/images/projects/cvd/prisma-diagram.svg',
    alt: 'Illustrative PRISMA diagram for health informatics research',
    title: 'PRISMA diagram',
    caption: 'Illustration of a study selection flow for a systematic review.',
  },
  {
    image: '/images/projects/cvd/roc-curve.svg',
    alt: 'Illustrative ROC curve for model assessment',
    title: 'ROC curve',
    caption: 'Illustration of model discrimination performance for cardiovascular prediction.',
  },
  {
    image: '/images/projects/cvd/model-comparison.svg',
    alt: 'Illustrative model comparison chart for research findings',
    title: 'Model comparison chart',
    caption: 'Illustration comparing BEHRT with traditional machine learning baselines.',
  },
  {
    image: '/images/projects/cvd/shap-visualisation.svg',
    alt: 'Illustrative SHAP model explanation for research discussion',
    title: 'SHAP visualisation',
    caption: 'Illustration of feature importance and model interpretability.',
  },
  {
    image: '/images/projects/cvd/system-architecture.svg',
    alt: 'Illustrative system architecture for research deployment',
    title: 'System architecture',
    caption: 'Illustration of the EHR data, model pipeline, and decision support interface.',
  },
]

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  )
}

function Gallery({ items }) {
  return (
    <div className="project-gallery">
      {items.map((item) => (
        <figure className="gallery-item" key={`${item.title}-${item.caption}`}>
          <a href={item.image} target="_blank" rel="noreferrer" aria-label={`Open ${item.title} image in a larger view`}>
            <img src={item.image} alt={item.alt} />
          </a>
          <figcaption>
            <h4>{item.title}</h4>
            <p>{item.caption}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

function ClinicalDashboardMockup() {
  return (
    <div className="dashboard-mockup" aria-label="Patient registration mockup for cardiovascular prediction system">
      <aside className="mockup-sidebar">
        <div className="mockup-brand-block">
          <div className="mockup-brand">CardiRiskAssist</div>
          <p>Clinical EHR & AI risk workflow</p>
        </div>

        <nav className="mockup-nav" aria-label="Clinical dashboard navigation">
          <button type="button" className="nav-item">Dashboard</button>
          <button type="button" className="nav-item active">Patient Registration</button>
          <button type="button" className="nav-item">Risk Prediction</button>
          <button type="button" className="nav-item">Patient Directory</button>
          <button type="button" className="nav-item">Patient History</button>
          <button type="button" className="nav-item">SHAP Explainability</button>
        </nav>
      </aside>

      <div className="mockup-main">
        <header className="mockup-topbar">
          <span className="topbar-label">CLINICAL DASHBOARD</span>
          <div className="topbar-user">
            <div className="user-avatar">N</div>
            <div>
              <strong>Nurse buhle</strong>
              <span>NURSE</span>
            </div>
          </div>
        </header>

        <div className="mockup-form-panel">
          <div className="mockup-heading-row">
            <div>
              <p className="form-kicker">PATIENT REGISTRATION</p>
              <h3>Structured clinical intake</h3>
            </div>
          </div>

          <div className="mockup-form-box">
            <h4>Patient Registration</h4>
            <p>Enter minimal patient details to create a patient record.</p>

            <div className="field-grid two-col">
              <label>
                <span>Patient Name</span>
                <input type="text" placeholder="Enter patient name" />
              </label>
              <label>
                <span>Assigned Clinician</span>
                <input type="text" placeholder="Clinician or nurse name" />
              </label>
            </div>

            <div className="field-grid two-col">
              <label>
                <span>Age</span>
                <input type="text" value="55" readOnly />
              </label>
              <label>
                <span>Visit Date</span>
                <input type="text" value="06/09/2026" readOnly />
              </label>
            </div>

            <label className="full-width">
              <span>Gender</span>
              <select defaultValue="Male">
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </label>

            <label className="full-width">
              <span>History Codes</span>
              <textarea rows="4" defaultValue="Enter codes separated by comma or space. For example: I50.1, I25.9, E11.9" />
            </label>
          </div>
        </div>
      </div>

      <aside className="mockup-side-panel">
        <div className="panel-card mockup-explainability">
          <h3>Clinical Explainability</h3>
          <p>
            This panel surfaces SHAP-driven clinical evidence for the most recent
            prediction. Generate a risk assessment to see the top contributing factors.
          </p>

          <div className="side-panel-box">
            <h4>Top contributing factors</h4>
            <p>Risk factors appear here once a prediction is available.</p>
          </div>

          <div className="side-panel-box">
            <h4>Clinical support guidance</h4>
            <p>The right panel will display a concise SHAP summary for clinician review.</p>
          </div>
        </div>
      </aside>
    </div>
  )
}

function submitWhatsAppMessage(event) {
  event.preventDefault()

  const formData = new FormData(event.currentTarget)
  const name = formData.get('name').trim()
  const email = formData.get('email').trim()
  const message = formData.get('message').trim()
  const whatsappMessage = [
    'Hello Onayi Theresa Chikumo,',
    `My name is ${name}.`,
    email ? `My email is ${email}.` : '',
    '',
    message,
  ].filter(Boolean).join('\n')

  window.open(
    `https://wa.me/263773866612?text=${encodeURIComponent(whatsappMessage)}`,
    '_blank',
    'noopener,noreferrer',
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" aria-label="Onayi Theresa Chikumo home">
            Onayi Theresa Chikumo
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            Menu
          </button>

          <nav id="primary-navigation" className={`main-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero-section section-spacer">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">IT Support | Data Analyst | Software Developer | Informatics</p>
              <h1>Onayi Theresa Chikumo</h1>
              <p className="lead">
                I bring together hands-on ICT support, software development and data analysis to solve practical problems across information systems and healthcare.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="btn btn-primary">View My Projects</a>
                <a href="/Onayi-Theresa-Chikumo-CV.pdf" className="btn btn-secondary" download>
                  Download CV
                </a>
                <a href="https://wa.me/263773866612?text=Hello%20Onayi%20Theresa%20Chikumo%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect." target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Message Onayi on WhatsApp
                </a>
              </div>

              <div className="social-links">
                <a href="https://github.com/Onayi-Tee" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/onayi-t-chikumo" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="#contact">Contact Me</a>
              </div>
            </div>

            <div className="hero-panel" aria-label="Professional profile summary">
              <div className="panel-card">
                <p className="mini-label">Profile</p>
                <h3>Informatics graduate with a First Class degree and a practical focus on data analytics, healthcare technology, IT support, and AI-driven decision support.</h3>
              </div>
              <div className="panel-grid">
                <div>
                  <span>Data Analysis</span>
                </div>
                <div>
                  <span>Health Informatics</span>
                </div>
                <div>
                  <span>Machine Learning</span>
                </div>
                <div>
                  <span>Application Development</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-spacer">
          <div className="container">
            <SectionHeader
              eyebrow="About Me"
              title="Analytical, research-informed and motivated by practical impact"
              description="Informatics graduate with hands-on ICT support experience at NUST, supporting staff and students with hardware, software and operating-system issues. Experienced with Google Admin, Remote Desktop Connection, device provisioning and user support, with a foundation in Python, SQL, web development, OCR, Power BI and deployed applications."
            />

            <div className="about-grid">
              <div className="about-card">
                <p>
                  My experience spans day-to-day technical support, device provisioning, networks and business automation, alongside software and data projects. I enjoy translating user and business needs into reliable digital solutions, from analysis and development through testing and deployment.
                </p>
              </div>
              <div className="about-card">
                <ul className="focus-list">
                  <li>Informatics background with a strong analytical foundation</li>
                  <li>Data analytics and business intelligence for operational insight</li>
                  <li>Healthcare technology and EHR analytics</li>
                  <li>IT support knowledge with a practical understanding of systems, user support and business automation</li>
                  <li>Machine learning and explainable AI for clinical and data-driven decisions</li>
                  <li>Application development and problem solving in digital systems</li>
                  <li>Research-oriented thinking with practical implementation goals</li>
                  <li>Hardware and software troubleshooting with clear, user-focused communication</li>
                  <li>Production deployment experience with Next.js, Node.js and cPanel hosting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-spacer alt-panel">
          <div className="container">
            <SectionHeader
              eyebrow="Skills"
              title="Professional technical toolkit"
              description="A realistic and focused set of skills relevant to data, healthcare technology, analysis, AI, software development and support work."
            />

            <div className="skill-grid">
              {skillGroups.map((group) => (
                <div key={group.title} className="skill-card">
                  <h3>{group.title}</h3>
                  <div className="tag-list">
                    {group.items.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-spacer">
          <div className="container">
            <SectionHeader
              eyebrow="Featured Projects"
              title="Production web delivery, healthcare AI and applied data science"
            />

            <article className="project-feature">
              <div className="project-header">
                <div>
                  <p className="project-kicker">Featured Client Project</p>
                  <h3>Forte Alliance — Civil Engineering &amp; Construction Website</h3>
                </div>
                <span className="project-badge">LIVE — Production</span>
              </div>

              <p className="project-summary">
                A professional business website designed and developed for a Zimbabwean civil engineering, construction and infrastructure company, showcasing services across civil construction, roads, water and sanitation, mining, and energy.
              </p>

              <div className="tag-list compact">
                <span className="tag">Client Project</span>
                <span className="tag">Full-Stack</span>
                <span className="tag">Next.js</span>
                <span className="tag">Production Deployment</span>
              </div>

              <div className="project-meta">
                <div>
                  <p className="meta-label">Role &amp; delivery</p>
                  <p className="project-summary">
                    Built enquiry and quote-request API routes, configured Next.js standalone output for Node.js hosting, and deployed the site to the client's custom domain through NameCheap/cPanel. Troubleshot build files, static assets, and production restarts to bring the real client website live.
                  </p>
                </div>
                <div>
                  <p className="meta-label">Technologies</p>
                  <div className="tag-list compact">
                    <span className="tag">Next.js</span>
                    <span className="tag">React</span>
                    <span className="tag">Tailwind CSS</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">API routes</span>
                    <span className="tag">Node.js</span>
                    <span className="tag">Server-side functionality</span>
                    <span className="tag">NameCheap / cPanel</span>
                    <span className="tag">Next.js standalone output</span>
                  </div>
                </div>
              </div>

              <div className="project-cta-row">
                <a href="https://fortealliance.net/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View Live Site
                </a>
              </div>
            </article>

            <article className="project-card small-project">
              <div className="project-header">
                <div>
                  <p className="project-kicker">Completed Project</p>
                  <h3>Security Services Company Website</h3>
                </div>
                <span className="project-badge">COMPLETED — PRIVATE</span>
              </div>

              <p className="project-summary">
                A professional business website developed for a UK-based security services company, presenting its services and business information through a modern, responsive web experience.
              </p>

              <div className="project-meta compact-meta">
                <div>
                  <p className="meta-label">Role</p>
                  <p className="project-summary">
                    Full-stack/web developer responsible for website development and preparing the project for deployment.
                  </p>
                </div>
                <div>
                  <p className="meta-label">Technologies</p>
                  <div className="tag-list compact">
                    <span className="tag">React</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">HTML</span>
                    <span className="tag">CSS</span>
                  </div>
                </div>
              </div>

              <div className="project-cta-row">
                <span className="btn btn-secondary" aria-label="Private project, not publicly launched">
                  Private Project
                </span>
              </div>
            </article>

            <article className="project-feature">
              <div className="project-header">
                <div>
                  <p className="project-kicker">Featured Project 1</p>
                  <h3>Predicting Cardiovascular Diseases using BEHRT</h3>
                </div>
                <span className="project-badge">Health Informatics • AI</span>
              </div>

              <p className="project-summary">
                An explainable deep learning system for cardiovascular disease risk prediction using longitudinal Electronic Health Records.
              </p>

              <div className="project-meta">
                <div>
                  <p className="meta-label">Focus areas</p>
                  <ul>
                    <li>Ischaemic Heart Disease (IHD)</li>
                    <li>Heart Failure (HF)</li>
                    <li>Longitudinal EHR data</li>
                    <li>BEHRT / Transformer-based modelling</li>
                    <li>SHAP explainability</li>
                    <li>Clinical Decision Support</li>
                  </ul>
                </div>
                <div>
                  <p className="meta-label">Technologies</p>
                  <div className="tag-list compact">
                    <span className="tag">Python</span>
                    <span className="tag">BEHRT</span>
                    <span className="tag">Scikit-learn</span>
                    <span className="tag">SHAP</span>
                    <span className="tag">Flask</span>
                    <span className="tag">FastAPI</span>
                    <span className="tag">React.js</span>
                    <span className="tag">MIMIC-IV</span>
                  </div>
                </div>
              </div>

              <div className="project-cta-row">
                <a href="https://github.com/Onayi-Tee" target="_blank" rel="noreferrer" className="btn btn-secondary">
                  View GitHub
                </a>
              </div>

              <ClinicalDashboardMockup />

              <div className="project-gallery-wrap">
                <Gallery items={cvdGallery} />
              </div>
            </article>

            <article className="project-feature">
              <div className="project-header">
                <div>
                  <p className="project-kicker">Featured Project 2</p>
                  <h3>Smart Receipt Tracker</h3>
                </div>
                <span className="project-badge">OCR • Web App</span>
              </div>

              <p className="project-summary">
                A web application for managing receipts and generating downloadable invoices. It uses OCR to extract information from receipt images and PDF documents, with a React interface integrated with backend APIs.
              </p>

              <div className="project-meta compact-meta">
                <div>
                  <p className="meta-label">Technologies</p>
                  <div className="tag-list compact">
                    <span className="tag">React.js</span>
                    <span className="tag">Python</span>
                    <span className="tag">JavaScript</span>
                    <span className="tag">Vite</span>
                    <span className="tag">Tesseract.js</span>
                    <span className="tag">OCR</span>
                    <span className="tag">Firebase</span>
                    <span className="tag">Vercel</span>
                  </div>
                </div>
              </div>

              <div className="project-cta-row">
                <a href="https://smartreceipttracker.vercel.app/" target="_blank" rel="noreferrer" className="btn btn-primary">
                  Live Demo
                </a>
                <a href="https://github.com/Onayi-Tee/smartreceipt.demo" target="_blank" rel="noreferrer" className="btn btn-secondary">
                  GitHub
                </a>
              </div>

              <Gallery items={smartReceiptGallery} />
            </article>

            <article className="project-card small-project">
              <div className="project-header">
                <div>
                  <p className="project-kicker">Project 3</p>
                  <h3>Data Analytics / Power BI Work</h3>
                </div>
                <span className="project-badge">Power BI • Insights</span>
              </div>

              <p className="project-summary">
                Dashboard and analytics work focused on data exploration, KPI reporting, visual storytelling and business intelligence decision support.
              </p>

              <Gallery items={powerBiGallery} />
            </article>
          </div>
        </section>

        <section id="experience" className="section-spacer alt-panel">
          <div className="container">
            <SectionHeader
              eyebrow="Experience"
              title="Professional experience and community leadership"
            />

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <p className="timeline-period">September 2025 – June 2026</p>
                  <h3>National University of Science and Technology (NUST)</h3>
                  <p className="timeline-role">ICT Services Department — Student Assistant</p>
                  <ul>
                    <li>Diagnosed hardware, software and operating-system issues for staff and students, explaining solutions to users with different levels of technical knowledge.</li>
                    <li>Supported Google Admin, remote access and device provisioning activities.</li>
                    <li>Handled user issues independently while collaborating with the ICT team and adapting to changing priorities.</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <p className="timeline-period">August 2024 – August 2025</p>
                  <h3>National University of Science and Technology (NUST)</h3>
                  <p className="timeline-role">ICT Services Department — ICT Intern</p>
                  <ul>
                    <li>Supported Networks, Systems and Business Automation, User Support and Training functions.</li>
                    <li>Provided day-to-day technical support and troubleshooting for staff and students.</li>
                    <li>Built experience in structured problem-solving, user communication, documentation and operational technology support.</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="timeline-role">Volunteering</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <p className="timeline-period">April 2024 – April 2026</p>
                  <h3>Grassroot Soccer</h3>
                  <p className="timeline-role">Youth Advisory Committee Member — Communication Department</p>
                  <ul>
                    <li>Collected, analysed and reported programme data using Monitoring &amp; Evaluation approaches.</li>
                    <li>Contributed to programme planning, stakeholder discussions, communications activities and the co-design of a Wellcome Trust grant proposal.</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <p className="timeline-period">March 2024 – June 2025</p>
                  <h3>Grassroot Soccer, Zimbabwe</h3>
                  <p className="timeline-role">MindSKILLZ Coach</p>
                  <ul>
                    <li>Facilitated sessions on emotional wellbeing, self-awareness, coping skills, resilience and healthy decision-making.</li>
                    <li>Used youth-centred activities to support confidence, communication, problem-solving and emotional regulation.</li>
                  </ul>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <p className="timeline-period">2019 – 2020</p>
                  <h3>Grassroot Soccer, Zimbabwe</h3>
                  <p className="timeline-role">Peer Educator</p>
                  <ul>
                    <li>Encouraged positive behaviour change, leadership, goal-setting, self-confidence and interpersonal skills through peer-led activities.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="research" className="section-spacer">
          <div className="container">
            <SectionHeader
              eyebrow="Research"
              title="Predicting Cardiovascular Diseases using BEHRT: A Deep Neural Sequence Transduction Model for Electronic Health Records"
              description="Exploration of EHR analytics, cardiovascular disease prediction, BEHRT, explainable AI, SHAP and machine learning comparison for clinical decision support."
            />

            <div className="research-panel">
              <div className="research-summary">
                <p>
                  Chikumo, O.T. (2026). Transformer-Based Explainable Clinical Decision Support System for Cardiovascular Disease Prediction, Journal of Applied Informatics and Computing (JAIC). DOI: 10.30871/jaic.v10i1.11899
                </p>
                <div className="tag-list compact">
                  <span className="tag">EHR analytics</span>
                  <span className="tag">Cardiovascular disease prediction</span>
                  <span className="tag">BEHRT</span>
                  <span className="tag">Explainable AI</span>
                  <span className="tag">SHAP</span>
                  <span className="tag">Machine learning comparison</span>
                  <span className="tag">Clinical Decision Support</span>
                </div>
                <a href="https://doi.org/10.30871/jaic.v10i1.11899" target="_blank" rel="noreferrer" className="btn btn-secondary research-link">
                  View Research
                </a>
              </div>
            </div>

            <Gallery items={researchGallery} />
          </div>
        </section>

        <section id="education" className="section-spacer alt-panel">
          <div className="container">
            <SectionHeader eyebrow="Education" title="Academic foundation" />

            <div className="education-card">
              <h3>National University of Science and Technology (NUST)</h3>
              <p>Bachelor of Science Honours Degree in Informatics</p>
              <p className="grade">First Division — 76% | 2026</p>
              <p>Relevant areas: Data Analysis, Database Systems, Artificial Intelligence, Machine Learning, Information Systems, Software Development and Research Methods.</p>
              <p className="grade">AI Swatini Prize for Graduating with Distinction</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section-spacer">
          <div className="container contact-grid">
            <div>
              <SectionHeader
                eyebrow="Contact"
                title="Let’s connect"
                description="Open to opportunities in software development, data analytics, health informatics, healthcare IT, business intelligence and IT support."
              />

              <div className="contact-details">
                <p>Email: <a href="mailto:onayitchikumo14@gmail.com">onayitchikumo14@gmail.com</a></p>
                <p>WhatsApp: <a href="https://wa.me/263773866612?text=Hello%20Onayi%20Theresa%20Chikumo%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect." target="_blank" rel="noopener noreferrer">Chat with Onayi Theresa Chikumo</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/onayi-t-chikumo" target="_blank" rel="noreferrer">Onayi T Chikumo</a></p>
                <p>GitHub: <a href="https://github.com/Onayi-Tee" target="_blank" rel="noreferrer">Onayi-Tee</a></p>
              </div>
            </div>

            <form className="contact-form" onSubmit={submitWhatsAppMessage}>
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="Your email" />
              </label>
              <label>
                Message
                <textarea name="message" rows="5" placeholder="Write your message here" required></textarea>
              </label>
              <button type="submit" className="btn btn-primary">Send via WhatsApp</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} Onayi Theresa Chikumo</p>
          <div className="footer-links">
            <a href="https://github.com/Onayi-Tee" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/onayi-t-chikumo" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
