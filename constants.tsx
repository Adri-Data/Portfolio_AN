
import React from 'react';
import {
  Linkedin,
  Github,
  Mail,
  Zap,
  BrainCircuit,
  Cloud,
  Share2
} from 'lucide-react';
import { Project, Experience, Language, Translation } from './types';

export const COLORS = {
  blue: '#4285F4',
  red: '#DB4437',
  yellow: '#F4B400',
  green: '#0F9D58',
};

export const TRANSLATIONS: Record<Language, Translation> = {
  en: {
    hero_title: "Adrián Navarro",
    hero_subtitle: "Building Scalable AI Systems for Complex Data & Automation",
    hero_cta: "View My Projects",
    about_title: "About Me",
    experience_title: "Professional Path & Education",
    projects_title: "Featured Case Studies",
    tech_stack_title: "Tech Stack",
    contact_title: "Let's Connect",
    alert_error: "There was an error sending the message. Please try again or contact me directly via email.",
    alert_success: "Please fill in all the fields before sending.",
    cv_label: "Download CV",
    context_quote: "Always strive to be the dumbest person in the room.",
    about_desc_1: "As an Analyst AI Engineer at Minsait, I lead the architecture of production-grade Generative AI systems, from strategic planning to scalable deployment.",
    about_desc_2: "My research on LLM Summarization was presented at the KDD24 Congress, leveraging my background as a Mathematical Engineer specializing in AI.",
    impact_title: "Impact & Results",
    repo_btn: "Open Repository",
    case_btn: "Case Study",
    private_msg: "Private Architecture",
    paper_btn: "View Paper PDF",
    live_btn: "Live Demo",
    soon_btn: "Live Demo (Soon)",
    tech_cat_1: "Gen AI & NLP",
    tech_cat_2: "Programming & Theory",
    tech_cat_3: "Cloud & MLOps",
    tech_cat_4: "Engineering & Lifecycle",
    faq_title: "Industry Insights & FAQ",
    faq_btn_open: "View Industry Insights & FAQ",
    faq_btn_close: "Close Insights",
    faq_q1: "What makes a resilient RAG system?",
    faq_a1: "A production-grade RAG needs more than just embeddings. It requires robust retrieval strategies, evaluation via Ragas, and agentic reasoning as defined in recent LLM research.",
    faq_q2: "How to evaluate AI summarization?",
    faq_a2: "As presented in our KDD24 research, we leverage large-scale datasets and human-aligned metrics to ensure fidelity and hallucination reduction in multi-turn summarization.",
    faq_q3: "Is GCP or AWS better for AI?",
    faq_a3: "Both have strengths. GCP Vertex AI excels in developer experience, while AWS offers deep SageMaker integration. I am certified in both ecosystems.",
    faq_q4: "The future of AI Engineering?",
    faq_a4: "Moving from simple prompts to Autonomous Multi-Agentic Systems. This is where I focus my work at Minsait.",
    about_cards: [
      {
        title: 'Mathematical Engineer & KDD24 Research',
        subtitle: 'LLM Multi-Turn Summarization',
        image: 'about_cards/KDD_photo.jpg',
        color: COLORS.blue,
        icon: <Zap size={24} />
      },
      {
        title: 'Fine-Tuner of RL using GRPO',
        subtitle: 'LLMs Specialist',
        image: 'about_cards/Photo_GRPO.png',
        color: COLORS.green,
        icon: <BrainCircuit size={24} />
      },
      {
        title: 'Full-Stack Developer',
        subtitle: 'Scalable AI Architectures',
        image: 'about_cards/Photo_fullstack.png',
        color: COLORS.yellow,
        icon: <Zap size={24} />
      },
      {
        title: 'Cloud Architect',
        subtitle: 'GCP Certified Systems, Azure and AWS experience',
        image: 'about_cards/Photo_google.png',
        color: COLORS.red,
        icon: <Cloud size={24} />
      }
    ],
    projects: [
      {
        id: 'rag-enterprise',
        title: 'Enterprise RAG Systems',
        description: 'Developed and architected scalable Retrieval-Augmented Generation (RAG) pipelines for diverse enterprise clients, focusing on embedding optimization and high-performance retrieval.',
        metrics: ['🚀 80% reduction in processing latency', '🎯 Faithfulness scores > 0.9 via Ragas', '🤖 Multi-agent workflow integration'],
        tech: ['LANGCHAIN', 'AI GUARDRAILS', 'REFACTORING', 'AZURE', 'PYTHON'],
        image: 'projects/Photo_Chat.png'
      },
      {
        id: 'finetuning-grpo',
        title: 'GRPO Reasoning Model Fine-Tuning',
        description: 'Fine-tuned a reasoning model (GRPO) specifically for complex integral resolution and mathematical reasoning tasks.',
        metrics: ['📈 94% accuracy improvement', '🧠 Reduced hallucination rate by 45%', '⚡ Optimized for low-resource inference'],
        tech: ['Reforced learning', 'HuggingFace', 'Collab GPUs', 'DeepSeek'],
        image: 'projects/GRPO_photo.png',
        repo: 'http://github.com/Adri-Data/FineTuning_GRPO',
        demo: 'https://ollama.com/ImFineThanks/Integrator-1-R1-ZERO-3B'
      },
      {
        id: 'kdd24-research',
        title: 'Summarization Research (KDD24)',
        description: 'Published and presented research on "Summarization of Large Text Volumes Using LLMs" at the prestigious KDD24 Congress.',
        metrics: [
          '🎤 Presented at KDD24',
          '🔗 Solved LLM Context Window limits',
          '📊 Evaluated on billion-token datasets'
        ],
        tech: ['Python', 'LLMs', 'Academic Research', 'NLP'],
        image: 'projects/KDD_2024_UC_Poster_Adrián_Navarro.pptx.png',
        repo: 'https://github.com/Adri-Data/TFG_Summarization_Large_Texts',
        demo: 'https://kdd2024.kdd.org/wp-content/uploads/2024/08/15-KDD-UC-Betrian.pdf'
      },
      {
        id: 'mlops-platform',
        title: 'Cloud AI Platform Architecture',
        description: 'Architected scalable AI pipelines on Azure and AWS using Infrastructure as Code (AWS CDK) and CI/CD via GitHub Actions.',
        metrics: [
          '🛠️ 99.9% pipeline reliability',
          '🔄 Automated model retraining',
          '🌐 Zero-downtime deployments'
        ],
        tech: ['AWS CDK', 'REFACTORING', 'GITHUB ACTIONS', 'LATENCY REDUCTION', 'GitHub Actions'],
        image: 'projects/cloud_photo.png'
      }
    ],
    experiences: [
      {
        company: 'Minsait (Indra Group)',
        role: 'AI Engineer & NLP Specialist',
        period: 'June 2024 – Present',
        points: [
          'Leading AI initiatives from strategic planning and POC design to MVP development.',
          'Owner of critical decisions regarding vector database selection (Elasticsearch, Pinecone) and embedding optimization.',
          'Refactored and parallelized complex AI pipelines, achieving 80% reduction in processing latency.',
          'Established rigorous benchmarking using Ragas to measure faithfulness and precision.'
        ],
        logo: 'logos/minsait.jpeg'
      },
      {
        company: 'Hiberus (Grupo Henneo)',
        role: 'ML & AI Engineer',
        period: 'June 2023 – Sept 2023',
        points: [
          'Developed computer vision algorithms using Python and PyTorch for pattern recognition.',
          'Prototyped initial LLM-based workflows and optimized resources on Microsoft Azure.',
          'Implementation of automated data labeling and validation scripts.'
        ],
        logo: 'logos/hiberus.jpeg'
      },
      {
        company: 'Universitat Pompeu Fabra (UPF)',
        role: 'BSc in Mathematical Engineering in Data Science',
        period: '2020 – 2024',
        points: [
          'Academic Rank: #1 in class. Average grade: 8.26.',
          'Honors in Linear Algebra, Algorithm Design, Visual Analytics, and Project Management.',
          'Advanced programming and cloud-based AI product management focus.'
        ],
        logo: 'logos/UPF.png',
        isEducation: true
      }
    ]
  },
  es: {
    hero_title: "Adrián Navarro",
    hero_subtitle: "Construyendo sistemas de IA escalables para problemas complejos",
    hero_cta: "Ver Proyectos",
    about_title: "Sobre Mí",
    experience_title: "Trayectoria Profesional y Educación",
    projects_title: "Casos de Éxito",
    tech_stack_title: "Stack Tecnológico",
    contact_title: "Contactar",
    alert_error: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo o contacta por email directo.",
    alert_success: "Por favor, rellena todos los campos antes de enviar.",
    cv_label: "Descargar CV",
    context_quote: "Esfuérzate siempre por ser la persona más ignorante de la sala.",
    about_desc_1: "Como Ingeniero de IA en Minsait, lidero la arquitectura de sistemas de IA Generativa de producción, desde la planificación estratégica hasta el despliegue escalable.",
    about_desc_2: "Mi investigación sobre Resumen con LLMs fue presentada en el congreso KDD24, aprovechando mi formación como Ingeniero Matemático especializado en IA.",
    impact_title: "Impacto y Resultados",
    repo_btn: "Ver Repositorio",
    case_btn: "Ver Proyecto",
    private_msg: "Arquitectura Privada",
    paper_btn: "Ver Paper PDF",
    live_btn: "Demo en Vivo",
    soon_btn: "Demo en Vivo (Pronto)",
    tech_cat_1: "Gen AI y NLP",
    tech_cat_2: "Programación y Teoría",
    tech_cat_3: "Cloud y MLOps",
    tech_cat_4: "Ingeniería y Ciclo de Vida",
    faq_title: "Industry Insights y FAQ",
    faq_btn_open: "Ver Industry Insights y FAQ",
    faq_btn_close: "Cerrar Insights",
    faq_q1: "¿Qué hace que un sistema RAG sea resiliente?",
    faq_a1: "Un RAG de grado de producción necesita más que solo embeddings. Requiere estrategias de recuperación robustas, evaluación mediante Ragas y razonamiento agentístico como se define en la investigación reciente sobre LLMs.",
    faq_q2: "¿Cómo evaluar el resumen por IA?",
    faq_a2: "Como se presentó en nuestra investigación de KDD24, aprovechamos conjuntos de datos a gran escala y métricas alineadas con humanos para garantizar la fidelidad y la reducción de alucinaciones en el resumen multi-turno.",
    faq_q3: "¿Es mejor GCP o AWS para la IA?",
    faq_a3: "Ambos tienen puntos fuertes. GCP Vertex AI destaca en la experiencia del desarrollador, mientras que AWS ofrece una integración profunda con SageMaker. Estoy certificado en ambos ecosistemas.",
    faq_q4: "¿El futuro de la Ingeniería de IA?",
    faq_a4: "Pasar de simples prompts a Sistemas Autónomos Multi-Agente. Aquí es donde centro mi trabajo en Minsait.",
    about_cards: [
      {
        title: 'Ingeniero Matemático e Investigador KDD24',
        subtitle: 'Resumen Multi-turno con LLMs',
        image: 'about_cards/KDD_photo.jpg',
        color: COLORS.blue,
        icon: <Zap size={24} />
      },
      {
        title: 'Fine-Tuner of RL con GRPO',
        subtitle: 'Especialista en LLMs',
        image: 'about_cards/Photo_GRPO.png',
        color: COLORS.green,
        icon: <BrainCircuit size={24} />
      },
      {
        title: 'Desarrollador Full-Stack',
        subtitle: 'Arquitecturas de IA Escalables',
        image: 'about_cards/Photo_fullstack.png',
        color: COLORS.yellow,
        icon: <Zap size={24} />
      },
      {
        title: 'Arquitecto Cloud',
        subtitle: 'Sistemas Certificados GCP, experiencia en Azure y AWS',
        image: 'about_cards/Photo_google.png',
        color: COLORS.red,
        icon: <Cloud size={24} />
      }
    ],
    projects: [
      {
        id: 'rag-enterprise',
        title: 'Sistemas RAG Empresariales',
        description: 'Desarrollo y arquitectura de pipelines RAG escalables para diversos clientes corporativos, optimizando embeddings y recuperación de alta performance.',
        metrics: ['🚀 Reducción del 80% en latencia', '🎯 Puntuaciones de fidelidad > 0.9 (Ragas)', '🤖 Integración de flujos multi-agente'],
        tech: ['LANGCHAIN', 'AI GUARDRAILS', 'REFACTORING', 'AZURE', 'PYTHON'],
        image: 'projects/Photo_Chat.png'
      },
      {
        id: 'finetuning-grpo',
        title: 'Fine-Tuning de Modelo GRPO',
        description: 'Fine-tuning de un modelo de razonamiento (GRPO) específicamente para resolución de integrales complejas y tareas matemáticas.',
        metrics: ['📈 94% de mejora en precisión', '🧠 Reducción del 45% en alucinaciones', '⚡ Optimizado para inferencia en bajos recursos'],
        tech: ['Reforced learning', 'HuggingFace', 'Collab GPUs', 'DeepSeek'],
        image: 'projects/GRPO_photo.png',
        repo: 'http://github.com/Adri-Data/FineTuning_GRPO',
        demo: 'https://ollama.com/ImFineThanks/Integrator-1-R1-ZERO-3B'
      },
      {
        id: 'kdd24-research',
        title: 'Investigación en Resumen (KDD24)',
        description: 'Presentación de la investigación "Resumen de grandes volúmenes de texto usando LLMs" en el prestigioso congreso KDD24.',
        metrics: [
          '🎤 Presentado en KDD24',
          '🔗 Solución a límites de ventana de contexto',
          '📊 Evaluado en datasets de miles de millones de tokens'
        ],
        tech: ['Python', 'LLMs', 'Academic Research', 'NLP'],
        image: 'projects/KDD_2024_UC_Poster_Adrián_Navarro.pptx.png',
        repo: 'https://github.com/Adri-Data/TFG_Summarization_Large_Texts',
        demo: 'https://kdd2024.kdd.org/wp-content/uploads/2024/08/15-KDD-UC-Betrian.pdf'
      },
      {
        id: 'mlops-platform',
        title: 'Arquitectura Cloud IA',
        description: 'Arquitectura de pipelines de IA escalables en Azure y AWS usando Infrastructure as Code (AWS CDK) y CI/CD con GitHub Actions.',
        metrics: [
          '🛠️ 99.9% de fiabilidad en pipelines',
          '🔄 Reentrenamiento de modelos automatizado',
          '🌐 Despliegues sin tiempo de inactividad'
        ],
        tech: ['AWS CDK', 'REFACTORING', 'GITHUB ACTIONS', 'LATENCY REDUCTION', 'GitHub Actions'],
        image: 'projects/cloud_photo.png'
      }
    ],
    experiences: [
      {
        company: 'Minsait (Indra Group)',
        role: 'Ingeniero de IA y Especialista en NLP',
        period: 'Junio 2024 – Actualidad',
        points: [
          'Liderando iniciativas de IA desde planificación estratégica y diseño de POC hasta desarrollo de MVP.',
          'Responsable de decisiones críticas sobre bases de datos vectoriales (Elasticsearch, Pinecone) y optimización de embeddings.',
          'Refactorización y paralelización de pipelines complejos, logrando reducción del 80% en latencia.',
          'Establecimiento de benchmarks rigurosos con Ragas para medir fidelidad y precisión.'
        ],
        logo: 'logos/minsait.jpeg'
      },
      {
        company: 'Hiberus (Grupo Henneo)',
        role: 'Ingeniero de ML e IA',
        period: 'Junio 2023 – Sept 2023',
        points: [
          'Desarrollo de algoritmos de visión artificial con Python y PyTorch para reconocimiento de patrones.',
          'Prototypado de flujos basados en LLM y optimización de recursos en Microsoft Azure.',
          'Implementación de scripts automatizados para etiquetado y validación de datos.'
        ],
        logo: 'logos/hiberus.jpeg'
      },
      {
        company: 'Universitat Pompeu Fabra (UPF)',
        role: 'Grado en Ingeniería Matemática en Ciencia de Datos',
        period: '2020 – 2024',
        points: [
          'Rango Académico: #1 de la promoción. Nota media: 8.26.',
          'Matrículas de honor en Álgebra Lineal, Diseño de Algoritmos, Visual Analytics y Gestión de Proyectos.',
          'Foco en programación avanzada y gestión de productos de IA en la nube.'
        ],
        logo: 'logos/UPF.png',
        isEducation: true
      }
    ]
  }
};

export const SOCIAL_LINKS = [
  { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/adrian-ai-datascience", label: "LinkedIn" },
  { icon: <Github size={20} />, url: "https://github.com/Adri-Data", label: "GitHub" },
  { icon: <Mail size={20} />, url: "mailto:Dlearning43@gmail.com", label: "Email" },
  { icon: <Share2 size={20} />, url: "#share", label: "Share Profile" }
];
