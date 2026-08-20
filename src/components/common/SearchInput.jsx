import { Search } from 'lucide-react'

export default function SearchInput({ value, onChange, placeholder = 'Search' }) {
  return (
    <label className="glass-subtle premium-focus flex min-h-11 items-center gap-2 rounded-lg px-3 text-slate-500 dark:text-slate-400">
      <Search className="h-4 w-4" aria-hidden="true" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500"
      />
    </label>
  )
}
