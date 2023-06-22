import { FC } from 'react'
import Close from '../../public/image/sidebar-icons/Close.svg'

interface CloseModalI {
  onClick: () => void,
}

export const CloseModal: FC<CloseModalI> = ({
  onClick,
}) => {
  return (
    <div onClick={onClick} className="modal__close">
        <Close onClick={onClick} width={24} height={24}></Close>
    </div>
  )
}