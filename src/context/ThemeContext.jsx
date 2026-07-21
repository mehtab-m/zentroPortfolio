import { createContext, useContext, useState, useEffect } from 'react'

export const themes = [
  {
    id: 'enterprise',
    name: 'Enterprise Blue',
    vars: {
      '--primary': '#0078d4',
      '--primary-hover': '#106ebe',
      '--primary-active': '#005a9e',
      '--primary-light': '#deecf9',
      '--primary-subtle': '#eff6fc',
      '--accent-light': '#50a0e8',
      '--bg': '#ffffff',
      '--bg-rgb': '255, 255, 255',
      '--surface': '#fafafa',
      '--surface-elevated': '#ffffff',
      '--surface-alt': '#f5f5f5',
      '--border': '#edebe9',
      '--border-strong': '#d2d0ce',
      '--text': '#605e5c',
      '--text-h': '#242424',
      '--text-muted': '#8a8886',
      '--text-inverse': '#ffffff',
      'color-scheme': 'light',
    },
  },
  {
    id: 'midnight',
    name: 'Midnight Dark',
    vars: {
      '--primary': '#3b9ddd',
      '--primary-hover': '#2b8fce',
      '--primary-active': '#1b7fbf',
      '--primary-light': '#1e3a5f',
      '--primary-subtle': '#162032',
      '--accent-light': '#60b0ed',
      '--bg': '#0d1117',
      '--bg-rgb': '13, 17, 23',
      '--surface': '#161b22',
      '--surface-elevated': '#21262d',
      '--surface-alt': '#1c2128',
      '--border': '#30363d',
      '--border-strong': '#484f58',
      '--text': '#8b949e',
      '--text-h': '#e6edf3',
      '--text-muted': '#6e7681',
      '--text-inverse': '#0d1117',
      'color-scheme': 'dark',
    },
  },
  {
    id: 'emerald',
    name: 'Emerald Green',
    vars: {
      '--primary': '#059669',
      '--primary-hover': '#047857',
      '--primary-active': '#065f46',
      '--primary-light': '#d1fae5',
      '--primary-subtle': '#ecfdf5',
      '--accent-light': '#34d399',
      '--bg': '#ffffff',
      '--bg-rgb': '255, 255, 255',
      '--surface': '#f9fafb',
      '--surface-elevated': '#ffffff',
      '--surface-alt': '#f3f4f6',
      '--border': '#e5e7eb',
      '--border-strong': '#d1d5db',
      '--text': '#6b7280',
      '--text-h': '#111827',
      '--text-muted': '#9ca3af',
      '--text-inverse': '#ffffff',
      'color-scheme': 'light',
    },
  },
  {
    id: 'violet',
    name: 'Violet Pro',
    vars: {
      '--primary': '#7c3aed',
      '--primary-hover': '#6d28d9',
      '--primary-active': '#5b21b6',
      '--primary-light': '#ede9fe',
      '--primary-subtle': '#f5f3ff',
      '--accent-light': '#a78bfa',
      '--bg': '#ffffff',
      '--bg-rgb': '255, 255, 255',
      '--surface': '#fafafa',
      '--surface-elevated': '#ffffff',
      '--surface-alt': '#f4f3ff',
      '--border': '#e9e7fc',
      '--border-strong': '#c4b5fd',
      '--text': '#4b5563',
      '--text-h': '#1e1b4b',
      '--text-muted': '#7c7a9e',
      '--text-inverse': '#ffffff',
      'color-scheme': 'light',
    },
  },
  {
    id: 'slate-dark',
    name: 'Slate Dark',
    vars: {
      '--primary': '#f59e0b',
      '--primary-hover': '#d97706',
      '--primary-active': '#b45309',
      '--primary-light': '#2d2a1a',
      '--primary-subtle': '#1f1d14',
      '--accent-light': '#fbbf24',
      '--bg': '#0f0f11',
      '--bg-rgb': '15, 15, 17',
      '--surface': '#18181b',
      '--surface-elevated': '#27272a',
      '--surface-alt': '#1f1f23',
      '--border': '#3f3f46',
      '--border-strong': '#52525b',
      '--text': '#a1a1aa',
      '--text-h': '#fafafa',
      '--text-muted': '#71717a',
      '--text-inverse': '#0f0f11',
      'color-scheme': 'dark',
    },
  },
]

const STORAGE_KEY = 'zentro-theme'
const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(() => {
    return localStorage.getItem(STORAGE_KEY) || 'enterprise'
  })

  const theme = themes.find(t => t.id === themeId) || themes[0]

  useEffect(() => {
    const root = document.documentElement
    Object.entries(theme.vars).forEach(([key, val]) => {
      if (key === 'color-scheme') {
        root.style.setProperty('color-scheme', val)
        root.setAttribute('data-theme', val)
      } else {
        root.style.setProperty(key, val)
      }
    })
    localStorage.setItem(STORAGE_KEY, themeId)
  }, [theme, themeId])

  return (
    <ThemeContext.Provider value={{ themeId, setThemeId, theme, themes }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
