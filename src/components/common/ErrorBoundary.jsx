import { Component } from 'react'
import { RefreshCcw } from 'lucide-react'
import PremiumButton from './PremiumButton'

export default class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="grid min-h-screen place-items-center bg-mesh-light px-6 text-slate-950 dark:bg-mesh-dark dark:text-white">
          <div className="glass-panel max-w-lg rounded-lg p-8 text-center">
            <p className="text-sm font-bold uppercase text-violet-600 dark:text-cyan-300">SkillForge</p>
            <h1 className="mt-3 text-3xl font-black">Something needs a quick refresh.</h1>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              The app caught an unexpected UI error before it could interrupt your data.
            </p>
            <PremiumButton
              icon={RefreshCcw}
              className="mt-6"
              onClick={() => {
                window.location.reload()
              }}
            >
              Reload app
            </PremiumButton>
          </div>
        </main>
      )
    }

    return this.props.children
  }
}
