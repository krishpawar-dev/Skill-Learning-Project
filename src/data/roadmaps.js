import { slugify } from '../utils/formatters'

const phase = (title, items) => ({
  id: slugify(title),
  title,
  items: items.map((label) => ({
    id: slugify(`${title}-${label}`),
    label,
  })),
})

const createRoadmap = ({
  title,
  category,
  difficulty,
  duration,
  summary,
  accent = 'from-violet-500 to-cyan-400',
  phases,
}) => ({
  slug: slugify(title),
  title,
  category,
  difficulty,
  duration,
  summary,
  accent,
  phases,
  skills: phases.reduce((total, item) => total + item.items.length, 0),
})

export const roadmapCategories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    summary: 'Interfaces, product polish, performance, and modern web systems.',
    accent: 'from-cyan-400 to-violet-500',
  },
  {
    id: 'backend',
    title: 'Backend Development',
    summary: 'APIs, data modeling, reliability, queues, and scalable services.',
    accent: 'from-emerald-400 to-cyan-500',
  },
  {
    id: 'ai-ml',
    title: 'AI/ML Engineer',
    summary: 'Python, modeling, deep learning, NLP, and production ML habits.',
    accent: 'from-fuchsia-400 to-violet-600',
  },
  {
    id: 'devops',
    title: 'DevOps Engineer',
    summary: 'Linux, containers, cloud, automation, observability, and delivery.',
    accent: 'from-amber-300 to-cyan-500',
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    summary: 'Native and cross-platform apps with production release workflows.',
    accent: 'from-sky-400 to-indigo-500',
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    summary: 'Defensive engineering, web security, cloud posture, and threat thinking.',
    accent: 'from-rose-400 to-orange-400',
  },
  {
    id: 'data-science',
    title: 'Data Science',
    summary: 'Analytics, visualization, experimentation, and practical ML delivery.',
    accent: 'from-teal-300 to-purple-500',
  },
]

