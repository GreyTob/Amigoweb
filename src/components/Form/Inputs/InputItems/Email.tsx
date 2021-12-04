
import { useState } from 'react'
import classes from './InputItems.module.scss'
import Form from '../../../store/form'

export const Email: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [dirty, setDirty] = useState<boolean>(false)
  const [valid, setValid] = useState<boolean>(false)
  /* eslint-disable */
  const regExp: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return (
    <div className={classes['input-item']}>
      <label htmlFor='email'> 
        <p>Еmail</p>
        <input 
          value={email} 
          name='email'
          id='email'
          onChange={(e) => Form.changeHandler(e, setEmail, setValid, setDirty, regExp)} 
          onBlur={(e) => Form.blurHandler(e, setDirty)}  
          type='text' 
          placeholder='Введите ваше Еmail'
          required
        />
      </label>
        {dirty || valid ? <p className={[classes.error, 'error'].join(' ')}>Email Validation error message</p> : null}
    </div>
  )
}