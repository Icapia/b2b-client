import styles from './index.module.scss'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { useLocation, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import cn from 'classnames'

interface ErrorBoundaryProps {
	children: React.ReactNode
}

const ErrorFallback = (message: any) => (
	<div className={cn(styles.container)}>
		<div className={cn(styles.wrapper)} role='alert'>
			<h2>Something went wrong:</h2>
			<p className={cn(styles.message)}>{message.error.message}</p>
			<pre className={cn(styles.stacktrace)}>{message.error.stack}</pre>
			<Link className='btn btn--blue' to={'/'}>
					Go Back
			</Link>
		</div>
	</div>
)

export const ErrorBoundaryContainer: React.FC<ErrorBoundaryProps> = ({
	children,
}) => {
	const location = useLocation()

	return (
		<ErrorBoundary key={location.pathname} FallbackComponent={ErrorFallback}>
			{children}
		</ErrorBoundary>
	)
}

export default ErrorBoundaryContainer