const frontendRoadmaps = [
  createRoadmap({
    title: 'HTML',
    category: 'frontend',
    difficulty: 'Beginner',
    duration: '2 weeks',
    summary: 'Semantic foundations for accessible, searchable web products.',
    phases: [
      phase('HTML Basics', ['Document structure', 'Text elements', 'Links', 'Images', 'Lists']),
      phase('Semantic HTML', ['Landmarks', 'Forms', 'Tables', 'Metadata', 'Accessibility labels']),
      phase('Production HTML', ['SEO basics', 'Responsive media', 'Validation', 'Performance hints', 'Project structure']),
      phase('Projects', ['Portfolio shell', 'Documentation page', 'Signup form', 'Article layout']),
    ],
  }),
  createRoadmap({
    title: 'CSS',
    category: 'frontend',
    difficulty: 'Beginner',
    duration: '4 weeks',
    summary: 'Layout, responsive systems, animation, and polished product styling.',
    phases: [
      phase('CSS Basics', ['Selectors', 'Box model', 'Typography', 'Colors', 'Specificity']),
      phase('Modern Layout', ['Flexbox', 'Grid', 'Responsive units', 'Container patterns', 'Media queries']),
      phase('Advanced CSS', ['Custom properties', 'Transitions', 'Animations', 'Cascade layers', 'Accessibility states']),
      phase('Projects', ['Pricing page', 'Responsive dashboard', 'Design system buttons', 'Animated landing page']),
    ],
  }),
  createRoadmap({
    title: 'JavaScript',
    category: 'frontend',
    difficulty: 'Intermediate',
    duration: '8 weeks',
    summary: 'The language layer behind interactive apps and product logic.',
    phases: [
      phase('JavaScript Basics', ['Variables', 'Functions', 'Arrays', 'Objects', 'DOM events']),
      phase('Async JavaScript', ['Promises', 'Async await', 'Fetch API', 'Error handling', 'Modules']),
      phase('Advanced JavaScript', ['Closures', 'Prototypes', 'Event loop', 'Performance', 'Testing']),
      phase('Projects', ['Quiz app', 'Kanban board', 'Weather app', 'Browser storage app']),
    ],
  }),
  createRoadmap({
    title: 'React',
    category: 'frontend',
    difficulty: 'Intermediate',
    duration: '10 weeks',
    summary: 'Component architecture, state, routing, data fetching, and app polish.',
    accent: 'from-cyan-400 to-blue-500',
    phases: [
      phase('React Basics', ['JSX', 'Components', 'Props', 'State', 'Event Handling']),
      phase('Intermediate React', ['Hooks', 'useEffect', 'useContext', 'Routing', 'API Fetching']),
      phase('Advanced React', [
        'Redux',
        'Performance Optimization',
        'Code Splitting',
        'Testing',
        'Architecture',
      ]),
      phase('Projects', ['Todo App', 'Dashboard', 'Chat App', 'E-commerce']),
    ],
  }),
  createRoadmap({
    title: 'Next.js',
    category: 'frontend',
    difficulty: 'Advanced',
    duration: '8 weeks',
    summary: 'Full-stack React patterns for routing, rendering, auth, and deployment.',
    phases: [
      phase('Next.js Basics', ['App Router', 'Pages', 'Layouts', 'Metadata', 'Styling']),
      phase('Data and Rendering', ['Server Components', 'Client Components', 'Fetching', 'Caching', 'Streaming']),
      phase('Production Next.js', ['Authentication', 'Middleware', 'SEO', 'Image optimization', 'Deployment']),
      phase('Projects', ['Blog platform', 'SaaS dashboard', 'Commerce catalog', 'AI notes app']),
    ],
  }),
  createRoadmap({
    title: 'TypeScript',
    category: 'frontend',
    difficulty: 'Intermediate',
    duration: '6 weeks',
    summary: 'Type-safe JavaScript for teams, APIs, and resilient product code.',
    phases: [
      phase('TypeScript Basics', ['Primitive types', 'Interfaces', 'Type aliases', 'Functions', 'Narrowing']),
      phase('Application Types', ['Generics', 'Utility types', 'React props', 'API types', 'Enums alternatives']),
      phase('Advanced TypeScript', ['Discriminated unions', 'Mapped types', 'Type guards', 'Config', 'Testing types']),
      phase('Projects', ['Typed component kit', 'API client', 'Form builder', 'Dashboard refactor']),
    ],
  }),
  createRoadmap({
    title: 'Tailwind',
    category: 'frontend',
    difficulty: 'Beginner',
    duration: '3 weeks',
    summary: 'Fast, consistent styling with responsive utilities and design tokens.',
    phases: [
      phase('Tailwind Basics', ['Utility classes', 'Spacing scale', 'Typography', 'Colors', 'Responsive prefixes']),
      phase('Component Styling', ['Buttons', 'Cards', 'Forms', 'Navigation', 'Dark mode']),
      phase('Advanced Tailwind', ['Theme config', 'Reusable variants', 'Plugins', 'Animation', 'Design systems']),
      phase('Projects', ['Marketing page', 'Admin layout', 'Pricing table', 'Portfolio refresh']),
    ],
  }),
]

