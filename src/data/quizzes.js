export const quizCategories = [
  { id: 'frontend', title: 'Frontend', difficulty: 'Mixed', xp: 80, questions: 5 },
  { id: 'backend', title: 'Backend', difficulty: 'Mixed', xp: 90, questions: 5 },
  { id: 'react', title: 'React', difficulty: 'Intermediate', xp: 100, questions: 5 },
  { id: 'javascript', title: 'JavaScript', difficulty: 'Intermediate', xp: 90, questions: 5 },
  { id: 'python', title: 'Python', difficulty: 'Beginner', xp: 70, questions: 5 },
  { id: 'ai-ml', title: 'AI/ML', difficulty: 'Advanced', xp: 120, questions: 5 },
  { id: 'devops', title: 'DevOps', difficulty: 'Intermediate', xp: 100, questions: 5 },
  { id: 'database', title: 'Database', difficulty: 'Intermediate', xp: 90, questions: 5 },
  { id: 'system-design', title: 'System Design', difficulty: 'Advanced', xp: 130, questions: 5 },
]

export const leaderboard = [
  { name: 'Mira', xp: 4280, streak: 32 },
  { name: 'Aarav', xp: 3940, streak: 24 },
  { name: 'You', xp: 2860, streak: 12 },
  { name: 'Rohan', xp: 2710, streak: 9 },
]

