import React, { createContext, useContext, useEffect, useState } from 'react';

export type AccentColor = 'indigo' | 'cyan' | 'coral' | 'gold' | 'violet' | 'mint';

export interface AccentOption {
  id: AccentColor;
  label: string;
  light: string;
  dark: string;
}

export const ACCENT_OPTIONS: AccentOption[] = [
  { id: 'indigo', label: 'Indigo',  light: '#6366f1', dark: '#818cf8' },
  { id: 'cyan',   label: 'Cyan',    light: '#0891b2', dark: '#22d3ee' },
  { id: 'coral',  label: 'Coral',   light: '#ea580c', dark: '#fb923c' },
  { id: 'gold',   label: 'Gold',    light: '#d97706', dark: '#f59e0b' },
  { id: 'violet', label: 'Violet',  light: '#9333ea', dark: '#c084fc' },
  { id: 'mint',   label: 'Mint',    light: '#059669', dark: '#34d399' },
];

interface AccentContextValue {
  accent: AccentColor;
  setAccent: (accent: AccentColor) => void;
  options: AccentOption[];
}

const AccentContext = createContext<AccentContextValue>({
  accent: 'cyan',
  setAccent: () => {},
  options: ACCENT_OPTIONS,
});

export function AccentProvider({ children }: { children: React.ReactNode }) {
  const [accent, setAccentState] = useState<AccentColor>(() => {
    try {
      return (localStorage.getItem('portfolio-accent') as AccentColor) || 'cyan';
    } catch {
      return 'cyan';
    }
  });

  const setAccent = (newAccent: AccentColor) => {
    setAccentState(newAccent);
    try {
      localStorage.setItem('portfolio-accent', newAccent);
    } catch {}
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-accent', accent);
  }, [accent]);

  return (
    <AccentContext.Provider value={{ accent, setAccent, options: ACCENT_OPTIONS }}>
      {children}
    </AccentContext.Provider>
  );
}

export function useAccent() {
  return useContext(AccentContext);
}