const backendRoadmaps = [
  createRoadmap({
    title: 'Node.js',
    category: 'backend',
    difficulty: 'Intermediate',
    duration: '8 weeks',
    summary: 'Runtime fundamentals, services, streams, and production-ready APIs.',
    phases: [
      phase('Node Basics', ['Runtime model', 'Modules', 'NPM', 'File system', 'Environment variables']),
      phase('Server Skills', ['HTTP server', 'Streams', 'Events', 'Async patterns', 'Validation']),
      phase('Production Node', ['Logging', 'Error handling', 'Security', 'Testing', 'Deployment']),
      phase('Projects', ['REST API', 'CLI tool', 'Webhook worker', 'Realtime server']),
    ],
  }),
  createRoadmap({
    title: 'Express',
    category: 'backend',
    difficulty: 'Intermediate',
    duration: '5 weeks',
    summary: 'Practical API development with middleware, auth, and validation.',
    phases: [
      phase('Express Basics', ['Routing', 'Middleware', 'Controllers', 'Request lifecycle', 'Status codes']),
      phase('API Design', ['Validation', 'Pagination', 'Filtering', 'Versioning', 'Error responses']),
      phase('Security and Auth', ['JWT', 'Sessions', 'CORS', 'Rate limits', 'Input sanitization']),
      phase('Projects', ['Auth API', 'Quiz API', 'Roadmap progress API', 'Admin API']),
    ],
  }),
  createRoadmap({
    title: 'MongoDB',
    category: 'backend',
    difficulty: 'Intermediate',
    duration: '5 weeks',
    summary: 'Flexible document modeling, aggregation, and indexes for SaaS apps.',
    phases: [
      phase('MongoDB Basics', ['Documents', 'Collections', 'CRUD', 'ObjectId', 'Atlas setup']),
      phase('Modeling', ['Embedded data', 'References', 'Indexes', 'Validation', 'Mongoose schemas']),
      phase('Advanced MongoDB', ['Aggregation', 'Transactions', 'Search', 'Performance', 'Backups']),
      phase('Projects', ['Question bank', 'Progress store', 'Chat history', 'Notification center']),
    ],
  }),
  createRoadmap({
    title: 'PostgreSQL',
    category: 'backend',
    difficulty: 'Intermediate',
    duration: '6 weeks',
    summary: 'Relational data modeling, querying, transactions, and reporting.',
    phases: [
      phase('PostgreSQL Basics', ['Tables', 'Rows', 'SQL queries', 'Joins', 'Constraints']),
      phase('Schema Design', ['Normalization', 'Indexes', 'Migrations', 'Views', 'Foreign keys']),
      phase('Advanced PostgreSQL', ['Transactions', 'CTEs', 'JSONB', 'Query plans', 'Partitioning']),
      phase('Projects', ['Analytics warehouse', 'Billing database', 'Quiz reports', 'Audit log']),
    ],
  }),
  createRoadmap({
    title: 'GraphQL',
    category: 'backend',
    difficulty: 'Advanced',
    duration: '5 weeks',
    summary: 'Schema-first APIs, resolvers, caching, and typed client contracts.',
    phases: [
      phase('GraphQL Basics', ['Schema', 'Types', 'Queries', 'Mutations', 'Resolvers']),
      phase('API Patterns', ['Pagination', 'Filtering', 'Error handling', 'Authorization', 'DataLoader']),
      phase('Production GraphQL', ['Caching', 'Persisted queries', 'Monitoring', 'Federation', 'Security']),
      phase('Projects', ['Learning graph API', 'Roadmap explorer', 'Profile graph', 'Admin console']),
    ],
  }),
  createRoadmap({
    title: 'Redis',
    category: 'backend',
    difficulty: 'Intermediate',
    duration: '3 weeks',
    summary: 'Caching, queues, sessions, leaderboards, and fast app state.',
    phases: [
      phase('Redis Basics', ['Keys', 'Strings', 'Hashes', 'Lists', 'Expiration']),
      phase('App Patterns', ['Caching', 'Sessions', 'Rate limits', 'Leaderboards', 'Pub/Sub']),
      phase('Production Redis', ['Persistence', 'Eviction', 'Cluster basics', 'Monitoring', 'Security']),
      phase('Projects', ['Quiz leaderboard', 'Daily question cache', 'Job queue', 'Presence indicator']),
    ],
  }),
]

