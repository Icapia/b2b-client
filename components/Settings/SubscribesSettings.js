import { ButtonDefault, ButtonClose, ButtonDelete } from '../Buttons/Buttons';
import { useState } from 'react';
import { Modal, FormGroup, TextField, InputAdornment } from '@mui/material'
import { CloseModal } from '../CloseModal/CloseModal';
import Message from '../Messages/Message';
import { getFormControlUnstyledUtilityClasses } from '@mui/base';

export default function SubscribesSettings(props) {
  const [subscribe, setSubscribe] = useState(props.subscribe);
  
  const handlerAddNew = (form) => {
    let objIndex = parseInt(Object.entries(subscribe).length) + 1;
    form["duration"] = 30;
    form["id"] = objIndex;
    setSubscribe( {...subscribe, [objIndex]: form} ) 
    
    props.onChange({
      form
    })
  } 
  
  const handlerUpdate = (form) => {
    if(form.id == 1) {
      setSubscribe( {...subscribe, [0]: form} ) 
    } else {
      setSubscribe( {...subscribe, [form.id - 1]: form} ) 
    }
    
    props.onEdit({
      form
    })
  }
  
  const handlerDelete = (form) => {
    props.onDelete({
      form
    })
  }
  
  return (
    <>
      <div className="list topline mt-25">
        <h4>Subscribes</h4>
        <div className="list__table">
          <div className="list__item list__item--header">
          <span className='w-1 a-l'>Subscription Name</span>  
          <span className='w-2 a-l'>Subscription Description</span>
          <span className='w-1 a-r'>Price ($)</span>
          <span className='w-1 a-r'>Price (₽)</span>
          </div>
          {
            Object.entries(subscribe).map((item, index) => {
              return (
                <div key={index} className='list__item'>
                  <h5 className='w-1 a-l'>{item["1"].name}</h5>
                  <span className='w-2 a-l'>{item["1"].descriptionEn}</span>
                  <span className='w-1 a-r'>{item["1"].priceD == 0 ? 'Free' : item["1"].priceD + '$'}</span>
                  <span className='w-1 a-r'>{item["1"].priceR == 0 ? 'Бесплатно' : item["1"].priceR + '₽'}</span>
                </div>
              )
            })
          }
        </div>
        <div className="listbtns mt-20">
          <AddSubscribe onChange={(form) => { handlerAddNew(form) }}></AddSubscribe>
          <SelectSubscribe onDelete={(form) => { handlerDelete(form) }}  subscribe={subscribe} onChange={(form) => { handlerUpdate(form) }}></SelectSubscribe>
        </div>
      </div>
     
    </>
  )
}


