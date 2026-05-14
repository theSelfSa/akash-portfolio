// ============================================================
// PORTFOLIO DATA — Akash Kore
// Single source of truth for all resume/portfolio content.
// Update this file to change content across the entire site.
// ============================================================

export const personal = {
  name: 'Akash Kore',
  firstName: 'Akash',
  title: 'ML Engineer & Software Engineer',
  tagline: 'Building scalable AI systems, LLM pipelines, and cloud-native infrastructure.',
  location: 'Raleigh, NC',
  email: 'aakashkore@gmail.com',
  phone: '(919) 559-4937',
  linkedin: 'https://linkedin.com/in/akashkore',
  github: 'https://github.com/TheSelfSa',
  available: true,
  availabilityNote: 'Open to full-time roles — F-1 STEM OPT',
  currentRole: 'AI Software Engineer @ Ready Tensor',
  latestDegree: 'M.S. Computer Science, NC State · 2025',
  profilePhoto: '/assets/Akash_Kore_Profile.png',
  summary: `Applied AI & Software Engineer with 4+ years of experience shipping production AI systems, LLM fine-tuning pipelines, RAG platforms, agentic workflows, and cloud-native backend infrastructure. I've delivered measurable impact at Ready Tensor, Siemens, and JAEA, working at the intersection of AI research and production engineering where clean architecture meets real-world constraints.`,
  heroMetrics: [
    {
      value: '90%',
      label: 'Faster ML Reviews',
      description: 'Built an LLM evaluation framework using GPT-4o that scores AI/ML repos across 85 criteria — cutting manual review time from hours to minutes.',
      source: 'readytensor PyPI tool · Ready Tensor',
      tag: 'LLM · GPT-4o',
    },
    {
      value: '35%',
      label: 'Inference Cost Reduction',
      description: 'Unified OpenAI, Gemini, Groq, Anthropic & OpenRouter into a single routing layer with concurrent batch processing and smart model selection.',
      source: 'Multi-LLM routing layer',
      tag: 'MLOps · Cost Optimization',
    },
    {
      value: '99.9%',
      label: 'Pipeline Uptime',
      description: 'Designed production MLOps pipelines with Docker, AWS Lambda, and GitHub Actions CI/CD — IaC standards adopted across the engineering team.',
      source: 'AWS Lambda + Docker · Ready Tensor',
      tag: 'AWS · Docker · CI/CD',
    },
    {
      value: '500+',
      label: 'Enterprise Customers',
      description: 'Delivered Siemens Teamcenter on Cloud, a PLM SaaS platform serving 500+ enterprise clients, with full-stack Java/Spring Boot backend and AWS deployment.',
      source: 'Siemens Teamcenter on Cloud',
      tag: 'Java · Spring Boot · AWS',
    },
  ],
  heroHighlights: [
    { icon: 'brain', text: 'LLM fine-tuning, RAG pipelines & agentic workflows' },
    { icon: 'cloud', text: 'Cloud-native infra — AWS, Docker, GitHub Actions' },
    { icon: 'code', text: 'Full-stack: Python, FastAPI, React, TypeScript' },
    { icon: 'chart', text: '4+ years · Ready Tensor, Siemens, JAEA' },
  ],
  resumes: [
    { role: 'Machine Learning Engineer', file: '/assets/Akash_Kore_Resume_ML_Engineer.pdf' },
  ],
};

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: 'full-time' | 'intern' | 'research';
  period: string;
  location: string;
  highlights: string[];
  tags: string[];
}

