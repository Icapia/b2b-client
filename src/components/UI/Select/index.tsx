import styles from './Select.module.scss'
import React, {
	FC,
	useState,
	createRef,
	MouseEvent,
	MutableRefObject,
	useMemo
} from 'react'
import cn from 'classnames'
import { useOnClickOutside } from 'usehooks-ts'
import { useAtom, useAtomValue } from 'jotai'
import { darkModeAtom } from '../../../store/dark-theme'

export interface IOption {
	value: string | undefined
	label: string
	img?: string
}

export interface SelectProps {
	defaultValue?: string
	defaultImage?: string
	placeholder?: string
	className?: string
	selectType?: 'default' | 'date' | 'theme' | 'nft'
	imgSelect?: boolean
	options?: IOption[]
	onChange?: Function | undefined
	style?: React.CSSProperties
}

export const Select: FC<SelectProps> = ({
	selectType,
	defaultValue = '',
	defaultImage,
	imgSelect = false,
	options = [],
	placeholder = 'Select category',
	onChange,
	className,
	style
}) => {
	const selectRef = createRef<HTMLDivElement>()
	const [active, setActive] = useState(false)
	const [value, setValue] = useState<string>(defaultValue)
	const selectTypeClass = useMemo(() => {
		switch (selectType) {
			case 'date':
				return 'date'
			default:
				return ''
		}
	}, [selectType])
	const showValue = useMemo(
		() => options.find(option => option.value === value) || null,
		[options, value]
	)

	const [isDarkMode] = useAtom(darkModeAtom)

	function onClickSelect(event: MouseEvent<HTMLDivElement>) {
		event.stopPropagation()
		setActive(prevState => !prevState)
	}

	function selectOption(optionVal: string) {
		if (value !== optionVal) {
			setValue(optionVal)
			onChange?.(optionVal)
			setActive(false)
		}
	}

	useOnClickOutside(selectRef as MutableRefObject<HTMLDivElement>, () => {
		setActive(false)
	})

	return (
		<div
			ref={selectRef}
			className={cn(
				styles.select,
				selectTypeClass,
				[imgSelect && styles.imgSelect],
				[active && styles.active]
			)}
		>
			<div
				className={cn(styles.wrapper, [isDarkMode && styles.dark], [selectType === 'theme' && styles.themeWrapper], className)}
				style={style}
				onClick={onClickSelect}
			>
				{showValue?.img && (
					<span className={cn(styles.image, [(selectType === 'theme' && isDarkMode) && styles.dark], [selectType === 'theme' && styles.themeImage])}>
						<img src={showValue.img} alt='' />
					</span>
				)}
				<span className={cn(styles.text)}>
					{!value ? placeholder : showValue?.label}
				</span>
				
			</div>
			<input type='hidden' name='select' />
			<div className={cn(styles.list, [isDarkMode && styles.dark], [selectType === 'theme' && styles.themeList], className)}>
				<ul>
					{options.map(option => (
						<li
							key={option.value}
							onClick={() => selectOption(option.value || '')}
							className={cn(styles.item, [isDarkMode && styles.dark])}
						>
							{option?.img && (
								<span className={cn(styles.image, [(selectType === 'theme' && isDarkMode) && styles.dark], [selectType === 'theme' && styles.themeImage])}>
									<img src={option.img} alt='' />
								</span>
							)}
							<span className={cn(styles.label, [isDarkMode && styles.dark], [selectType === 'theme' && styles.themeLabel])}>
								{option.label}
							</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