const aiRoadmaps = [
  createRoadmap({
    title: 'Python',
    category: 'ai-ml',
    difficulty: 'Beginner',
    duration: '6 weeks',
    summary: 'The practical language foundation for analytics, automation, and ML.',
    phases: [
      phase('Python Basics', ['Syntax', 'Data types', 'Functions', 'Files', 'Virtual environments']),
      phase('Python Fluency', ['Comprehensions', 'OOP', 'Modules', 'Exceptions', 'Testing']),
      phase('Data Python', ['Notebooks', 'APIs', 'Automation', 'Packaging', 'Type hints']),
      phase('Projects', ['CLI tracker', 'Data cleaner', 'API consumer', 'Mini analytics app']),
    ],
  }),
  createRoadmap({
    title: 'NumPy',
    category: 'ai-ml',
    difficulty: 'Beginner',
    duration: '3 weeks',
    summary: 'Numerical computing primitives for fast array-based workflows.',
    phases: [
      phase('NumPy Basics', ['Arrays', 'Shapes', 'Indexing', 'Dtypes', 'Broadcasting']),
      phase('Numerical Work', ['Vectorization', 'Aggregations', 'Linear algebra', 'Random sampling', 'Masks']),
      phase('Performance', ['Memory layout', 'Profiling', 'Avoiding loops', 'Interop', 'Testing arrays']),
      phase('Projects', ['Image filters', 'Simulation notebook', 'Stats toolkit', 'Feature scaler']),
    ],
  }),
  createRoadmap({
    title: 'Pandas',
    category: 'ai-ml',
    difficulty: 'Beginner',
    duration: '4 weeks',
    summary: 'Data wrangling, feature prep, and analysis for real-world datasets.',
    phases: [
      phase('Pandas Basics', ['Series', 'DataFrames', 'Import data', 'Selection', 'Missing values']),
      phase('Data Cleaning', ['GroupBy', 'Joins', 'Dates', 'Text columns', 'Pivot tables']),
      phase('Analysis Patterns', ['Feature engineering', 'Visualization handoff', 'Performance', 'Pipelines', 'Exports']),
      phase('Projects', ['Sales analysis', 'Resume dataset clean', 'A/B test report', 'ML feature table']),
    ],
  }),
  createRoadmap({
    title: 'Machine Learning',
    category: 'ai-ml',
    difficulty: 'Intermediate',
    duration: '10 weeks',
    summary: 'Modeling fundamentals, evaluation, and practical deployment thinking.',
    phases: [
      phase('ML Basics', ['Supervised learning', 'Unsupervised learning', 'Train test split', 'Metrics', 'Bias variance']),
      phase('Core Models', ['Linear models', 'Trees', 'Ensembles', 'Clustering', 'Dimensionality reduction']),
      phase('ML Practice', ['Feature engineering', 'Cross validation', 'Pipelines', 'Model tracking', 'Deployment basics']),
      phase('Projects', ['Churn model', 'Recommendation prototype', 'Price predictor', 'Interview ML notebook']),
    ],
  }),
  createRoadmap({
    title: 'Deep Learning',
    category: 'ai-ml',
    difficulty: 'Advanced',
    duration: '12 weeks',
    summary: 'Neural networks, optimization, computer vision, and modern architectures.',
    phases: [
      phase('DL Basics', ['Tensors', 'Neural networks', 'Backpropagation', 'Optimizers', 'Regularization']),
      phase('Architectures', ['CNNs', 'RNNs', 'Transformers', 'Embeddings', 'Attention']),
      phase('Training Systems', ['GPU basics', 'Data loaders', 'Experiment tracking', 'Fine tuning', 'Evaluation']),
      phase('Projects', ['Image classifier', 'Text classifier', 'Embedding search', 'Model serving demo']),
    ],
  }),
  createRoadmap({
    title: 'NLP',
    category: 'ai-ml',
    difficulty: 'Advanced',
    duration: '8 weeks',
    summary: 'Language data, embeddings, transformers, retrieval, and evaluation.',
    phases: [
      phase('NLP Basics', ['Tokenization', 'Text cleaning', 'Bag of words', 'TF-IDF', 'Embeddings']),
      phase('Modern NLP', ['Transformers', 'Fine tuning', 'Prompting', 'RAG', 'Evaluation']),
      phase('Production NLP', ['Vector databases', 'Safety checks', 'Latency', 'Monitoring', 'Feedback loops']),
      phase('Projects', ['Support bot', 'Semantic search', 'Resume matcher', 'Roadmap recommender']),
    ],
  }),
  createRoadmap({
    title: 'TensorFlow',
    category: 'ai-ml',
    difficulty: 'Advanced',
    duration: '7 weeks',
    summary: 'Model building, training, serving, and mobile-friendly ML workflows.',
    phases: [
      phase('TensorFlow Basics', ['Tensors', 'Keras', 'Layers', 'Losses', 'Callbacks']),
      phase('Training Models', ['Datasets', 'Augmentation', 'Transfer learning', 'Metrics', 'Checkpoints']),
      phase('Production TensorFlow', ['SavedModel', 'TF Serving', 'TensorBoard', 'TFLite', 'Optimization']),
      phase('Projects', ['Vision model', 'NLP classifier', 'Time-series forecast', 'Mobile ML demo']),
    ],
  }),
]

