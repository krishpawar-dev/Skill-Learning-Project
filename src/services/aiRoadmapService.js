import { api } from './apiClient'

const ROADMAP_CONFIG = {
  frontend: {
    title: 'Frontend Developer',
    durations: {
      3: '3-Month Frontend Job-Ready Roadmap',
      6: '6-Month Frontend Job-Ready Roadmap',
    },
    technologies: [
      'HTML5',
      'CSS3',
      'Responsive Design',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Git/GitHub',
      'REST APIs',
      'Testing',
      'Accessibility',
      'Performance',
    ],
    weeks: [
      ['HTML', 'Semantic HTML, forms, tables, SEO basics'],
      ['CSS', 'Selectors, box model, flexbox, grid, responsive design'],
      ['JavaScript Basics', 'Variables, functions, arrays, objects, DOM'],
      ['JavaScript Advanced', 'ES6+, promises, async/await, modules, closures'],
      ['Browser', 'Events, storage, cookies, HTTP and browser lifecycle'],
      ['Git + GitHub', 'Branches, pull requests, merge conflicts and collaboration'],
      ['TypeScript', 'Types, interfaces, generics, utility types'],
      ['React Basics', 'Components, JSX, props, state and events'],
      ['React Advanced', 'Hooks, context, forms, reusable components'],
      ['APIs', 'REST APIs, fetch, loading states and error handling'],
      ['Next.js', 'Routing, server/client concepts and data fetching'],
      ['Testing', 'Unit, integration and component testing'],
      ['Performance', 'Code splitting, lazy loading, caching and optimization'],
      ['Accessibility', 'Keyboard navigation, ARIA and semantic UI'],
      ['Projects', 'Build a production-style application'],
      ['Job Preparation', 'Resume, portfolio, GitHub and interviews'],
    ],
    projects: [
      'Responsive portfolio website',
      'React task management application',
      'API-driven dashboard',
      'Authentication application',
      'Final full-featured frontend capstone',
    ],
    interview: [
      'What is the DOM?',
      'Difference between let, const and var?',
      'What is a closure?',
      'How does event bubbling work?',
      'Promise vs async/await?',
      'What is React reconciliation?',
      'Props vs state?',
      'What are React hooks?',
      'useMemo vs useCallback?',
      'What is responsive design?',
      'How do you improve frontend performance?',
      'What is CORS?',
      'What is accessibility and why is it important?',
      'How would you structure a large React application?',
    ],
  },

  backend: {
    title: 'Backend Developer',
    technologies: [
      'Programming Language',
      'Data Structures',
      'Algorithms',
      'HTTP',
      'REST API',
      'Authentication',
      'SQL',
      'PostgreSQL/MySQL',
      'MongoDB',
      'Caching',
      'Testing',
      'Docker',
      'Cloud',
    ],
    weeks: [
      ['Programming Fundamentals', 'Variables, functions, OOP, errors and modules'],
      ['Data Structures', 'Arrays, maps, sets, stacks, queues and trees'],
      ['Algorithms', 'Searching, sorting, complexity and recursion'],
      ['Git', 'Branches, commits, pull requests and collaboration'],
      ['HTTP', 'Requests, responses, headers, status codes and cookies'],
      ['REST APIs', 'CRUD, routing, validation and pagination'],
      ['Databases', 'SQL, joins, indexes, constraints and transactions'],
      ['NoSQL', 'MongoDB, documents, aggregation and schema design'],
      ['Authentication', 'Sessions, JWT, OAuth and authorization'],
      ['Security', 'Input validation, hashing, rate limiting and OWASP basics'],
      ['Architecture', 'MVC, service layers and clean architecture'],
      ['Caching', 'Redis, caching strategies and queues'],
      ['Testing', 'Unit, integration and API testing'],
      ['Docker', 'Containers, images and Docker Compose'],
      ['Deployment', 'Linux, cloud, CI/CD and environment variables'],
      ['Job Preparation', 'System design, resume, projects and interviews'],
    ],
    projects: [
      'REST API with authentication',
      'E-commerce backend',
      'Blog/CMS API',
      'Real-time chat backend',
      'Production-style backend capstone',
    ],
    interview: [
      'What happens when a request reaches a server?',
      'What is REST?',
      'GET vs POST vs PUT vs PATCH?',
      'What is middleware?',
      'SQL vs NoSQL?',
      'What is database indexing?',
      'What is a transaction?',
      'JWT vs session authentication?',
      'Authentication vs authorization?',
      'What is hashing?',
      'What is caching?',
      'What is Redis?',
      'How does rate limiting work?',
      'How would you design a scalable API?',
      'What is horizontal vs vertical scaling?',
    ],
  },

  fullstack: {
    title: 'Full Stack Developer',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'Express',
      'Python',
      'FastAPI/Django',
      'Java/Spring Boot',
      'SQL',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Docker',
      'Git',
      'CI/CD',
      'Cloud',
    ],
    weeks: [
      ['HTML + CSS', 'Semantic HTML, Flexbox, Grid and responsive design'],
      ['JavaScript', 'ES6+, DOM, async programming and modules'],
      ['TypeScript', 'Types, interfaces and generics'],
      ['React', 'Components, hooks, forms and state'],
      ['Next.js', 'Routing, rendering and data fetching'],
      ['Git + GitHub', 'Professional Git workflow'],
      ['Node.js', 'Runtime, modules, filesystem and HTTP'],
      ['Express', 'Routes, middleware, validation and error handling'],
      ['Python Backend', 'FastAPI/Django fundamentals'],
      ['Databases', 'SQL, PostgreSQL, joins, indexes and transactions'],
      ['MongoDB', 'Document modeling and aggregation'],
      ['Authentication', 'Sessions, JWT, OAuth and RBAC'],
      ['APIs', 'REST, pagination, filtering and API documentation'],
      ['Redis', 'Caching and background jobs'],
      ['Docker', 'Containers and Docker Compose'],
      ['Cloud + CI/CD', 'Deployment, pipelines, monitoring and environment management'],
      ['Architecture', 'Scalable full-stack application design'],
      ['Capstone', 'Build and deploy a complete production-style application'],
    ],
    projects: [
      'Full-stack authentication system',
      'E-commerce platform',
      'Project management SaaS',
      'Real-time chat application',
      'Final production-style full-stack capstone',
    ],
    interview: [
      'Explain the complete lifecycle of a web request.',
      'Frontend vs backend responsibilities?',
      'What is REST?',
      'What is CORS?',
      'How does authentication work?',
      'JWT vs sessions?',
      'SQL vs NoSQL?',
      'How do indexes improve databases?',
      'What is caching?',
      'What is Docker?',
      'How would you deploy a full-stack application?',
      'How would you scale a web application?',
      'How do you secure an API?',
      'Explain a project you built from frontend to backend.',
    ],
  },

  aiml: {
    title: 'AI / Machine Learning Engineer',
    technologies: [
      'Python',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Statistics',
      'Linear Algebra',
      'Probability',
      'SQL',
      'Scikit-learn',
      'Feature Engineering',
      'TensorFlow/PyTorch',
      'Deep Learning',
      'NLP',
      'Transformers',
      'LLM Fundamentals',
      'FastAPI',
      'Docker',
      'Model Deployment',
    ],
    weeks: [
      ['Python', 'Functions, OOP, files, modules and virtual environments'],
      ['NumPy', 'Arrays, vectorization and numerical operations'],
      ['Pandas', 'DataFrames, cleaning, grouping and transformation'],
      ['Visualization', 'Matplotlib, charts and exploratory analysis'],
      ['Statistics', 'Mean, variance, distributions and hypothesis testing'],
      ['Probability', 'Conditional probability, Bayes and random variables'],
      ['Linear Algebra', 'Vectors, matrices and transformations'],
      ['SQL', 'Queries, joins, aggregation and window functions'],
      ['Machine Learning', 'Supervised vs unsupervised learning'],
      ['Models', 'Regression, classification, trees and clustering'],
      ['Evaluation', 'Train/test split, cross-validation and metrics'],
      ['Feature Engineering', 'Encoding, scaling and feature selection'],
      ['Deep Learning', 'Neural networks, backpropagation and optimization'],
      ['PyTorch/TensorFlow', 'Build and train neural networks'],
      ['NLP', 'Text preprocessing, embeddings and transformers'],
      ['LLMs', 'Tokens, embeddings, attention, RAG and evaluation'],
      ['Deployment', 'FastAPI, Docker and model serving'],
      ['Portfolio', 'Build and deploy AI/ML projects'],
    ],
    projects: [
      'House price prediction',
      'Customer churn prediction',
      'Image classification model',
      'NLP text classification project',
      'RAG-based AI application',
      'End-to-end ML deployment project',
    ],
    interview: [
      'What is supervised learning?',
      'What is overfitting?',
      'Bias vs variance?',
      'What is cross-validation?',
      'Precision vs recall?',
      'What is an ROC-AUC score?',
      'What is feature engineering?',
      'What is gradient descent?',
      'How does a neural network learn?',
      'CNN vs RNN?',
      'What is an embedding?',
      'What is attention?',
      'What is a transformer?',
      'What is RAG?',
      'How would you deploy an ML model?',
    ],
  },

  data: {
    title: 'Data Analyst',
    technologies: [
      'Excel',
      'SQL',
      'Python',
      'Pandas',
      'NumPy',
      'Statistics',
      'Data Cleaning',
      'Data Visualization',
      'Power BI',
      'Tableau',
      'Business Analysis',
    ],
    weeks: [
      ['Excel', 'Formulas, lookup functions, pivot tables and charts'],
      ['SQL Basics', 'SELECT, WHERE, GROUP BY, ORDER BY'],
      ['SQL Advanced', 'JOINs, subqueries, CTEs and window functions'],
      ['Statistics', 'Mean, median, variance and distributions'],
      ['Python', 'Core Python for data analysis'],
      ['Pandas', 'Cleaning, filtering, grouping and merging'],
      ['NumPy', 'Numerical operations and arrays'],
      ['EDA', 'Exploratory data analysis'],
      ['Visualization', 'Charts and dashboard design'],
      ['Power BI', 'Data modeling and dashboards'],
      ['Tableau', 'Interactive analytics and storytelling'],
      ['Business Analytics', 'KPIs, trends and decision-making'],
      ['Advanced SQL', 'Complex business queries'],
      ['Projects', 'Real-world datasets and case studies'],
      ['Portfolio', 'Dashboard + GitHub documentation'],
      ['Interviews', 'SQL, statistics and business case interviews'],
    ],
    projects: [
      'Sales analytics dashboard',
      'Customer churn analysis',
      'E-commerce business dashboard',
      'Marketing campaign analysis',
      'End-to-end data analytics portfolio',
    ],
    interview: [
      'INNER JOIN vs LEFT JOIN?',
      'WHERE vs HAVING?',
      'What is a window function?',
      'What is normalization?',
      'Mean vs median?',
      'Correlation vs causation?',
      'How do you handle missing data?',
      'How do you find outliers?',
      'How would you design a dashboard?',
      'How do you explain a data insight to a non-technical person?',
    ],
  },

  cybersecurity: {
    title: 'Cyber Security',
    technologies: [
      'Networking',
      'Linux',
      'Python',
      'Security Fundamentals',
      'OWASP',
      'SOC',
      'SIEM',
      'Incident Response',
      'Digital Forensics',
      'Cloud Security',
      'IAM',
      'Threat Detection',
    ],
    weeks: [
      ['Networking', 'TCP/IP, DNS, HTTP, ports, routing and subnetting'],
      ['Linux', 'Users, permissions, processes, services and logs'],
      ['Security Fundamentals', 'CIA triad, threats, vulnerabilities and risk'],
      ['Python', 'Automation, log parsing and security tooling'],
      ['Web Security', 'OWASP concepts and secure application design'],
      ['SOC', 'Alerts, incidents, IOCs and triage'],
      ['SIEM', 'Log collection, correlation and detection'],
      ['Network Security', 'Firewalls, IDS/IPS, VPN and segmentation'],
      ['Identity', 'MFA, IAM, RBAC and least privilege'],
      ['Cloud Security', 'Cloud logging, security groups and shared responsibility'],
      ['Incident Response', 'Detection, containment, recovery and reporting'],
      ['Detection Engineering', 'Rules, false positives and threat detection'],
      ['Portfolio', 'Security labs and incident reports'],
      ['Interviews', 'SOC, networking, Linux and security questions'],
    ],
    projects: [
      'Python log analyzer',
      'PCAP traffic investigation',
      'Mini SOC dashboard',
      'Security incident report',
      'Web security lab report',
    ],
    interview: [
      'What is the CIA triad?',
      'TCP vs UDP?',
      'What is DNS?',
      'What is a firewall?',
      'IDS vs IPS?',
      'What is SIEM?',
      'What is an IOC?',
      'Authentication vs authorization?',
      'What is least privilege?',
      'What is phishing?',
      'How would you investigate a suspicious login?',
      'What steps would you take after detecting an incident?',
    ],
  },

  devops: {
    title: 'DevOps / Cloud Engineer',
    technologies: [
      'Linux',
      'Git',
      'Bash',
      'Python',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'AWS',
      'Azure',
      'GCP',
      'Terraform',
      'Monitoring',
    ],
    weeks: [
      ['Linux', 'Processes, permissions, networking and services'],
      ['Git', 'Branches, workflows and collaboration'],
      ['Bash/Python', 'Automation and scripting'],
      ['Networking', 'DNS, HTTP, TCP/IP and load balancing'],
      ['Docker', 'Images, containers and Docker Compose'],
      ['CI/CD', 'Build, test and deployment pipelines'],
      ['Cloud', 'AWS/Azure/GCP core services'],
      ['Infrastructure', 'Compute, storage, networking and IAM'],
      ['Kubernetes', 'Pods, deployments, services and configs'],
      ['Terraform', 'Infrastructure as code'],
      ['Security', 'Secrets, IAM and secure deployments'],
      ['Monitoring', 'Logs, metrics, alerts and observability'],
      ['Architecture', 'High availability and scalability'],
      ['Projects', 'Deploy production-style applications'],
      ['Interviews', 'Linux, Docker, Kubernetes and cloud questions'],
    ],
    projects: [
      'Dockerized web application',
      'CI/CD pipeline',
      'Cloud deployment',
      'Kubernetes deployment',
      'Terraform infrastructure project',
    ],
    interview: [
      'What is Docker?',
      'Container vs virtual machine?',
      'What is CI/CD?',
      'What is Kubernetes?',
      'Pod vs container?',
      'What is Infrastructure as Code?',
      'What is Terraform?',
      'How does load balancing work?',
      'What is horizontal scaling?',
      'How would you deploy an application with zero downtime?',
    ],
  },
}

