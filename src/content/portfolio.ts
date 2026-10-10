export type ProjectSlug = 'medivault' | 'prompt-library' | 'ai-customer-support' | 'brain-tumor' | 'resume-screening' | 'nids';
export interface Project { slug: ProjectSlug; title: string; fullTitle: string; category: string; featuredAchievement: string; cardSummary: string; overview: string; highlights: string[]; stack: string[]; approach: {title: string; text: string}[]; achievements: string[]; repository?: string; }
export const personal = {
  "name": "Arwa Elsayed Eldesawy",
  "title": "AI Engineer",
  "subtitles": [
    "Computer Vision",
    "Generative AI & RAG",
    "Deep Learning",
    "Workflow Automation",
    "FastAPI & Backend APIs"
  ],
  "bio": "Entry-level AI Engineer with a strong foundation in Machine Learning, Deep Learning, Computer Vision, and Generative AI. Experienced in developing AI applications and intelligent workflows using Python, PyTorch, TensorFlow, FastAPI, LLM APIs, and n8n, with internship experience in ML/DL model development and RAG. Strong foundation in AI integration, REST API development, and workflow automation.",
  "email": "arwaeldesawy24@gmail.com",
  "phone": "01117267722",
  "location": "5th Settlement, Cairo, Egypt",
  "githubUrl": "https://github.com/arwaeldesawy",
  "linkedinUrl": "https://www.linkedin.com/in/arwa-eldesawy-34a6b324a",
  "profilePhotoUrl": "/profile.jpg",
  "initials": "AE",
  "cvUrl": "/Arwa_Eldesawy_CV.pdf",
  "internationalPhone": "+201117267722"
} as const;
export const projects: Project[] = [
  {
    "slug": "medivault",
    "featuredAchievement": "Four integrated medical vision models",
    "cardSummary": "A medical platform connecting patient records and image analysis. Fingerprint identification helps retrieve a patient’s history.",
    "achievements": ["Integrated four medical vision models in one platform.","Implemented fingerprint-based patient identification.","Connected patient records with a Gemini chatbot and real-time communication."],
    "title": "MediVault",
    "fullTitle": "MediVault: Patient Medical History System with Fingerprint Identification",
    "category": "Medical AI & systems",
    "overview": "Full-stack medical platform integrating AI-based medical image analysis with secure electronic patient records.",
    "highlights": [
      "Full-stack medical platform integrating AI-based medical image analysis with secure electronic patient records.",
      "Integrated four deep learning models for brain tumor, pneumonia, bone fracture, and stroke detection.",
      "Built FastAPI REST APIs with PostgreSQL and SQLAlchemy for secure, efficient patient data management.",
      "Integrated Google Gemini for an AI-powered medical chatbot and document simplification, with WebSocket-based real-time communication.",
      "Implemented fingerprint-based emergency patient identification."
    ],
    "stack": [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "PyTorch",
      "TensorFlow/Keras",
      "Gemini",
      "WebSockets"
    ],
    "approach": [
      {
        "title": "Identify & retrieve",
        "text": "Fingerprint-based emergency identification connects a patient to their electronic medical history. FastAPI REST APIs manage patient data through PostgreSQL and SQLAlchemy."
      },
      {
        "title": "Analyze medical images",
        "text": "Four deep learning models support brain tumor, pneumonia, bone fracture, and stroke detection, using PyTorch and TensorFlow/Keras."
      },
      {
        "title": "Make information accessible",
        "text": "Google Gemini powers a medical chatbot and document simplification. WebSockets provide real-time communication."
      }
    ]
  },
  {
    "slug": "prompt-library",
    "featuredAchievement": "15 reusable prompt templates",
    "cardSummary": "A prompt library for Q&A, summarization, and creative writing. Dynamic inputs connect reusable templates to Gemini.",
    "achievements": ["Built a library of 15 reusable prompt templates.","Supported Q&A, summarization, and creative writing.","Connected dynamic inputs to Gemini-generated responses."],
    "title": "Prompt Library",
    "fullTitle": "Prompt Library: LLM-Powered Prompt Management & Generation System",
    "category": "Generative AI & APIs",
    "overview": "End-to-end Generative AI application managing 15 reusable prompt templates for Q&A, Summarization, and Creative Writing.",
    "highlights": [
      "End-to-end Generative AI application managing 15 reusable prompt templates for Q&A, Summarization, and Creative Writing.",
      "FastAPI REST APIs for prompt retrieval, filtering, validation, and dynamic prompt construction.",
      "Integrated Google Gemini API with a JavaScript frontend for dynamic inputs and LLM-generated responses."
    ],
    "stack": [
      "Python",
      "FastAPI",
      "Google Gemini API",
      "JavaScript",
      "REST APIs"
    ],
    "approach": [
      {
        "title": "Choose a reusable template",
        "text": "A library of 15 templates covers Q&A, summarization, and creative writing. FastAPI endpoints support retrieval and filtering."
      },
      {
        "title": "Construct & generate",
        "text": "The JavaScript frontend collects dynamic inputs. The API validates inputs, constructs the prompt, and integrates Google Gemini to return an LLM-generated response."
      }
    ]
  },
  {
    "slug": "ai-customer-support",
    "featuredAchievement": "Automated replies with conversational memory",
    "cardSummary": "An n8n workflow for Telegram and WhatsApp support. It connects automated replies, conversation logs, and email notifications.",
    "achievements": ["Automated customer responses with conversational memory.","Connected Telegram/WhatsApp messaging to an n8n workflow.","Added conversation logging in Google Sheets and Gmail notifications."],
    "title": "AI Customer Support Automation",
    "fullTitle": "AI Customer Support Automation",
    "category": "Intelligent automation",
    "overview": "AI-powered customer support workflow using n8n, an LLM API, and conversational memory for automated messaging on Telegram/WhatsApp.",
    "highlights": [
      "AI-powered customer support workflow using n8n, an LLM API, and conversational memory for automated messaging on Telegram/WhatsApp.",
      "Automated customer responses, conversation logging, and data storage in Google Sheets, with Gmail integration for notifications."
    ],
    "stack": [
      "n8n",
      "LLM API",
      "Telegram/WhatsApp",
      "Google Sheets",
      "Gmail",
      "AI Agent/Memory"
    ],
    "approach": [
      {
        "title": "Connect the conversation",
        "text": "An n8n workflow connects Telegram/WhatsApp messaging to an LLM API and conversational memory for automated customer responses."
      },
      {
        "title": "Keep a record & notify",
        "text": "Conversations are logged and stored in Google Sheets. Gmail integration provides notifications alongside the messaging workflow."
      }
    ]
  },
  {
    "slug": "brain-tumor",
    "featuredAchievement": "XceptionNet MRI classification pipeline",
    "cardSummary": "A computer vision pipeline for classifying brain tumors in MRI scans. Transfer learning and augmentation support model training.",
    "achievements": ["Built an XceptionNet pipeline for MRI classification.","Applied transfer learning and augmentation to address class imbalance.","Evaluated predictions with confusion matrices and classification reports."],
    "title": "Brain Tumor Classification",
    "fullTitle": "Brain Tumor Classification",
    "category": "Computer vision",
    "overview": "End-to-end Computer Vision pipeline using XceptionNet to classify brain tumors from MRI scans.",
    "highlights": [
      "End-to-end Computer Vision pipeline using XceptionNet to classify brain tumors from MRI scans.",
      "Applied Transfer Learning and Data Augmentation to address class imbalance and boost accuracy.",
      "Evaluated with confusion matrices and classification reports."
    ],
    "stack": [
      "Python",
      "Deep Learning",
      "OpenCV",
      "XceptionNet",
      "Transfer Learning"
    ],
    "approach": [
      {
        "title": "Build the vision pipeline",
        "text": "MRI scans feed an end-to-end computer vision pipeline based on XceptionNet. Transfer learning and data augmentation address class imbalance."
      },
      {
        "title": "Evaluate the classifier",
        "text": "Confusion matrices and classification reports are used to evaluate model predictions."
      }
    ]
  },
  {
    "slug": "resume-screening",
    "featuredAchievement": "Resume ranking against job descriptions",
    "cardSummary": "An NLP system that scores resumes for job relevance. TF-IDF, cosine similarity, and classifiers support candidate ranking.",
    "achievements": ["Ranked resumes against job descriptions.","Implemented TF-IDF and cosine similarity for relevance scoring.","Trained and evaluated Logistic Regression and Random Forest classifiers."],
    "title": "AI-Powered Resume Screening",
    "fullTitle": "AI-Powered Resume Screening",
    "category": "Natural language processing",
    "overview": "NLP-based system that ranks candidates against job descriptions using TF-IDF and machine learning classification.",
    "highlights": [
      "NLP-based system that ranks candidates against job descriptions.",
      "TF-IDF vectorization and cosine similarity for feature extraction and relevance scoring.",
      "Trained and evaluated Logistic Regression and Random Forest models to automate candidate filtering."
    ],
    "stack": [
      "Python",
      "NLP",
      "Scikit-Learn",
      "TF-IDF",
      "Cosine Similarity"
    ],
    "approach": [
      {
        "title": "Represent & compare text",
        "text": "Resume and job-description text is represented with TF-IDF. Cosine similarity provides relevance scores for ranking candidates."
      },
      {
        "title": "Train candidate classifiers",
        "text": "Logistic Regression and Random Forest models are trained and evaluated to support automated candidate filtering."
      }
    ]
  },
  {
    "slug": "nids",
    "featuredAchievement": "SVM and Random Forest intrusion detection",
    "cardSummary": "A machine learning pipeline built on the NSL-KDD dataset. A Streamlit app presents predictions and log analysis.",
    "achievements": ["Built an NSL-KDD pipeline with SVM and Random Forest.","Implemented log transformations and multiple missing-value strategies.","Presented predictions and log analysis through a Streamlit application."],
    "title": "Network Intrusion Detection System",
    "fullTitle": "Network Intrusion Detection System (NIDS)",
    "category": "Machine learning & security",
    "overview": "End-to-end ML pipeline using SVM and Random Forest on the NSL-KDD dataset with Streamlit deployment.",
    "highlights": [
      "End-to-end ML pipeline using SVM and Random Forest on the NSL-KDD dataset.",
      "Data preprocessing with log transformations and multi-strategy NaN handling (imputation/removal).",
      "Deployed an interactive Streamlit app for real-time network threat prediction and log analysis."
    ],
    "stack": [
      "Python",
      "Machine Learning",
      "Scikit-Learn",
      "Streamlit",
      "NSL-KDD"
    ],
    "approach": [
      {
        "title": "Prepare network data",
        "text": "The NSL-KDD pipeline includes exploration, log transformations, and missing-value handling through imputation or removal."
      },
      {
        "title": "Classify & present",
        "text": "SVM and Random Forest classify network traffic. The linked repository also explores KNN, distributions, correlations, accuracy, and confusion matrices. The portfolio describes a Streamlit interface for threat prediction and log analysis."
      }
    ],
    "repository": "https://github.com/arwaeldesawy/NSL-KDD-Intrusion-Detection-System"
  }
];
export const skills = [
  {
    "name": "Languages",
    "items": [
      "Python",
      "C++",
      "SQL"
    ]
  },
  {
    "name": "Machine Learning",
    "items": [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Pandas"
    ]
  },
  {
    "name": "Computer Vision",
    "items": [
      "OpenCV",
      "YOLOv8",
      "CNNs",
      "OCR",
      "Transfer Learning"
    ]
  },
  {
    "name": "LLMs & Generative AI",
    "items": [
      "LLMs",
      "Prompt Engineering",
      "RAG",
      "LLM APIs"
    ]
  },
  {
    "name": "AI Automation",
    "items": [
      "n8n",
      "Workflow Automation"
    ]
  },
  {
    "name": "Databases",
    "items": [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "Oracle"
    ]
  },
  {
    "name": "Backend & APIs",
    "items": [
      "FastAPI",
      "REST APIs",
      "SQLAlchemy"
    ]
  },
  {
    "name": "Tools & Practices",
    "items": [
      "Git/GitHub",
      "Jira",
      "Agile",
      "Pull Requests",
      "Code Review",
      "Cursor",
      "Claude Code"
    ]
  }
] as const;
export const experiences = [
  {
    "id": "digitera",
    "role": "Tech Track Participant",
    "company": "Digitera Program",
    "bullets": [
      "Applied requirements analysis and product planning: BRD-to-PRD, user stories, scope definition, and acceptance criteria.",
      "Used Jira and Agile workflows for backlog management, sprint planning, and delivery tracking.",
      "Applied AI-assisted development and engineering workflows using Cursor, Claude Code, MCP, Git/GitHub, Pull Requests, code reviews, debugging, and testing."
    ]
  },
  {
    "id": "enppi",
    "role": "AI Intern",
    "company": "ENPPI",
    "bullets": [
      "Trained Machine Learning and Deep Learning models.",
      "Applied Generative AI and RAG frameworks to build intelligent, context-aware retrieval systems.",
      "Integrated LLMs with vector embeddings to automate data extraction and improve search accuracy."
    ]
  },
  {
    "id": "abe",
    "role": "Intern",
    "company": "ABE (Agricultural Bank of Egypt)",
    "bullets": [
      "Designed and queried relational databases using SQL to clean, filter, and extract complex datasets.",
      "Optimized database schemas and queries using joins, aggregations, and indexing for fast data retrieval."
    ]
  }
] as const;
export const education = {
  "degree": "Bachelor of Computer Science",
  "major": "Artificial Intelligence",
  "institution": "Misr University for Science and Technology (MUST)",
  "location": "Cairo, Egypt",
  "years": "2022–2026",
  "gpa": "3.66/4.0"
} as const;
export const activities = [
  {
    "title": "Data Science and Machine Learning Diploma",
    "description": "Epsilon AI"
  },
  {
    "title": "DIGITOPIA Hackathon",
    "description": "Participant"
  }
] as const;
export const focusAreas = [
  {
    "title": "Computer Vision",
    "technologies": [
      "OpenCV",
      "YOLOv8",
      "CNNs",
      "XceptionNet",
      "OCR",
      "Transfer Learning"
    ]
  },
  {
    "title": "Generative AI & RAG",
    "technologies": [
      "LLM APIs",
      "RAG Frameworks",
      "Prompt Engineering",
      "Vector Embeddings",
      "Gemini"
    ]
  },
  {
    "title": "AI Automation & APIs",
    "technologies": [
      "FastAPI",
      "n8n",
      "PostgreSQL",
      "WebSockets",
      "REST APIs",
      "SQLAlchemy"
    ]
  }
] as const;
export const navigation = ["Projects", "About", "Skills", "Experience", "Education", "Contact"] as const;
