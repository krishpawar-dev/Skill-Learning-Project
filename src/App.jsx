import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import ErrorBoundary from './components/common/ErrorBoundary.jsx'
import AppLayout from './layouts/AppLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import RoadmapsPage from './pages/RoadmapsPage.jsx'
import RoadmapDetailPage from './pages/RoadmapDetailPage.jsx'
import QuizPage from './pages/QuizPage.jsx'
import AiRoadmapPage from './pages/AiRoadmapPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  const location = useLocation()

  return (
    <ErrorBoundary>
      <div className="app-surface">
        <div className="noise-mask" />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/roadmaps" element={<RoadmapsPage />} />
              <Route path="/roadmaps/:slug" element={<RoadmapDetailPage />} />
              <Route path="/quizzes" element={<QuizPage />} />
              <Route path="/ai-roadmap" element={<AiRoadmapPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </ErrorBoundary>
  )
}

export default App