const LANGUAGE_CONFIG = {
  python: {
    title: 'Python Developer',
    topics: [
      'Python syntax and data types',
      'Functions and modules',
      'OOP',
      'Exceptions',
      'File handling',
      'List/dict/set comprehensions',
      'Iterators and generators',
      'Decorators',
      'Virtual environments',
      'Type hints',
      'Testing with pytest',
      'APIs',
      'FastAPI/Django',
      'SQL',
      'Async programming',
    ],
  },

  javascript: {
    title: 'JavaScript Developer',
    topics: [
      'Variables and data types',
      'Functions',
      'Arrays and objects',
      'DOM',
      'Events',
      'ES6+',
      'Destructuring',
      'Modules',
      'Closures',
      'Promises',
      'Async/await',
      'Event loop',
      'Fetch/API',
      'Node.js',
      'Testing',
    ],
  },

  typescript: {
    title: 'TypeScript Developer',
    topics: [
      'Primitive and object types',
      'Interfaces',
      'Type aliases',
      'Unions and intersections',
      'Generics',
      'Enums',
      'Utility types',
      'Type narrowing',
      'Classes',
      'Async TypeScript',
      'React with TypeScript',
      'Node.js with TypeScript',
      'Testing',
    ],
  },

  java: {
    title: 'Java Developer',
    topics: [
      'Java syntax',
      'OOP',
      'Collections',
      'Generics',
      'Exceptions',
      'Streams',
      'Lambda expressions',
      'Multithreading',
      'JVM',
      'Memory management',
      'SQL',
      'Spring Boot',
      'REST APIs',
      'JPA/Hibernate',
      'Testing',
    ],
  },

  cpp: {
    title: 'C++ Developer',
    topics: [
      'Syntax',
      'Pointers and references',
      'Memory management',
      'OOP',
      'STL',
      'Vectors, maps and sets',
      'Algorithms',
      'Templates',
      'Smart pointers',
      'Move semantics',
      'Multithreading',
      'DSA',
      'Competitive programming',
    ],
  },

  csharp: {
    title: 'C# / .NET Developer',
    topics: [
      'C# fundamentals',
      'OOP',
      'Collections',
      'LINQ',
      'Async/await',
      'Exception handling',
      '.NET runtime',
      'ASP.NET Core',
      'REST APIs',
      'Entity Framework',
      'SQL',
      'Authentication',
      'Testing',
      'Docker',
    ],
  },

  go: {
    title: 'Go Developer',
    topics: [
      'Go syntax',
      'Structs',
      'Interfaces',
      'Pointers',
      'Goroutines',
      'Channels',
      'Concurrency',
      'Error handling',
      'Packages',
      'HTTP servers',
      'REST APIs',
      'Database access',
      'Testing',
      'Docker',
    ],
  },

  php: {
    title: 'PHP Developer',
    topics: [
      'PHP syntax',
      'Functions',
      'OOP',
      'Composer',
      'Namespaces',
      'SQL',
      'MySQL',
      'REST APIs',
      'Authentication',
      'Laravel',
      'Testing',
      'Deployment',
    ],
  },

  rust: {
    title: 'Rust Developer',
    topics: [
      'Syntax',
      'Ownership',
      'Borrowing',
      'Lifetimes',
      'Structs and enums',
      'Traits',
      'Pattern matching',
      'Error handling',
      'Concurrency',
      'Cargo',
      'Web development',
      'Testing',
    ],
  },

  kotlin: {
    title: 'Kotlin Developer',
    topics: [
      'Kotlin syntax',
      'Null safety',
      'Functions',
      'Classes',
      'Collections',
      'Coroutines',
      'Generics',
      'Android fundamentals',
      'Jetpack',
      'APIs',
      'Testing',
    ],
  },

  swift: {
    title: 'Swift Developer',
    topics: [
      'Swift syntax',
      'Optionals',
      'Functions',
      'Structs and classes',
      'Protocols',
      'Generics',
      'Concurrency',
      'SwiftUI',
      'iOS architecture',
      'Networking',
      'Persistence',
      'Testing',
    ],
  },
}