export const experience: Experience[] = [
  {
    id: 'ready-tensor',
    company: 'Ready Tensor, Inc.',
    role: 'AI Software Engineer I',
    type: 'full-time',
    period: 'Aug. 2024 – Present',
    location: 'San Diego, CA (Remote)',
    highlights: [
      'Engineered readytensor, an open-source PyPI tool for AI/ML repository assessment; built an LLM evaluation framework scoring repos across 85 criteria using GPT-4o — cutting review time by 90%.',
      'Unified OpenAI, Gemini, Groq, Anthropic, and OpenRouter into a single multi-LLM routing layer, reducing costs by 35% via concurrent batch processing.',
      'Built production MLOps pipelines (Docker, AWS Lambda, GitHub Actions) achieving 99.9% uptime; established CI/CD and IaC standards adopted team-wide.',
    ],
    tags: ['Python', 'FastAPI', 'LLM', 'GPT-4o', 'Docker', 'AWS Lambda', 'GitHub Actions'],
  },
  {
    id: 'jaea',
    company: 'Japan Atomic Energy Agency (JAEA)',
    role: 'Machine Learning Intern',
    type: 'intern',
    period: 'May 2024 – Aug. 2024',
    location: 'Remote – Raleigh, NC',
    highlights: [
      'Designed a deep learning pipeline for nuclear reactor bubble detection from scratch; selected Pix2Pix GAN in PyTorch for sim-to-real domain adaptation under limited labeled-data constraints.',
      'Curated a 50k-image labeled dataset and fine-tuned via transfer learning, achieving 90% object detection accuracy and 30% improved generalization.',
      'Containerized the real-time inference pipeline (Docker, AWS Lambda) with ETL preprocessing; achieved 15 FPS throughput and 95% overhead reduction.',
    ],
    tags: ['PyTorch', 'GAN', 'Computer Vision', 'Docker', 'AWS Lambda', 'OpenCV'],
  },
  {
    id: 'siemens',
    company: 'Siemens Digital Industries Software',
    role: 'Software Engineer Associate',
    type: 'full-time',
    period: 'Sep. 2021 – Jun. 2023',
    location: 'Pune, India',
    highlights: [
      'Architected Teamcenter on Cloud (TcX) on AWS (EC2/S3/RDS/Lambda) supporting distributed data pipelines and telemetry for 500+ global enterprise customers; automated CI/CD via CloudFormation, cutting setup time 30%.',
      'Developed C++ server-side components with OOP refactoring, reducing bug resolution time 25%; led cross-functional Python, C++, and Bash debugging across Agile teams, resolving 40+ critical incidents.',
    ],
    tags: ['C++', 'Python', 'AWS', 'CloudFormation', 'CI/CD', 'Agile'],
  },
  {
    id: 'principal',
    company: 'Principal Global Services',
    role: 'Software Developer Intern',
    type: 'intern',
    period: 'Jan. 2021 – Sep. 2021',
    location: 'Pune, India',
    highlights: [
      'Built Retirement Income Forecaster (Django REST API + React, AWS) achieving 200ms API latency; integrated time-series forecasting models and automated data retrieval via Lambda, reducing generation time 40%.',
    ],
    tags: ['Django', 'React', 'AWS Lambda', 'Python', 'REST API'],
  },
  {
    id: 'tata',
    company: 'TATA Research, Development and Design Center',
    role: 'Research Intern',
    type: 'research',
    period: 'May 2020 – Jul. 2020',
    location: 'Pune, India',
    highlights: [
      'Built an anomaly detection library (Python, Scikit-learn, NetworkX) using graph-based ML algorithms on healthcare datasets, improving accuracy by 15%; deployed as a private PyPI package adopted by 5+ hospital partners.',
      'Built a data preprocessing pipeline to clean missing values, remove outliers, and balance classes across 10+ clinical datasets.',
    ],
    tags: ['Python', 'Scikit-learn', 'NetworkX', 'PyPI', 'Healthcare ML'],
  },
];

export interface Project {
  id: string;
  title: string;
  shortTitle: string;
  period: string;
  description: string;
  longDescription: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  metrics?: string[];
  category: 'ai-ml' | 'fullstack' | 'backend' | 'research';
}

