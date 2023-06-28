import cn from 'classnames'
import styles from './index.module.scss'
import { MutatingDots } from  'react-loader-spinner'

export const Loader = () => {
  return (
    <div className={cn(styles.container)}>
      <MutatingDots 
        height="90"
        width="90"
        color="#E9794A"
        secondaryColor= '#E26630'
        radius='12.5'
        visible={true}
      />
    </div>
  )
}