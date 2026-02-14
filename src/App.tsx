import './index.css'
import Header from './components/Header'
import StatsBar from './components/StatsBar'
import TrendingNiches from './components/TrendingNiches'
import DesignIdeas from './components/DesignIdeas'
import ColorTrends from './components/ColorTrends'
import MarketChart from './components/MarketChart'
import IdeaGenerator from './components/IdeaGenerator'
import QuickTips from './components/QuickTips'

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <StatsBar />
        <TrendingNiches />
        <IdeaGenerator />
        <DesignIdeas />
        <MarketChart />
        <ColorTrends />
        <QuickTips />
        <footer className="mt-12 pt-8 border-t border-gray-800/50 text-center">
          <p className="text-gray-600 text-sm">
            TrendPrint<span className="text-fuchsia-500">AI</span> — Your print-on-demand intelligence hub
          </p>
          <p className="text-gray-700 text-xs mt-1">
            Trend data refreshes hourly · Design prompts powered by curated AI insights
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
