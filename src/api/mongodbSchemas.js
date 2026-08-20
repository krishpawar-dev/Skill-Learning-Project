export const userSchemaExample = `
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  passwordHash: String,
  googleId: String,
  avatarUrl: String,
  xp: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  streak: { type: Number, default: 0 },
  badges: [{ type: String }],
  bookmarks: [{ type: Schema.Types.ObjectId, ref: 'Roadmap' }]
}, { timestamps: true });
`

export const roadmapProgressSchemaExample = `
const RoadmapProgressSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', index: true },
  roadmapSlug: { type: String, index: true },
  completedNodes: [{ type: String }],
  completionPercent: { type: Number, default: 0 },
  lastOpenedAt: { type: Date, default: Date.now }
}, { timestamps: true });
`

export const quizQuestionSchemaExample = `
const QuizQuestionSchema = new Schema({
  category: { type: String, index: true },
  difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced', 'Mixed'] },
  prompt: { type: String, required: true },
  options: [{ type: String, required: true }],
  answer: { type: String, required: true },
  explanation: String,
  activeFrom: Date,
  activeTo: Date
}, { timestamps: true });
`

export const quizAttemptSchemaExample = `
const QuizAttemptSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', index: true },
  category: String,
  questionIds: [{ type: Schema.Types.ObjectId, ref: 'QuizQuestion' }],
  score: Number,
  xpEarned: Number,
  seed: String,
  completedAt: { type: Date, default: Date.now }
});
`

export const aiChatSchemaExample = `
const AiChatSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', index: true },
  title: String,
  bookmarked: { type: Boolean, default: false },
  messages: [{
    role: { type: String, enum: ['user', 'assistant'] },
    content: String,
    createdAt: { type: Date, default: Date.now }
  }]
}, { timestamps: true });
`
