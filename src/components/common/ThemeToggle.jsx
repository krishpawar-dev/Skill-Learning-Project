import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import IconButton from './IconButton'

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme()
  const Icon = isDark ? Sun : Moon

  return <IconButton icon={Icon} label={isDark ? 'Switch to light theme' : 'Switch to dark theme'} onClick={toggleTheme} />
}
