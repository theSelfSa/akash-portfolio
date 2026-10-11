// ============================================================
// PORTFOLIO DATA - Akash Kore
// Single source of truth for all resume/portfolio content.
// Update this file to change content across the entire site.
// ============================================================

export const personal = {
  name: 'Akash Kore',
  firstName: 'Akash',
  title: 'AI Software Engineer | ML Systems & Agentic AI',
  tagline: 'Building Production AI Systems That Actually Ship.',
  location: 'Pune, India',
  email: 'aakashkore@gmail.com',
  phone: '(919) 559-4937',
  linkedin: 'https://linkedin.com/in/akashkore',
  github: 'https://github.com/theSelfSa',
  available: true,
  availabilityNote: 'Relocating to Pune · Can join immediately\nOpen to full-time AI/ML roles',
  currentRole: 'AI Software Engineer @ Ready Tensor',
  latestDegree: 'M.S. Computer Science, NC State · 2025',
  profilePhoto: '/assets/Akash_Kore_Profile.png',
  summary: `AI/ML Engineer with 4+ years across ML, backend, and cloud engineering, now building production Generative AI and LLM systems in Python: RAG pipelines, Agentic AI (LangChain, LangGraph, MCP), multi-agent orchestration, LLM evaluation, and fine-tuning (LoRA/QLoRA). Shipped an open-source LLM evaluation framework and a multi-LLM routing layer that cut inference cost 35% and manual review time 90% at 99.9% uptime. M.S. Computer Science, NC State (USA); 3 years prior engineering experience at Siemens Digital, Principal Global Services, and Tata Research, Pune, India.`,
  heroMetrics: [
    {
      value: '90%',
      label: 'Faster ML Reviews',
      description: 'Built readytensor, an open-source PyPI package that scores AI/ML repositories on 85 criteria using GPT-4o with structured outputs. Manual review time dropped by 90%.',
      source: 'readytensor PyPI tool · Ready Tensor',
      tag: 'LLM · GPT-4o · Evaluation',
    },
    {
      value: '35%',
      label: 'Inference Cost Reduction',
      description: 'Built one routing layer across OpenAI, Gemini, Groq, Anthropic, and OpenRouter that sends each request to the right model. Inference cost dropped by 35%.',
      source: 'Multi-LLM routing layer · Ready Tensor',
      tag: 'MLOps · Cost Optimization',
    },
    {
      value: '99.9%',
      label: 'Production Uptime',
      description: 'Automated MLOps pipelines with Docker, AWS Lambda, and GitHub Actions. Ran zero-downtime PostgreSQL migrations and set IaC standards the team adopted.',
      source: 'AWS Lambda · Docker · Ready Tensor',
      tag: 'AWS · Docker · CI/CD',
    },
    {
      value: '50,000+',
      label: 'Users Migrated',
      description: 'Delivered the REST APIs and authentication system (OAuth, RBAC, email verification) for a platform migration serving 50,000+ users.',
      source: 'Auth system · Ready Tensor',
      tag: 'OAuth · RBAC · REST APIs',
    },
  ],
  heroHighlights: [
    { icon: 'brain', text: 'MCP servers, LangGraph multi-agent systems, RAG pipelines' },
    { icon: 'cloud', text: 'Production MLOps on AWS, Docker, and GitHub Actions' },
    { icon: 'code', text: 'Python, FastAPI, PyTorch, vLLM, LoRA/QLoRA fine-tuning' },
    { icon: 'chart', text: '4+ years · Ready Tensor, Siemens, JAEA' },
  ],
  heroSkills: [
    'Python', 'PyTorch', 'MCP', 'LangGraph', 'LangChain',
    'LLM Fine-Tuning (LoRA/QLoRA)', 'RAG', 'FastAPI',
    'Docker', 'AWS', 'GitHub Actions CI/CD',
    'GPT-4o', 'MLOps', 'vLLM',
  ],
  resumes: [
    { role: 'AI Software Engineer', file: '/assets/Akash_Kore_Resume.pdf' },
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
    role: 'AI Software Engineer',
    type: 'full-time',
    period: 'Aug. 2025 – Present',
    location: 'San Diego, CA, USA',
    highlights: [
      'Developed readytensor, an open-source PyPI package for LLM evaluation and observability scoring AI/ML repositories on 85 criteria via GPT-4o with structured outputs (Instructor) and prompt engineering, cutting manual review time by 90%.',
      'Architected a multi-LLM routing layer spanning OpenAI, Gemini, Groq, Anthropic, and OpenRouter with function calling, tool use, and LangChain orchestration, reducing inference cost by 35% for a 10-person team.',
      'Automated production MLOps pipelines (Docker, AWS Lambda, GitHub Actions CI/CD) at 99.9% uptime; ran zero-downtime PostgreSQL migrations and set IaC standards adopted team-wide.',
      'Delivered REST APIs and a full authentication system (OAuth, RBAC, email verification) with PII handling and access governance for a platform migration serving 50,000+ users.',
    ],
    tags: ['Python', 'LangChain', 'LangGraph', 'MCP', 'GPT-4o', 'Instructor', 'vLLM', 'Docker', 'AWS Lambda', 'GitHub Actions', 'FastAPI'],
  },
  {
    id: 'jaea',
    company: 'Japan Atomic Energy Agency (JAEA)',
    role: 'Machine Learning Intern',
    type: 'intern',
    period: 'May 2024 – Aug. 2024',
    location: 'Raleigh, NC, USA (Remote)',
    highlights: [
      'Independently designed a computer vision pipeline for nuclear-reactor bubble detection, selecting Pix2Pix GAN (PyTorch) for sim-to-real domain adaptation under limited labeled data; reached 90% detection accuracy and 30% better generalization.',
      'Curated a 50k-image labeled dataset and applied transfer-learning fine-tuning; containerized the real-time inference pipeline (Docker, AWS Lambda) at 15 FPS with 95% lower overhead.',
    ],
    tags: ['PyTorch', 'Pix2Pix GAN', 'Computer Vision', 'Transfer Learning', 'Docker', 'AWS Lambda', 'Domain Adaptation'],
  },
  {
    id: 'siemens',
    company: 'Siemens Digital Industries Software',
    role: 'Software Engineer Associate',
    type: 'full-time',
    period: 'Sep. 2021 – Jun. 2023',
    location: 'Pune, India',
    highlights: [
      'Engineered Teamcenter on Cloud (TcX) on AWS (EC2, S3, RDS, Lambda) for 500+ global enterprise customers; automated CI/CD with CloudFormation, cutting deployment setup time by 30%.',
      'Resolved 40+ critical production incidents in Python, C++, and Bash across Agile sprints; refactored C++ server-side microservices, cutting bug-resolution time by 25%.',
    ],
    tags: ['C++', 'Python', 'Bash', 'AWS', 'CloudFormation', 'CI/CD', 'Distributed Systems', 'Agile'],
  },
  {
    id: 'principal',
    company: 'Principal Global Services',
    role: 'Software Engineer Intern',
    type: 'intern',
    period: 'Jan. 2021 – Sep. 2021',
    location: 'Pune, India',
    highlights: [
      'Built Retirement Income Forecaster (Django REST + React) at sub-200ms API latency; automated AWS Lambda data pipelines, cutting report time 40%.',
    ],
    tags: ['Python', 'Django REST', 'React', 'AWS Lambda', 'Data Pipelines'],
  },
  {
    id: 'trddc',
    company: 'Tata Research Development and Design Centre (TRDDC)',
    role: 'Research Intern',
    type: 'research',
    period: 'May 2020 – Jul. 2020',
    location: 'Pune, India',
    highlights: [
      'Built a graph-based anomaly detection library (OddBall, Scikit-learn) improving accuracy 15%; shipped as a PyPI package used by 5+ hospital partners at 98% reliability.',
    ],
    tags: ['Python', 'Scikit-Learn', 'Anomaly Detection', 'Graph Algorithms', 'PyPI'],
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
    title: 'B.I.A.S.E.D. – Agentic RAG Decision Intelligence Platform',
    shortTitle: 'B.I.A.S.E.D.',
    period: 'Nov. 2024 – Mar. 2025',
    description: 'Open-source agentic RAG platform with an MCP server, LangGraph multi-agent orchestration, pgvector retrieval, and structured evidence output with citations and confidence traces.',
    longDescription: `B.I.A.S.E.D. is an open-source agentic decision intelligence platform built on a pnpm monorepo architecture. At its core is an MCP server enabling external tool integration, and a LangGraph multi-agent orchestration layer that routes queries across local Ollama or cloud LLMs. The RAG engine retrieves evidence from pgvector and returns structured outputs with citations and confidence traces. Built with RBAC auth, Docker Compose deployment, and a scenario planning engine for multi-hypothesis decision support. Released under Apache-2.0.`,
    tags: ['FastAPI', 'Next.js', 'LangGraph', 'LangChain', 'MCP', 'pgvector', 'Ollama', 'Docker', 'RAG', 'TypeScript'],
    github: 'https://github.com/TheSelfSa/biased',
    featured: true,
    metrics: ['MCP server with external tool integration', 'LangGraph multi-agent orchestration', 'pgvector RAG retrieval', 'Apache-2.0 open-source'],
    category: 'ai-ml',
  },
  {
    id: 'llm-finetuning',
    title: 'End-to-End LLM Fine-Tuning Pipeline',
    shortTitle: 'LLM Fine-Tuning Pipeline',
    period: 'Jun. 2024 – Sep. 2024',
    description: 'Production LLaMA-3 fine-tuning pipeline using LoRA/QLoRA with Ray Tune hyperparameter search, Weights & Biases tracking, and vLLM inference deployment achieving 40% memory reduction.',
    longDescription: `A production-grade fine-tuning pipeline for LLaMA-3 using LoRA/QLoRA (PEFT) on domain-specific conversational data. Optimized hyperparameters with Ray Tune, tracked experiments via Weights & Biases, and evaluated against baseline using ROUGE-L and BERTScore. Deployed quantized inference endpoints via vLLM and FastAPI, achieving a 40% reduction in memory footprint. Serves as a production template for rapid foundation model adaptation.`,
    tags: ['PyTorch', 'Hugging Face Transformers', 'LoRA', 'QLoRA', 'PEFT', 'LLaMA-3', 'Ray Tune', 'Weights & Biases', 'vLLM', 'FastAPI'],
    featured: true,
    metrics: ['40% memory footprint reduction', 'LoRA/QLoRA quantization', 'Ray Tune hyperparameter optimization', 'vLLM inference endpoints'],
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
    category: 'Agentic & Tooling',
    icon: '🤖',
    skills: ['MCP (Model Context Protocol)', 'LangChain', 'LangGraph', 'Claude Code', 'Function Calling', 'Tool Use', 'Agentic Workflows', 'Multi-Agent Systems', 'CrewAI', 'AutoGen'],
  },
  {
    category: 'LLMs & GenAI',
    icon: '🧠',
    skills: ['GPT-4o', 'LLaMA-3', 'Claude (Anthropic)', 'Gemini', 'OpenAI API', 'LLM Fine-Tuning (LoRA/QLoRA)', 'PEFT', 'Retrieval-Augmented Generation (RAG)', 'Prompt Engineering', 'LLM Evaluation', 'LangSmith', 'LLM Observability', 'Human-in-the-Loop', 'vLLM', 'Inference Optimization'],
  },
  {
    category: 'AI / ML',
    icon: '📊',
    skills: ['PyTorch', 'TensorFlow', 'Hugging Face Transformers', 'Scikit-Learn', 'Deep Learning', 'NLP', 'Computer Vision', 'Distributed Training', 'Model Deployment', 'ONNX', 'TensorRT', 'Ray'],
  },
  {
    category: 'Languages',
    icon: '💻',
    skills: ['Python', 'TypeScript', 'JavaScript', 'C++', 'Java', 'SQL', 'Bash'],
  },
  {
    category: 'MLOps & Cloud',
    icon: '☁️',
    skills: ['AWS (EC2, S3, RDS, Lambda, SageMaker, Bedrock)', 'Azure', 'Azure OpenAI', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions CI/CD', 'MLflow', 'Weights & Biases', 'IaC'],
  },
  {
    category: 'Data & Vectors',
    icon: '🗄️',
    skills: ['pgvector', 'Pinecone', 'ChromaDB', 'FAISS', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Apache Spark', 'Airflow', 'ETL Pipelines', 'Embeddings'],
  },
  {
    category: 'Backend & APIs',
    icon: '⚙️',
    skills: ['FastAPI', 'Django', 'REST APIs', 'GraphQL', 'Pydantic', 'Microservices', 'Git'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    skills: ['Next.js', 'React', 'TailwindCSS', 'TypeScript', 'shadcn/ui'],
  },
];

export const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'North Carolina State University',
    location: 'Raleigh, NC, USA',
    period: 'Aug. 2023 – May 2025',
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'Walchand College of Engineering',
    location: 'Sangli, MH, India',
    period: 'Aug. 2017 – Jul. 2021',
  },
];

export const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '90%', label: 'ML Review Time Cut' },
  { value: '35%', label: 'Inference Cost Saved' },
  { value: '50,000+', label: 'Users Migrated' },
];