export const projects: Project[] = [
  {
    id: 'biased',
    title: 'B.I.A.S.E.D.',
    shortTitle: 'B.I.A.S.E.D.',
    period: '2024 – 2025',
    description: 'Open-source AI decision intelligence platform with RAG-backed investigation engine, multi-LLM routing, and structured evidence retrieval.',
    longDescription: `B.I.A.S.E.D. is an open-source AI decision intelligence platform built on a pnpm monorepo architecture. The RAG-backed investigation engine retrieves evidence from pgvector, routes queries across local Ollama or cloud LLMs, and returns structured responses with citations and confidence traces. Built with Better Auth RBAC, Docker Compose deployment, and a scenario planning engine. Released under Apache-2.0.`,
    tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'pgvector', 'Ollama', 'Docker', 'TypeScript', 'RAG'],
    github: 'https://github.com/TheSelfSa/biased',
    featured: true,
    metrics: ['Multi-LLM routing', 'pgvector similarity search', 'Apache-2.0 open-source', 'Docker Compose deployment'],
    category: 'ai-ml',
  },
  {
    id: 'llm-finetuning',
    title: 'End-to-End LLM Fine-Tuning Pipeline',
    shortTitle: 'LLM Fine-Tuning Pipeline',
    period: '2025',
    description: 'Scalable LLaMA-3 fine-tuning pipeline using LoRA/QLoRA with Ray Tune hyperparameter search, W&B experiment tracking, and vLLM inference deployment.',
    longDescription: `A production-grade model training pipeline for fine-tuning LLaMA-3 using LoRA/QLoRA on domain-specific conversational datasets. Optimized hyperparameter search with Ray Tune, tracked experiments via Weights & Biases, and evaluated model performance using Rouge-L and BERTScore. Packaged the final quantized model and deployed inference endpoints via vLLM and FastAPI, achieving a 40% reduction in memory footprint.`,
    tags: ['PyTorch', 'Hugging Face', 'LoRA', 'QLoRA', 'Ray Tune', 'Weights & Biases', 'vLLM', 'FastAPI'],
    featured: true,
    metrics: ['40% memory footprint reduction', 'LoRA/QLoRA quantization', 'Ray Tune HPO', 'vLLM inference'],
    category: 'ai-ml',
  },
  {
    id: 'distributed-orchestrator',
    title: 'Distributed Task Orchestrator',
    shortTitle: 'Task Orchestrator',
    period: 'Feb. 2025 – Mar. 2025',
    description: 'High-concurrency background job processing system using FastAPI, Celery, and Redis with sub-500ms response times under concurrent load.',
    longDescription: `A high-concurrency background job processing system engineered with FastAPI and Celery, backed by Redis for message brokering and state management. Implemented robust error handling, automatic task retries, and async API endpoints. Achieved reliable execution of long-running processes under concurrent load with sub-500ms response times.`,
    tags: ['Python', 'FastAPI', 'Celery', 'Redis', 'Docker', 'Async'],
    featured: true,
    metrics: ['Sub-500ms response times', 'Automatic task retries', 'Redis message brokering', 'Concurrent load handling'],
    category: 'backend',
  },
];

export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'AI / ML',
    icon: '🤖',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'OpenCV', 'YOLO', 'TensorRT', 'ONNX', 'Hugging Face', 'Ray'],
  },
  {
    category: 'LLMs & GenAI',
    icon: '🧠',
    skills: ['GPT-4', 'LLaMA-3', 'LLM Fine-Tuning', 'LoRA / QLoRA', 'RAG', 'Prompt Engineering', 'Model Evaluation', 'vLLM'],
  },
  {
    category: 'Languages',
    icon: '💻',
    skills: ['Python', 'TypeScript', 'JavaScript', 'C++', 'Java', 'SQL', 'Bash'],
  },
  {
    category: 'Backend & APIs',
    icon: '⚙️',
    skills: ['FastAPI', 'Django', 'Node.js', 'Express', 'GraphQL', 'WebSockets', 'Celery', 'Pydantic'],
  },
  {
    category: 'Cloud & MLOps',
    icon: '☁️',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'MLflow', 'Weights & Biases', 'SageMaker', 'GitHub Actions'],
  },
  {
    category: 'Data & Vectors',
    icon: '🗄️',
    skills: ['PostgreSQL', 'pgvector', 'Pinecone', 'ChromaDB', 'FAISS', 'Redis', 'MongoDB', 'Apache Spark', 'Kafka'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    skills: ['Next.js', 'React', 'Tailwind CSS', 'shadcn/ui', 'TypeScript', 'Framer Motion'],
  },
];

export const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'North Carolina State University',
    location: 'Raleigh, NC',
    period: 'Aug. 2023 – May 2025',
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'Walchand College of Engineering',
    location: 'Sangli, MH, India',
    period: 'Aug. 2017 – Jul. 2021',
  },
];

export const beyondWork = {
  intro: 'Outside of engineering, I spend time on things that keep me curious and grounded.',
  interests: [
    { emoji: '🎬', label: 'Movies & Series', note: 'Sci-fi, thrillers, and anything with a good plot twist' },
    { emoji: '📚', label: 'Reading', note: 'Tech, philosophy, and the occasional fiction deep-dive' },
    { emoji: '🎮', label: 'Gaming', note: 'Strategy games and open-world RPGs' },
    { emoji: '🎵', label: 'Music', note: 'Always have something playing while I code' },
  ],
};