const AddSubscribe = (props) => {
  const [open, setOpen] = useState(false);
  const handlerClose = () => { setOpen(false) }
  const handlerOpen = () => { setOpen(true) }
  
  
  const ModalBox = () => {
    
    const [form, setForm] = useState({});
    const [formButton, setFormButton] = useState(true);
    const [message, setMessage] = useState({
      className: 'messageBox',
      message: '',
    })
    
    const handlerChange = (event) => {
      setForm({...form, [event.target.name]: event.target.value})
      
      if(form.descriptionEn && form.name && form.priceD && form.priceR && form.descriptionRu) {
        setFormButton(false)
      }
    }
    
    const handlerUpdate = () => {
      props.onChange({...form})
    }
    
    return (
      <Modal open={open} onClose={handlerOpen}>
        <div className="modal__wrapper">
          <div className="modal__content topline topline-35">
            <h2>Add Subscribe</h2>
            <h5>Subscribe Settings</h5>
            <div className="modal__content-form modal__content-form--fullw mxw-700">
              <FormGroup className='modal__content-formGroup col-2'>
                <TextField
                  autoComplete='off'
                  className={"mt-20 flex-fw"}
                  autoFocus={true}
                  focused={true}
                  name={'name'}
                  required={true}
                  InputLabelProps={{ required: false }}
                  label={'Subscribe Name'}
                  placeholder={"Enter " + 'subscribe name'}
                  onChange={(event) => handlerChange(event)}
                />
                
                <TextField
                  autoComplete='off'
                  className={"mt-20 flex-w"}
                  type={"number"}
                  focused={true}
                  name={'priceD'}
                  required={true}
                  InputLabelProps={{ required: false }}
                  label={'Subscribe Price ($)'}
                  placeholder={"1000"}
                  onChange={(event) => handlerChange(event)}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
                <TextField
                  autoComplete='off'
                  className={"mt-20 flex-w"}
                  type={"number"}
                  focused={true}
                  name={'priceR'}
                  required={true}
                  InputLabelProps={{ required: false }}
                  label={'Subscribe Price (₽)'}
                  placeholder={"5000"}
                  onChange={(event) => handlerChange(event)}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">₽</InputAdornment>,
                  }}
                />

                <TextField
                  autoComplete='off'
                  className={"mt-20 flex-fw"}
                  fullWidth={true}
                  focused={true}
                  multiline={true}
                  minRows={5}
                  name={'descriptionEn'}
                  required={true}
                  InputLabelProps={{ required: false }}
                  label={'Subscribe Description (EN)'}
                  placeholder={"Chat with someone who likes you too!"}
                  onChange={(event) => handlerChange(event)}
                />
                <TextField
                  autoComplete='off'
                  className={"mt-20 flex-fw"}
                  fullWidth={true}
                  focused={true}
                  required={true}
                  multiline={true}
                  minRows={5}
                  name={'descriptionRu'}
                  InputLabelProps={{ required: false }}
                  label={'Subscribe Description (RU)'}
                  placeholder={"Chat with someone who likes you too!"}
                  onChange={(event) => handlerChange(event)}
                />
              </FormGroup>
            </div>
            <ButtonDefault disabled={formButton} className='mr-15' onClick={handlerUpdate}>Add New Subscribe</ButtonDefault>
            <ButtonClose onClick={handlerClose}>Close</ButtonClose>
            <CloseModal onClick={handlerClose} />
          </div>
          <Message className={message.className} message={message.message}></Message>
        </div>
      </Modal>
    )
  }
  
  return (
    <>
      <ButtonDefault onClick={handlerOpen} className='mr-15'>
        Add New Subscription
      </ButtonDefault>
      <ModalBox/>
    </>
  );
} 

const SelectSubscribe = (props) => {
  const [open, setOpen] = useState(false);
  const handlerClose = () => { setOpen(false) }
  const handlerOpen = () => { setOpen(true) }
  const subscribe = props.subscribe;
  
  const handlerUpdate = (form) => {
    props.onChange({ ...form })
  }
  
  const handlerDelete = (form) => {
    props.onDelete({ ...form })
  }
  
  const ModalBox = () => {
    return (
      <Modal open={open} onClose={handlerOpen}>
        <div className="modal__wrapper">
          <div className="modal__content topline topline-35">
            <h2>Subscribes Editing</h2>
            <div className="modal__content-form modal__content-form--fullw mxw-700">
              {
                Object.entries(subscribe).map((item, index) => {
                  return (
                    <div className='selectSubscribe-item'>
                      <div className='selectSubscribe-name'>
                        <h4>{item[1].name}</h4>
                        <p>{item[1].descriptionEn}</p>
                      </div>
                      <EditSubscribe 
                      onDelete={(form) => handlerDelete(form)} 
                      onChange={(form) => handlerUpdate(form)} 
                      subscribe={item[1]}
                      />
                    </div>
                  )
                })
              }
            </div>
            <ButtonDefault className='mr-15' onClick={handlerClose}>Update Subscribes</ButtonDefault>
            <ButtonClose onClick={handlerClose}>Close</ButtonClose>
            <CloseModal onClick={handlerClose} />
          </div>
        </div>
      </Modal>
    )
  }
  
  return (
    <>
      <ButtonDefault onClick={handlerOpen} className='mr-15'>
        Edit Subscribes
      </ButtonDefault>
      <ModalBox/>
    </>
  );
}