const devopsRoadmaps = [
  createRoadmap({
    title: 'Linux',
    category: 'devops',
    difficulty: 'Beginner',
    duration: '5 weeks',
    summary: 'Command line, permissions, networking, processes, and server hygiene.',
    phases: [
      phase('Linux Basics', ['Shell navigation', 'Files', 'Permissions', 'Users', 'Package managers']),
      phase('Server Operations', ['Processes', 'Services', 'Logs', 'Networking', 'SSH']),
      phase('Automation', ['Bash scripting', 'Cron', 'Systemd', 'Monitoring', 'Hardening']),
      phase('Projects', ['Server setup', 'Backup script', 'Log analyzer', 'Deployment checklist']),
    ],
  }),
  createRoadmap({
    title: 'Docker',
    category: 'devops',
    difficulty: 'Intermediate',
    duration: '5 weeks',
    summary: 'Containers, images, compose, registries, and production packaging.',
    phases: [
      phase('Docker Basics', ['Images', 'Containers', 'Dockerfile', 'Volumes', 'Networks']),
      phase('Compose and Workflows', ['Docker Compose', 'Environment config', 'Multi-stage builds', 'Registries', 'Debugging']),
      phase('Production Docker', ['Security', 'Slim images', 'Health checks', 'CI builds', 'Logging']),
      phase('Projects', ['Containerized API', 'Mongo stack', 'Worker service', 'Local dev platform']),
    ],
  }),
  createRoadmap({
    title: 'Kubernetes',
    category: 'devops',
    difficulty: 'Advanced',
    duration: '10 weeks',
    summary: 'Cluster orchestration, workloads, networking, scaling, and operations.',
    phases: [
      phase('Kubernetes Basics', ['Pods', 'Deployments', 'Services', 'ConfigMaps', 'Secrets']),
      phase('Cluster Skills', ['Ingress', 'Storage', 'Namespaces', 'Helm', 'Autoscaling']),
      phase('Production Kubernetes', ['Observability', 'Security', 'Rollouts', 'Resource limits', 'Disaster recovery']),
      phase('Projects', ['Deploy SaaS app', 'Helm chart', 'Blue-green rollout', 'Monitoring stack']),
    ],
  }),
  createRoadmap({
    title: 'CI/CD',
    category: 'devops',
    difficulty: 'Intermediate',
    duration: '4 weeks',
    summary: 'Automated testing, builds, releases, environments, and rollback habits.',
    phases: [
      phase('CI Basics', ['Pipelines', 'Build steps', 'Unit tests', 'Artifacts', 'Caching']),
      phase('Delivery Workflows', ['Environments', 'Secrets', 'Release gates', 'Preview deploys', 'Rollback']),
      phase('Quality Automation', ['Linting', 'Security scans', 'E2E tests', 'Versioning', 'Notifications']),
      phase('Projects', ['GitHub Actions pipeline', 'Docker publish', 'Preview deploy', 'Release dashboard']),
    ],
  }),
  createRoadmap({
    title: 'AWS',
    category: 'devops',
    difficulty: 'Intermediate',
    duration: '10 weeks',
    summary: 'Cloud fundamentals, networking, compute, storage, and managed services.',
    phases: [
      phase('AWS Basics', ['IAM', 'VPC', 'EC2', 'S3', 'CloudWatch']),
      phase('Application AWS', ['RDS', 'Lambda', 'ECS', 'Route 53', 'Load balancers']),
      phase('Cloud Operations', ['Security groups', 'Budgets', 'Backups', 'IaC', 'Monitoring']),
      phase('Projects', ['Static deploy', 'API on ECS', 'Serverless worker', 'Cloud portfolio']),
    ],
  }),
  createRoadmap({
    title: 'Terraform',
    category: 'devops',
    difficulty: 'Advanced',
    duration: '5 weeks',
    summary: 'Infrastructure as code, modules, state, and repeatable environments.',
    phases: [
      phase('Terraform Basics', ['Providers', 'Resources', 'Variables', 'Outputs', 'State']),
      phase('IaC Design', ['Modules', 'Workspaces', 'Remote state', 'Secrets', 'Plan review']),
      phase('Production Terraform', ['Drift', 'Policy checks', 'CI integration', 'Security', 'Reusable modules']),
      phase('Projects', ['AWS VPC module', 'App infrastructure', 'Preview environment', 'State migration']),
    ],
  }),
  createRoadmap({
    title: 'Jenkins',
    category: 'devops',
    difficulty: 'Intermediate',
    duration: '4 weeks',
    summary: 'Pipeline automation, agents, credentials, and release orchestration.',
    phases: [
      phase('Jenkins Basics', ['Jobs', 'Pipelines', 'Agents', 'Credentials', 'Plugins']),
      phase('Pipeline Design', ['Jenkinsfile', 'Stages', 'Artifacts', 'Parallel jobs', 'Notifications']),
      phase('Jenkins Operations', ['Security', 'Backups', 'Scaling agents', 'Shared libraries', 'Monitoring']),
      phase('Projects', ['Build pipeline', 'Docker release', 'Test matrix', 'Deployment gate']),
    ],
  }),
]

