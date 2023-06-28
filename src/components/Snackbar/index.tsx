import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useAtom } from 'jotai'
import cn from 'classnames';
import styles from './index.module.scss';
import { snackbarState } from '../../store/snackbar';
import { darkModeAtom } from '../../store/dark-theme';

type Position = ['top' | 'bottom', 'left' | 'right'];

interface SnackbarPositionProps {
	position?: Position;
}

export const Snackbar: React.FC<SnackbarPositionProps> = ({ position = ['top', 'left'] }) => {
	const [isVisible, setIsVisible] = useState(false)
	const [snackbar, setSnackbar] = useAtom(snackbarState)
	const [isDarkMode] = useAtom(darkModeAtom)
	const timerRef = useRef<any>(null);

  const snackBarMemo = useMemo(() => {
    if (snackbar.open) {
      setIsVisible(true);

			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}

      timerRef.current = setTimeout(() => {
        setIsVisible(false);
        setSnackbar((prevState) => ({
          ...prevState,
          open: false,
        }));
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [snackbar, setSnackbar])

  useEffect(() => {
    snackBarMemo()
  }, [snackbar, setSnackbar]);

	const snackbarClass = useCallback(() => cn(styles.snackbar, {
    [styles.top]: position[0] === 'top',
    [styles.bottom]: position[0] === 'bottom',
    [styles.left]: position[1] === 'left',
    [styles.right]: position[1] === 'right',
    [styles.error]: snackbar.type === 'error',
    [styles.warning]: snackbar.type === 'warning',
    [styles.success]: snackbar.type === 'success',
    [styles.info]: snackbar.type === 'info',
    [styles.infoDark]: snackbar.type === 'info' && isDarkMode,
    [styles.visible]: isVisible,
  }), [snackbar.type, isVisible, position]);

  const snackbarIcon = `/image/icons/snackbar/${snackbar.type === 'warning'
    ? 'warn.svg'
    : snackbar.type === 'success'
      ? 'success.svg'
      : 'info.svg'
    }`

	const handleClickSnackBar = () => {
		setIsVisible(false);
	}

	return (
		<div className={snackbarClass()} onClick={handleClickSnackBar}>
			<img src={snackbarIcon} alt="icon" />
			<div className={cn(styles.message)}>
				{snackbar.message}
			</div>
		</div>
	);
};