export const questionBank = {
  frontend: [
    {
      question: 'Which CSS layout tool is best for two-dimensional page layouts?',
      options: ['Grid', 'Float', 'Inline-block', 'Absolute positioning'],
      answer: 'Grid',
    },
    {
      question: 'Which attribute improves image accessibility?',
      options: ['alt', 'srcset', 'loading', 'decoding'],
      answer: 'alt',
    },
    {
      question: 'What does responsive design primarily optimize for?',
      options: ['Different screen sizes', 'Only desktop views', 'Server speed', 'Database shape'],
      answer: 'Different screen sizes',
    },
    {
      question: 'Which browser API stores small key-value pairs persistently?',
      options: ['localStorage', 'IntersectionObserver', 'Canvas', 'WebSocket'],
      answer: 'localStorage',
    },
    {
      question: 'Which metric is part of Core Web Vitals?',
      options: ['Largest Contentful Paint', 'NPM downloads', 'Bundle author', 'Git branch count'],
      answer: 'Largest Contentful Paint',
    },
    {
      question: 'Which HTML element represents main page content?',
      options: ['main', 'section', 'aside', 'div'],
      answer: 'main',
    },
  ],
  backend: [
    {
      question: 'Which status code usually means a resource was created?',
      options: ['201', '204', '301', '500'],
      answer: '201',
    },
    {
      question: 'What is middleware commonly used for in Express?',
      options: ['Request processing', 'CSS compilation', 'GPU training', 'DNS registration'],
      answer: 'Request processing',
    },
    {
      question: 'Which token format is commonly used for stateless auth?',
      options: ['JWT', 'CSV', 'SVG', 'YAML'],
      answer: 'JWT',
    },
    {
      question: 'What does rate limiting protect against?',
      options: ['Excessive requests', 'Missing alt text', 'Large font files', 'Slow CSS selectors'],
      answer: 'Excessive requests',
    },
    {
      question: 'Which pattern separates request handling from business logic?',
      options: ['Controller-service', 'Inline CSS', 'Global variables', 'Magic strings'],
      answer: 'Controller-service',
    },
    {
      question: 'Which header allows controlled cross-origin access?',
      options: ['Access-Control-Allow-Origin', 'Content-Length', 'Set-Cookie', 'ETag'],
      answer: 'Access-Control-Allow-Origin',
    },
  ],
  react: [
    {
      question: 'Which hook is used for local component state?',
      options: ['useState', 'useMemo', 'useRef', 'useId'],
      answer: 'useState',
    },
    {
      question: 'What should React list items include for stable reconciliation?',
      options: ['key', 'role', 'title', 'tabIndex'],
      answer: 'key',
    },
    {
      question: 'Which hook is best for side effects after render?',
      options: ['useEffect', 'useReducer', 'useCallback', 'useLayoutId'],
      answer: 'useEffect',
    },
    {
      question: 'Which tool handles route-based pages in this project?',
      options: ['React Router', 'Redux Toolkit', 'Tailwind CSS', 'Recharts'],
      answer: 'React Router',
    },
    {
      question: 'What does memoization usually help reduce?',
      options: ['Unnecessary recalculation', 'Network DNS lookups', 'HTML semantics', 'Database indexes'],
      answer: 'Unnecessary recalculation',
    },
    {
      question: 'Which React concept passes data from parent to child?',
      options: ['Props', 'Reducers', 'Effects', 'Refs'],
      answer: 'Props',
    },
  ],
  javascript: [
    {
      question: 'Which keyword declares a block-scoped variable?',
      options: ['let', 'var', 'with', 'this'],
      answer: 'let',
    },
    {
      question: 'What does async/await simplify?',
      options: ['Promise handling', 'CSS cascade', 'HTML validation', 'Image compression'],
      answer: 'Promise handling',
    },
    {
      question: 'Which method creates a new array by transforming each item?',
      options: ['map', 'push', 'sort', 'splice'],
      answer: 'map',
    },
    {
      question: 'What is closure?',
      options: ['A function retaining outer scope access', 'A CSS selector', 'A database lock', 'A build plugin'],
      answer: 'A function retaining outer scope access',
    },
    {
      question: 'Which API makes HTTP requests in browsers?',
      options: ['fetch', 'querySelector', 'setTimeout', 'history'],
      answer: 'fetch',
    },
    {
      question: 'What does JSON.parse do?',
      options: ['Converts JSON text to a value', 'Formats CSS', 'Encrypts tokens', 'Starts a server'],
      answer: 'Converts JSON text to a value',
    },
  ],
  python: [
    {
      question: 'Which Python data type stores key-value pairs?',
      options: ['dict', 'list', 'tuple', 'set'],
      answer: 'dict',
    },
    {
      question: 'Which tool commonly isolates Python dependencies?',
      options: ['Virtual environment', 'CSS module', 'Docker Hub only', 'HTML form'],
      answer: 'Virtual environment',
    },
    {
      question: 'Which keyword defines a function?',
      options: ['def', 'func', 'function', 'lambda only'],
      answer: 'def',
    },
    {
      question: 'Which library is central to tabular data analysis?',
      options: ['Pandas', 'Express', 'React', 'Redis'],
      answer: 'Pandas',
    },
    {
      question: 'What does pip install?',
      options: ['Python packages', 'Browser tabs', 'Linux users', 'Mongo documents'],
      answer: 'Python packages',
    },
    {
      question: 'Which statement handles exceptions?',
      options: ['try/except', 'switch/case', 'catch/final', 'guard/rescue'],
      answer: 'try/except',
    },
  ],
  'ai-ml': [
    {
      question: 'Which split is used to estimate model performance on unseen data?',
      options: ['Test set', 'Training loop', 'CSS grid', 'DNS zone'],
      answer: 'Test set',
    },
    {
      question: 'What does overfitting mean?',
      options: ['Model memorizes training noise', 'Model has no parameters', 'Database is full', 'API is cached'],
      answer: 'Model memorizes training noise',
    },
    {
      question: 'Which architecture powers most modern LLMs?',
      options: ['Transformer', 'Linked list', 'MVC', 'B-tree'],
      answer: 'Transformer',
    },
    {
      question: 'Which metric is common for classification?',
      options: ['Precision', 'Uptime only', 'Paint timing', 'CPU sockets'],
      answer: 'Precision',
    },
    {
      question: 'What is an embedding?',
      options: ['Vector representation of data', 'A CSS shadow', 'A server port', 'A table constraint'],
      answer: 'Vector representation of data',
    },
    {
      question: 'Which process updates model weights?',
      options: ['Backpropagation', 'Hydration', 'Indexing', 'Serialization'],
      answer: 'Backpropagation',
    },
  ],
  devops: [
    {
      question: 'What does Docker package?',
      options: ['App and dependencies', 'Only Git commits', 'Only CSS files', 'Only database rows'],
      answer: 'App and dependencies',
    },
    {
      question: 'Which Kubernetes object exposes pods inside or outside a cluster?',
      options: ['Service', 'Branch', 'Reducer', 'Tuple'],
      answer: 'Service',
    },
    {
      question: 'What is CI primarily for?',
      options: ['Automated integration checks', 'Manual UI design', 'Token refresh only', 'Image compression'],
      answer: 'Automated integration checks',
    },
    {
      question: 'Which AWS service stores objects?',
      options: ['S3', 'EC2', 'IAM', 'Route 53'],
      answer: 'S3',
    },
    {
      question: 'What does infrastructure as code improve?',
      options: ['Repeatable environments', 'Font rendering only', 'CSS specificity', 'Quiz wording'],
      answer: 'Repeatable environments',
    },
    {
      question: 'Which command usually shows Linux processes?',
      options: ['ps', 'cd', 'mkdir', 'touch'],
      answer: 'ps',
    },
  ],
  database: [
    {
      question: 'Which database type uses tables and rows?',
      options: ['Relational', 'Document only', 'Vector only', 'Key-value only'],
      answer: 'Relational',
    },
    {
      question: 'What does an index usually improve?',
      options: ['Read query speed', 'Button color', 'JWT length', 'HTML validity'],
      answer: 'Read query speed',
    },
    {
      question: 'Which MongoDB structure stores documents?',
      options: ['Collection', 'Table row only', 'Component', 'Container'],
      answer: 'Collection',
    },
    {
      question: 'What does ACID describe?',
      options: ['Transaction guarantees', 'CSS naming', 'API versioning', 'Build output'],
      answer: 'Transaction guarantees',
    },
    {
      question: 'Which SQL clause filters rows?',
      options: ['WHERE', 'GROUP', 'JOIN', 'ORDER'],
      answer: 'WHERE',
    },
    {
      question: 'What does normalization reduce?',
      options: ['Data duplication', 'Network security', 'Bundle size only', 'Animation duration'],
      answer: 'Data duplication',
    },
  ],
  'system-design': [
    {
      question: 'Which component absorbs sudden traffic spikes?',
      options: ['Queue', 'CSS reset', 'Local font', 'Browser history'],
      answer: 'Queue',
    },
    {
      question: 'What does horizontal scaling add?',
      options: ['More machines', 'More CSS files', 'More comments', 'More font weights'],
      answer: 'More machines',
    },
    {
      question: 'Which strategy stores frequent reads closer to users?',
      options: ['Caching', 'Normalization only', 'Linting', 'Hydration'],
      answer: 'Caching',
    },
    {
      question: 'What does eventual consistency allow?',
      options: ['Temporary replicas mismatch', 'No database indexes', 'Only one user', 'No API contracts'],
      answer: 'Temporary replicas mismatch',
    },
    {
      question: 'Which tool distributes requests across servers?',
      options: ['Load balancer', 'Package lock', 'JSX parser', 'Color picker'],
      answer: 'Load balancer',
    },
    {
      question: 'What should an idempotent retry avoid?',
      options: ['Duplicate side effects', 'Small payloads', 'Typed responses', 'Fast queries'],
      answer: 'Duplicate side effects',
    },
  ],
}
