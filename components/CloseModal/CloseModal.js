import Close from '../../public/image/sidebar-icons/Close.svg'

export const CloseModal = (props) => {
  return (
    <div onClick={props.onClick} className="modal__close">
        <Close onClick={props.onClick} width={24} height={24}></Close>
    </div>
  )
}