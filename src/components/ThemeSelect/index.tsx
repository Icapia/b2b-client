import cn from 'classnames'
import styles from './index.module.scss'
import { useAtom } from "jotai"
import { useEffect, useRef, useState } from "react"
import { darkModeAtom, localStorageAtom } from '../../store/dark-theme'

type ThemeValue = 'system' | 'dark' | 'light'

interface SelectOptions {
  value: ThemeValue,
  label: string,
  picture?: string,
}

export const ThemeSelect = () => {
  const themeRef = useRef<HTMLInputElement>(null)
  const [isDarkMode] = useAtom(darkModeAtom)
  const [darkMode, setDarkMode] = useAtom(localStorageAtom)
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const options: SelectOptions[] = [
		{ value: 'system', label: 'System', picture: isDarkMode ? '/images/icons/theme/system-white.svg' : '/images/icons/theme/system.svg' },
		{ value: 'dark', label: 'Dark', picture: isDarkMode ? '/images/icons/theme/moon-white.svg' : '/images/icons/theme/moon.svg' },
		{ value: 'light', label: 'Light', picture: isDarkMode ? '/images/icons/theme/sun-white.svg' : '/images/icons/theme/sun.svg' },
	]
  const getSelected = options.findIndex((option) => option.value === darkMode)
  const [selected, setSelected] = useState<number>(getSelected || 0);

  
  const handleChange = (value: ThemeValue, index: number) => {
    setDarkMode(value)
    setSelected(index)
    setIsOpen(false)
  }

  const handleOpen = () => {
    setIsOpen(!isOpen)
  } 

  useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	})

  const handleClickOutside = (event: MouseEvent) => {
		if (!themeRef.current?.contains(event.target as Node)) {
			setIsOpen(false)
		}
	}

  return (
    <div 
      ref={themeRef}
      className={cn(styles.container, [isDarkMode && styles.dark])}
    >
      <li 
        key={'selected-value'}
        className={cn(styles.input, [isDarkMode && styles.dark])}
        onClick={handleOpen}
      >
        <div className={cn(styles.input__item)}>
          <img src={options[selected].picture} alt={options[selected].label} />
          <span>{options[selected].label}</span>
        </div>
        <img src={isDarkMode ? "/images/icons/chevron_down--white.svg" : "/images/icons/chevron_down.svg"}/>
      </li>
      <ul className={cn(styles.wrapper, [isOpen && styles.open], [isDarkMode && styles.dark])}>
        {options.map((option, index) => (
          <li 
            key={index}
            className={cn(styles.item, [isDarkMode && styles.dark])}
            onClick={() => handleChange(option.value, index)}
          >
            <div className={cn(styles.option)}>
              <img src={option.picture} alt={option.label} />
              {option.label}
            </div>
            {selected === index && (
              <img 
              className={cn(styles.check)} 
              src={
                isDarkMode ? 
                  '/images/icons/check-white.svg' 
                  : '/images/icons/check.svg'}
              alt="Selected"
            />
            )}
          </li>
        ))}
      </ul>
    </div>
    
  )
}