const EditSubscribe = (props) => {
  const [open, setOpen] = useState(false);
  const handlerClose = () => { setOpen(false) }
  const handlerOpen = () => { setOpen(true) }
  
  const currentSubscribe = props.subscribe;
  
  const ModalBox = () => {
    const [form, setForm] = useState(currentSubscribe);
    const [message, setMessage] = useState({
      className: 'messageBox',
      message: '',
    })
    
    const handlerChange = (event) => {
      setForm({...form, [event.target.name]: event.target.value})
    }
    
    const handlerUpdate = () => {
      props.onChange({...form})
    }
    
    const handlerDelete = () => {
      props.onDelete({...form})
    }
    
    return (
      <Modal open={open} onClose={handlerOpen}>
        <div className="modal__wrapper">
          <div className="modal__content topline topline-35">
            <h2>Subscribes Editing: <span className='brown'>{currentSubscribe.name}</span></h2>
            <h5>Subscribe Settings</h5>
            <div className="modal__content-form modal__content-form--fullw mxw-700">
              <FormGroup className='modal__content-formGroup col-2'>
                <TextField
                  autoComplete='off'
                  className={"mt-20 flex-fw"}
                  autoFocus={true}
                  focused={true}
                  name={'name'}
                  defaultValue={form.name}
                  required={true}
                  InputLabelProps={{ required: false }}
                  label={'Subscribe Name'}
                  placeholder={"Enter " + 'subscribe name'}
                  onChange={(event) => handlerChange(event)}
                />
                
                <TextField
                  autoComplete='off'
                  defaultValue={form.priceD}
                  className={"mt-20 flex-w"}
                  type={"number"}
                  focused={true}
                  name={'priceD'}
                  required={true}
                  InputLabelProps={{ required: false }}
                  label={'Subscribe Price ($)'}
                  placeholder={"1000"}
                  onChange={(event) => handlerChange(event)}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
                <TextField
                  autoComplete='off'
                  className={"mt-20 flex-w"}
                  defaultValue={form.priceR}
                  type={"number"}
                  focused={true}
                  name={'priceR'}
                  required={true}
                  InputLabelProps={{ required: false }}
                  label={'Subscribe Price (₽)'}
                  placeholder={"5000"}
                  onChange={(event) => handlerChange(event)}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">₽</InputAdornment>,
                  }}
                />

                <TextField
                  autoComplete='off'
                  className={"mt-20 flex-fw"}
                  defaultValue={form.descriptionEn}
                  fullWidth={true}
                  focused={true}
                  multiline={true}
                  minRows={5}
                  name={'descriptionRu'}
                  required={true}
                  InputLabelProps={{ required: false }}
                  label={'Subscribe Description (EN)'}
                  placeholder={"Chat with someone who likes you too!"}
                  onChange={(event) => handlerChange(event)}
                />
                <TextField
                  autoComplete='off'
                  className={"mt-20 flex-fw"}
                  fullWidth={true}
                  defaultValue={form.descriptionRu}
                  focused={true}
                  required={true}
                  multiline={true}
                  minRows={5}
                  name={'descriptionEn'}
                  InputLabelProps={{ required: false }}
                  label={'Subscribe Description (RU)'}
                  placeholder={"Chat with someone who likes you too!"}
                  onChange={(event) => handlerChange(event)}
                />
              </FormGroup>
            </div>
            <ButtonDefault className='mr-15' onClick={handlerUpdate}>Update Subscribe</ButtonDefault>
            <ButtonClose onClick={handlerClose}>Close</ButtonClose>
            <ButtonDelete className='btn-delete' onClick={handlerDelete}>Delete Subscribe</ButtonDelete>
            <CloseModal onClick={handlerClose} />
          </div>
          <Message className={message.className} message={message.message}></Message>
        </div>
      </Modal>
    )
  }
  
  return (
    <>
      <ButtonDefault onClick={handlerOpen} className='mr-15'>
        Edit Subscribes
      </ButtonDefault>
      <ModalBox/>
    </>
  );
} 