const normalize = (value = '') =>
  value
    .toLowerCase()
    .replace(/[^\w\s+#.-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const detectDuration = (prompt) => {
  const match = prompt.match(
    /(\d+)\s*(month|months|month's|months'|महिने|महीने)/i
  )

  return match ? Number(match[1]) : null
}

const detectCareer = (prompt) => {
  const text = normalize(prompt)

  if (
    /(full[\s-]*stack|fullstack|frontend.*backend|backend.*frontend)/i.test(
      text
    )
  ) {
    return 'fullstack'
  }

  if (/(frontend|front end|react developer|web developer|ui developer)/i.test(text)) {
    return 'frontend'
  }

  if (/(backend|back end|server side|api developer)/i.test(text)) {
    return 'backend'
  }

  if (
    /(ai\/ml|ai ml|machine learning|deep learning|artificial intelligence|ml engineer)/i.test(
      text
    )
  ) {
    return 'aiml'
  }

  if (/(data analyst|data analysis|data analytics|business analyst)/i.test(text)) {
    return 'data'
  }

  if (
    /(cyber security|cybersecurity|information security|infosec|ethical hacking|penetration testing|soc analyst|security analyst)/i.test(
      text
    )
  ) {
    return 'cybersecurity'
  }

  if (/(devops|cloud engineer|aws|azure|gcp|kubernetes|terraform)/i.test(text)) {
    return 'devops'
  }

  return null
}

const detectLanguage = (prompt) => {
  const text = normalize(prompt)

  const aliases = {
    python: ['python'],
    javascript: ['javascript', 'js', 'node js', 'nodejs'],
    typescript: ['typescript', 'ts'],
    java: ['java'],
    cpp: ['c++', 'cpp'],
    csharp: ['c#', 'c sharp', 'dotnet', '.net'],
    go: ['golang', 'go'],
    php: ['php'],
    rust: ['rust'],
    kotlin: ['kotlin'],
    swift: ['swift'],
  }

  for (const [language, names] of Object.entries(aliases)) {
    if (names.some((name) => text.includes(name))) {
      return language
    }
  }

  return null
}

const buildCareerRoadmap = (careerKey, duration, originalPrompt) => {
  const config = ROADMAP_CONFIG[careerKey]

  const months = duration || 3

  const selectedWeeks =
    months <= 3
      ? config.weeks.slice(0, Math.min(config.weeks.length, 12))
      : config.weeks

  const weeklyPlan = selectedWeeks
    .map(
      ([topic, details], index) =>
        `### Week ${index + 1}: ${topic}
- ${details}
- Practice: build a small hands-on exercise.
- Deliverable: document what you learned and push the work to GitHub.`
    )
    .join('\n\n')

  const extraMonths =
    months > 3
      ? `

## Months ${Math.min(months, 6)} — Job Preparation
- Strengthen weak technical areas.
- Build 2 additional portfolio projects.
- Practice DSA and role-specific interview questions.
- Improve GitHub documentation and project explanations.
- Complete mock interviews every week.
- Apply to internships, junior roles and entry-level positions.`
      : ''

  return `# ${months}-Month ${config.title} Roadmap

Goal: ${originalPrompt}

## Technologies & Topics

${config.technologies.map((item) => `- ${item}`).join('\n')}

## Week-by-Week Plan

${weeklyPlan}

${extraMonths}

## Portfolio Projects

${config.projects.map((project, index) => `${index + 1}. ${project}`).join('\n')}

## Main Interview Questions

${config.interview.map((question, index) => `${index + 1}. ${question}`).join('\n')}

## Daily Routine

- 45 minutes: concepts
- 60 minutes: coding/hands-on practice
- 30 minutes: project work
- 20 minutes: revision
- 15 minutes: interview questions

## Job-Ready Checklist

- Build at least 3 strong projects.
- Push projects to GitHub with proper README files.
- Practice DSA according to the target role.
- Practice technical and behavioral interviews.
- Build a portfolio.
- Prepare a role-specific resume.
- Start applying before you feel 100% ready.

Focus on consistent hands-on practice instead of only watching tutorials.`
}

const buildLanguageRoadmap = (languageKey, duration, originalPrompt) => {
  const config = LANGUAGE_CONFIG[languageKey]
  const months = duration || 3

  const topics = config.topics

  const weeks = Array.from({ length: Math.min(months * 4, topics.length) }, (_, i) => {
    const topic = topics[i]

    return `### Week ${i + 1}: ${topic}
- Learn the fundamentals.
- Solve 10-15 small coding problems.
- Build one practical exercise.
- Push your work to GitHub.`
  }).join('\n\n')

  return `# ${months}-Month ${config.title} Roadmap

Goal: ${originalPrompt}

## Complete Topics

${topics.map((topic) => `- ${topic}`).join('\n')}

## Week-by-Week Learning Plan

${weeks}

## Projects

1. Beginner CLI/project using ${config.title.split(' ')[0]}
2. CRUD application
3. API-based project
4. Database-backed application
5. Final job-ready capstone

## Interview Preparation

- Explain variables, functions and data types.
- Explain OOP and its four major concepts.
- Explain memory management.
- Explain error/exception handling.
- Explain concurrency/asynchronous programming.
- Explain collections and common data structures.
- Explain testing.
- Explain how your main project works.
- Solve language-specific coding problems.
- Practice DSA: arrays, strings, hash maps, stacks, queues, trees and sorting.

## Daily Routine

- 45 min language concepts
- 60 min coding
- 45 min project
- 20 min DSA
- 15 min interview revision

## Job Preparation

- 3-5 GitHub projects
- Strong README documentation
- Portfolio
- Resume
- DSA practice
- Mock interviews
- Role-specific applications`
}

const buildGenericRoadmap = (prompt, duration) => {
  const months = duration || 3

  return `# ${months}-Month Career Roadmap: ${prompt}

I can create a customized roadmap for this skill.

## Month 1 — Fundamentals

- Learn the core concepts and terminology.
- Set up the standard development environment.
- Learn the most important tools.
- Practice fundamentals every day.
- Build a small beginner project.

## Month 2 — Practical Development

- Learn intermediate concepts.
- Work with APIs and databases where relevant.
- Learn testing and debugging.
- Study security and performance.
- Build a real-world project.

## Month ${months} — Job Preparation

- Build a portfolio-grade project.
- Practice DSA and problem solving.
- Study common interview questions.
- Prepare your GitHub README.
- Create a role-specific resume.
- Complete mock interviews.

## Daily Routine

- 45 min theory
- 60 min coding/practical work
- 30 min project
- 20 min revision
- 15 min interview preparation

## Projects

1. Beginner project
2. API/integration project
3. Database project
4. Final capstone
5. Portfolio case study`
}

const fallbackPlan = (prompt) => {
  const query = prompt.trim()
  const duration = detectDuration(query)

  const career = detectCareer(query)

  if (career) {
    return buildCareerRoadmap(career, duration, query)
  }

  const language = detectLanguage(query)

  if (language) {
    return buildLanguageRoadmap(language, duration, query)
  }

  return buildGenericRoadmap(query, duration)
}

export const generateRoadmapResponse = async ({ prompt, history = [] }) => {
  try {
    const response = await api.ai.generateRoadmap({
      prompt,
      history,
    })

    if (response?.content?.trim()) {
      return response.content
    }

    return fallbackPlan(prompt)
  } catch {
    await new Promise((resolve) => {
      window.setTimeout(resolve, 300)
    })

    return fallbackPlan(prompt)
  }
}