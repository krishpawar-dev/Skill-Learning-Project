# ⚡ SkillForge

> **Forge your skills. Track your progress. Build your career.**

SkillForge is a modern, gamified developer-learning platform designed to help learners follow structured technology roadmaps, practice through quizzes, track their learning progress, and generate personalized career plans with an AI-powered roadmap assistant.

The platform combines **structured learning paths, gamification, analytics, and AI-assisted career planning** into a single interactive workspace.

---

## 🚀 Highlights

* 📚 **Structured Learning Roadmaps** — Step-by-step paths from fundamentals to advanced concepts.
* 🤖 **AI Roadmap Assistant** — Generate personalized learning and career plans based on your goals.
* 🧠 **Daily Quizzes** — Topic-based quizzes with difficulty levels and XP rewards.
* ⚡ **Gamification System** — Earn XP, maintain learning streaks, unlock badges, and level up.
* 📊 **Learning Dashboard** — Track XP, completed skills, quiz performance, streaks, and recent activity.
* 🗺️ **Roadmap Progress Tracking** — Mark individual learning steps as completed and monitor progress.
* 🔖 **Bookmarks** — Save useful roadmaps and AI-generated plans for later.
* 🏆 **Achievements & Badges** — Unlock badges based on learning activity and milestones.
* 📈 **Weekly XP Analytics** — Visualize learning velocity through interactive charts.
* 🌙 **Dark / Light Mode** — Responsive theme system for a comfortable learning experience.
* 🔐 **Authentication Flow** — Login experience with persistent/session-based authentication handling.
* 🔔 **Notifications & Activity Feed** — Keep track of learning milestones and platform activity.
* 📱 **Responsive UI** — Designed for desktop, tablet, and mobile experiences.
* ✨ **Smooth Animations** — Page transitions and micro-interactions powered by Framer Motion.

---

## 🧩 Core Modules

### 📊 Dashboard

A personalized learning dashboard that provides a quick overview of:

* Current XP and level
* Learning streak
* Completed skills
* Quiz activity
* Recent learning activities
* Weekly XP progress
* Earned badges
* Recommended learning actions

### 🗺️ Developer Roadmaps

SkillForge provides structured learning paths across multiple technology domains, including:

* Frontend Development
* Backend Development
* AI / Machine Learning
* DevOps
* Mobile Development
* Cyber Security
* Data Science

Each roadmap is divided into logical phases and individual learning milestones, making it easier to progress from **fundamentals → intermediate concepts → advanced topics → projects**.

### 🧠 Quiz & Gamification System

The quiz system provides topic-based practice across areas such as:

* React
* JavaScript
* Frontend
* Backend
* Python
* AI / ML
* DevOps
* Databases
* System Design

Users can earn XP through quizzes and learning activities while progressing through levels and unlocking achievements.

### 🤖 AI Roadmap Assistant

The AI Roadmap Assistant allows users to describe a career goal or technology they want to learn and generates a structured roadmap containing:

* Learning phases
* Weekly goals
* Daily practice suggestions
* Project ideas
* Interview preparation
* Portfolio-building guidance

The application also includes a fallback roadmap generation mechanism when the external AI service is unavailable.

### 👤 Profile & Progress

The profile section provides an overview of the learner's:

* XP
* Level
* Learning streak
* Completed skills
* Quiz history
* Badges
* Roadmap activity
* Saved/bookmarked content

---

## 🛠️ Tech Stack

### Frontend

* **React 19**
* **Vite**
* **React Router**
* **Tailwind CSS**
* **Framer Motion**
* **Lucide React**
* **Recharts**

### State & Data Management

* **Zustand**
* **TanStack React Query**
* Browser Storage for persisted client-side state

### UI / UX

* Responsive design
* Glassmorphism-inspired interface
* Dark / Light theme
* Animated page transitions
* Interactive charts
* Loading states
* Toast notifications
* Reusable UI components

### Backend Architecture Ready

The project also contains example service/API architecture for future backend integration, including:

* Express route examples
* MongoDB schema examples
* AI roadmap API integration
* Roadmap progress persistence
* Quiz attempt tracking
* AI chat persistence

---

## 🏗️ Project Architecture

```text
src/
├── animations/       # Page transition configurations
├── api/              # API and backend architecture examples
├── assets/           # Static assets
├── charts/           # Data visualization components
├── components/       # Reusable UI components
├── context/          # React contexts
├── data/             # Roadmaps, quizzes and dashboard data
├── hooks/            # Custom React hooks
├── layouts/          # Application layouts
├── pages/            # Application screens
├── services/         # API and business service layer
├── store/            # Zustand application state
└── utils/            # Shared utility functions
```

---

## 🔄 Application Flow

```text
User
 │
 ▼
Authentication
 │
 ▼
Dashboard
 │
 ├── Roadmaps ──────► Track Learning Progress
 │
 ├── Quizzes ───────► Earn XP & Badges
 │
 ├── AI Roadmap ────► Generate Career Plan
 │
 └── Profile ───────► View Progress & Achievements
```

---

## 💡 Key Technical Implementations

* Component-based React architecture
* Client-side routing with protected application layout
* Persistent global state using Zustand
* Dynamic roadmap progress management
* XP and level calculation system
* Achievement/badge evaluation logic
* Daily quiz flow with timed sessions
* AI service abstraction with fallback handling
* Reusable glass-card and UI component system
* Error boundary for graceful application failures
* Responsive layout architecture
* Animated route transitions
* Interactive XP analytics using Recharts

---

## 🔮 Future Enhancements

The project architecture is designed to support further production-level features:

* [ ] Real authentication with JWT / OAuth
* [ ] MongoDB persistence
* [ ] Production AI provider integration
* [ ] Real-time leaderboard
* [ ] Course/video content integration
* [ ] Advanced learning analytics
* [ ] Personalized recommendation engine
* [ ] Social learning and peer challenges
* [ ] Deployment with CI/CD
* [ ] Automated testing

---

## 🎯 Project Objective

The goal of SkillForge is to solve a common problem faced by developers: **knowing what to learn, how to practice, and how to measure progress.**

Instead of using separate platforms for roadmaps, practice, progress tracking, and career planning, SkillForge brings these experiences together into one focused learning workspace.

---

## 📌 Resume Description

**SkillForge — Gamified Developer Learning Platform**

> Built a modern React-based developer learning platform featuring structured technology roadmaps, AI-powered career planning, daily quizzes, XP-based gamification, streaks, badges, progress analytics, bookmarking, and responsive dark/light UI. Implemented scalable component architecture, Zustand state management, React Router navigation, Framer Motion animations, Recharts analytics, and API-ready services for future backend integration.

### Resume Tech Keywords

`React.js` · `Vite` · `JavaScript` · `Tailwind CSS` · `React Router` · `Zustand` · `Framer Motion` · `Recharts` · `REST API` · `MongoDB` · `Express.js` · `AI Integration` · `Responsive Design`

---

## 👨‍💻 Built With

**React • Vite • Tailwind CSS • Zustand • Framer Motion • Recharts • React Router**

> **SkillForge — Learn with direction. Practice with purpose. Build with confidence.**
