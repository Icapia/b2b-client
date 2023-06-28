import styles from './index.module.scss'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface ErrorBoundaryProps {
	children: React.ReactNode
}

const ErrorFallback = (message: any) => (
	<div className={cn(styles.container)}>
		<div className={cn(styles.wrapper)} role='alert'>
			<h2>Something went wrong:</h2>
			<p className={cn(styles.message)}>{message.error.message}</p>
			<pre className={cn(styles.stacktrace)}>{message.error.stack}</pre>
			<Link className='btn btn--blue' href={'/'}>
					Go Back
			</Link>
		</div>
	</div>
)

export const ErrorBoundaryContainer: React.FC<ErrorBoundaryProps> = ({
	children,
}) => {
	const router = useRouter()

	return (
		<ErrorBoundary key={router.pathname} FallbackComponent={ErrorFallback}>
			{children}
		</ErrorBoundary>
	)
}

export default ErrorBoundaryContainer
