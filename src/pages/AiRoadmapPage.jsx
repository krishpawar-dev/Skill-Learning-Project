import {
  Bookmark,
  Bot,
  Copy,
  Download,
  MessageSquarePlus,
  Send,
  Sparkles,
  User,
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import GlassCard from '../components/common/GlassCard'
import IconButton from '../components/common/IconButton'
import PremiumButton from '../components/common/PremiumButton'
import { pageTransition } from '../animations/pageTransitions'
import { suggestedPrompts } from '../data/assistantPrompts'
import { generateRoadmapResponse } from '../services/aiRoadmapService'
import { useSkillForgeStore } from '../store/useSkillForgeStore'
import { cn } from '../utils/formatters'

function TypingDots() {
  return (
    <div className="flex gap-1">
      {[0, 1, 2].map((item) => (
        <motion.span
          key={item}
          animate={{ y: [0, -4, 0], opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: item * 0.12 }}
          className="h-2 w-2 rounded-full bg-cyan-300"
        />
      ))}
    </div>
  )
}

export default function AiRoadmapPage() {
  const chats = useSkillForgeStore((state) => state.chats)
  const addChatMessage = useSkillForgeStore((state) => state.addChatMessage)
  const createChat = useSkillForgeStore((state) => state.createChat)
  const toggleChatBookmark = useSkillForgeStore((state) => state.toggleChatBookmark)
  const [activeId, setActiveId] = useState(chats[0]?.id)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const activeChat = useMemo(() => chats.find((chat) => chat.id === activeId) || chats[0], [activeId, chats])

  const sendPrompt = async (promptValue = input) => {
    const prompt = promptValue.trim()
    if (!prompt || loading) return

    let threadId = activeChat?.id
    if (!threadId) {
      threadId = createChat(prompt.slice(0, 34) || 'New roadmap')
      setActiveId(threadId)
    }

    setInput('')
    setLoading(true)
    addChatMessage(threadId, { role: 'user', content: prompt })

    const content = await generateRoadmapResponse({
      prompt,
      history: activeChat?.messages || [],
    })

    addChatMessage(threadId, { role: 'assistant', content })
    setLoading(false)
  }

  const createNewThread = () => {
    const id = createChat('New roadmap')
    setActiveId(id)
  }

  const copyRoadmap = async () => {
    const text = activeChat?.messages.map((message) => `${message.role}: ${message.content}`).join('\n\n') || ''
    await navigator.clipboard.writeText(text)
    toast.success('Roadmap copied')
  }

  const exportPdf = () => {
    toast.success('Opening print dialog for PDF export')
    window.print()
  }

  return (
    <motion.div {...pageTransition} className="space-y-6">
      <div className="flex flex-col justify-between gap-4 xl:flex-row xl:items-end">
        <div>
          <p className="text-sm font-bold uppercase text-violet-600 dark:text-cyan-300">AI Roadmap Assistant</p>
          <h1 className="mt-2 text-3xl font-black text-slate-950 dark:text-white md:text-4xl">
            Ask for a career plan, then turn it into daily action.
          </h1>
          <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">
            Built with a backend-first AI service layer so OpenAI or Gemini can plug in without exposing keys in the browser.
          </p>
        </div>
        <div className="flex gap-2">
          <IconButton icon={Copy} label="Copy roadmap" onClick={copyRoadmap} />
          <IconButton icon={Download} label="Export PDF" onClick={exportPdf} />
        </div>
      </div>

      <section className="grid min-h-[720px] gap-4 xl:grid-cols-[310px_1fr]">
        <GlassCard className="flex min-h-[260px] flex-col p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-slate-950 dark:text-white">History</h2>
            <IconButton icon={MessageSquarePlus} label="New chat" onClick={createNewThread} />
          </div>
          <div className="mt-4 flex-1 space-y-2 overflow-y-auto pr-1 scrollbar-soft">
            {chats.map((chat) => (
              <button
                type="button"
                key={chat.id}
                onClick={() => setActiveId(chat.id)}
                className={cn(
                  'w-full rounded-lg p-3 text-left transition-all premium-focus',
                  activeChat?.id === chat.id
                    ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                    : 'bg-slate-950/[0.03] text-slate-700 hover:bg-slate-950/[0.06] dark:bg-white/[0.05] dark:text-slate-200 dark:hover:bg-white/10',
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="truncate text-sm font-bold">{chat.title}</span>
                  {chat.bookmarked && <Bookmark className="h-4 w-4 shrink-0" aria-hidden="true" />}
                </div>
                <p className="mt-1 truncate text-xs opacity-70">
                  {chat.messages[chat.messages.length - 1]?.content}
                </p>
              </button>
            ))}
          </div>

          {activeChat && (
            <PremiumButton
              icon={Bookmark}
              variant={activeChat.bookmarked ? 'primary' : 'secondary'}
              className="mt-4 w-full"
              onClick={() => toggleChatBookmark(activeChat.id)}
            >
              {activeChat.bookmarked ? 'Bookmarked' : 'Bookmark chat'}
            </PremiumButton>
          )}
        </GlassCard>

        <GlassCard className="flex min-h-[720px] flex-col p-0">
          <div className="border-b border-slate-200/70 p-5 dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-premium-button text-white shadow-glow">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-xl font-black text-slate-950 dark:text-white">SkillForge AI</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Roadmaps, interview prep, resources, and project ideas</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-5 scrollbar-soft">
            <div className="space-y-4">
              {activeChat?.messages.map((message, index) => {
                const isUser = message.role === 'user'

                return (
                  <motion.div
                    key={`${message.role}-${index}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn('flex gap-3', isUser && 'justify-end')}
                  >
                    {!isUser && (
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cyan-400/14 text-cyan-500">
                        <Bot className="h-4 w-4" aria-hidden="true" />
                      </div>
                    )}
                    <div
                      className={cn(
                        'max-w-[860px] whitespace-pre-line rounded-lg px-4 py-3 text-sm leading-7',
                        isUser
                          ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                          : 'border border-slate-200/80 bg-white/64 text-slate-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200',
                      )}
                    >
                      {message.content}
                    </div>
                    {isUser && (
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-violet-500 text-white">
                        <User className="h-4 w-4" aria-hidden="true" />
                      </div>
                    )}
                  </motion.div>
                )
              })}
              {loading && (
                <div className="flex gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-cyan-400/14 text-cyan-500">
                    <Bot className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="rounded-lg border border-slate-200/80 bg-white/64 px-4 py-3 dark:border-white/10 dark:bg-white/[0.06]">
                    <TypingDots />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-slate-200/70 p-5 dark:border-white/10">
            <div className="mb-4 flex gap-2 overflow-x-auto pb-1 scrollbar-soft">
              {suggestedPrompts.map((prompt) => (
                <button
                  type="button"
                  key={prompt}
                  onClick={() => setInput(prompt)}
                  className="shrink-0 rounded-lg border border-slate-200/80 bg-white/60 px-3 py-2 text-sm font-semibold text-slate-700 transition-colors premium-focus hover:border-violet-300 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-200 dark:hover:border-cyan-300/50"
                >
                  {prompt}
                </button>
              ))}
            </div>
            <form
              className="flex gap-3"
              onSubmit={(event) => {
                event.preventDefault()
                sendPrompt()
              }}
            >
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                rows={2}
                placeholder="Ask for a roadmap, project plan, placement prep, or interview sprint..."
                className="min-h-14 flex-1 resize-none rounded-lg border border-slate-200/80 bg-white/70 px-4 py-3 text-sm font-medium text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-violet-300 dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:placeholder:text-slate-500 dark:focus:border-cyan-300/60"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="grid h-14 w-14 shrink-0 place-items-center rounded-lg bg-premium-button text-white shadow-glow transition-all premium-focus hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Send prompt"
                title="Send prompt"
              >
                <Send className="h-5 w-5" aria-hidden="true" />
              </button>
            </form>
          </div>
        </GlassCard>
      </section>
    </motion.div>
  )
}