export const openSource = [
  {
    name: 'readytensor',
    description: 'LLM evaluation and observability framework that scores AI/ML repositories across 85 criteria using GPT-4o with seeded, deterministic inference. Cuts expert review time by 90%.',
    link: 'https://pypi.org/project/readytensor',
    platform: 'PyPI',
    tags: ['Python', 'GPT-4o', 'LLM Evaluation', 'Structured Outputs', 'Observability'],
    metric: '90% reduction in expert review time',
  },
  {
    name: 'B.I.A.S.E.D.',
    description: 'Open-source agentic RAG decision intelligence platform with MCP server, LangGraph multi-agent orchestration, pgvector retrieval, and structured outputs with citations.',
    link: 'https://github.com/TheSelfSa/biased',
    github: 'https://github.com/TheSelfSa/biased',
    platform: 'GitHub',
    tags: ['MCP', 'LangGraph', 'RAG', 'pgvector', 'FastAPI', 'Next.js'],
    metric: 'Apache-2.0 · Full-stack open-source',
  },
];

export const achievements = [
  {
    title: 'M.S. Computer Science',
    organization: 'North Carolina State University',
    year: '2025',
    description: 'Graduate degree focused on machine learning, distributed systems, and AI engineering.',
  },
  {
    title: 'JAEA Research Internship',
    organization: "Japan Atomic Energy Agency — Japan's national nuclear research lab",
    year: '2024',
    description: 'Built and deployed a production computer vision pipeline for nuclear reactor inspection from scratch — 90% detection accuracy, live on AWS Lambda at 15 FPS.',
  },
  {
    title: 'Enterprise Deployment at Global Scale',
    organization: 'Siemens Digital Industries Software',
    year: '2021 – 2023',
    description: 'Engineered Teamcenter on Cloud serving 500+ enterprise customers globally across distributed AWS infrastructure.',
  },
  {
    title: 'Open-Source PyPI Package',
    organization: 'Ready Tensor',
    year: '2024',
    description: 'Shipped readytensor as a publicly available PyPI package — an LLM evaluation framework for AI/ML repository assessment at scale.',
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