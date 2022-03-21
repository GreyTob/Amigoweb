
import { useState } from 'react'
import classes from './InputItems.module.scss'
import Form from '../../../../store/form'

export const Email: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [dirty, setDirty] = useState<boolean>(false)
  const [valid, setValid] = useState<boolean>(false)
  /* eslint-disable */
  const emailExp: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


  const changeHandler = ( e:React.ChangeEvent<HTMLInputElement>):void => {
    setEmail(e.target.value)
    
    const validEmail: RegExpMatchArray | null = e.target.value.trim().match(emailExp) 

    if (validEmail) {
      setValid(true)
      Form.checkValidForm('email', true)
    } else {
      setValid(false)
      Form.checkValidForm('email', false)
    }
  }
  
  const blurHandler = (e:React.FocusEvent<HTMLInputElement>):void => {
    if(e.target.value.trim() === '') {
      setDirty(true)
    } 
  }

  return (
    <div className={classes['input-item']}>
      <label htmlFor='email'> 
        <p>Еmail</p>
        <input 
          value={email} 
          name='email'
          id='email'
          onChange={(e) => changeHandler(e)} 
          onBlur={(e) => blurHandler(e)}  
          type='text' 
          placeholder='Введите ваше Еmail'
          required
        />
      </label>
        {dirty && !valid ? <p className={classes.error}>Email Validation error message</p> : null}
    </div>
  )
}