const extensionRoadmaps = [
  createRoadmap({
    title: 'React Native',
    category: 'mobile',
    difficulty: 'Intermediate',
    duration: '8 weeks',
    summary: 'Cross-platform mobile UI, navigation, native APIs, and store release basics.',
    phases: [
      phase('Mobile Basics', ['Components', 'Styling', 'Navigation', 'State', 'Device APIs']),
      phase('App Workflows', ['Forms', 'Storage', 'Networking', 'Push notifications', 'Testing']),
      phase('Release Skills', ['Performance', 'Native modules', 'Builds', 'App signing', 'Analytics']),
      phase('Projects', ['Habit app', 'Learning tracker', 'Chat mobile app', 'Offline notes']),
    ],
  }),
  createRoadmap({
    title: 'Web Security',
    category: 'cyber-security',
    difficulty: 'Intermediate',
    duration: '7 weeks',
    summary: 'Modern application security with practical defensive engineering habits.',
    phases: [
      phase('Security Basics', ['Threat modeling', 'OWASP Top 10', 'Authentication', 'Authorization', 'Input validation']),
      phase('Web Defense', ['XSS', 'CSRF', 'SQL injection', 'Headers', 'Secrets management']),
      phase('Security Practice', ['Dependency scans', 'Logging', 'Incident basics', 'Cloud posture', 'Secure reviews']),
      phase('Projects', ['Secure API audit', 'Auth hardening', 'Security checklist', 'Vulnerability lab']),
    ],
  }),
  createRoadmap({
    title: 'Data Visualization',
    category: 'data-science',
    difficulty: 'Beginner',
    duration: '5 weeks',
    summary: 'Charts, dashboards, storytelling, and decision-grade analytics.',
    phases: [
      phase('Visualization Basics', ['Chart types', 'Scales', 'Color', 'Labels', 'Accessibility']),
      phase('Analytics Workflow', ['Data cleaning', 'Exploration', 'Dashboards', 'Story arcs', 'Annotations']),
      phase('Production Dashboards', ['Performance', 'Filters', 'Metric definitions', 'QA', 'Sharing']),
      phase('Projects', ['Cohort dashboard', 'Learning analytics', 'Executive report', 'Experiment readout']),
    ],
  }),
]

export const roadmaps = [
  ...frontendRoadmaps,
  ...backendRoadmaps,
  ...aiRoadmaps,
  ...devopsRoadmaps,
  ...extensionRoadmaps,
]

export const featuredRoadmaps = roadmaps.filter((item) =>
  ['react', 'node-js', 'machine-learning', 'docker', 'web-security'].includes(item.slug),
)

export const getRoadmapBySlug = (slug) => roadmaps.find((item) => item.slug === slug)

export const getRoadmapsByCategory = (categoryId) =>
  roadmaps.filter((item) => item.category === categoryId)
