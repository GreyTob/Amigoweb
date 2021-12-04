
import { useState } from 'react'
import classes from './InputItems.module.scss'
import Form from '../../../store/form'

export const Name: React.FC = () => {
  const [name, setName] = useState<string>('')
  const [dirty, setDirty] = useState<boolean>(false)
  const [valid, setValid] = useState<boolean>(false)
  /* eslint-disable */
  const regExp: RegExp = /^[а-яa-z ,.'-]+$/i

  return (
    <div className={classes['input-item']}>
      <label htmlFor='name'> 
        <p>Имя</p>
        <input 
          value={name} 
          name='name'
          id='name'
          onChange={(e) => Form.changeHandler(e, setName, setValid, setDirty, regExp)} 
          onBlur={(e) => Form.blurHandler(e, setDirty)}  
          type='text' 
          placeholder='Введите ваше имя'
          required
        />
      </label>
        {dirty || valid ? <p className={[classes.error, 'error'].join(' ')}>Name Validation error message</p> : null}
    </div>

  )
}