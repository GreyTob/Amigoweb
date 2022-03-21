
import { useState } from 'react'
import classes from './InputItems.module.scss'
import Form from '../../../../store/form'

export const Telephone: React.FC = () => {
  const [tel, setTel] = useState<string>('')
  const [dirty, setDirty] = useState<boolean>(false)
  const [valid, setValid] = useState<boolean>(false)
  /* eslint-disable */
  const telExp: RegExp = /\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/
  const telReplace: RegExp =/[^\d\+\s\(\)\-]/g

  const changeHandler = ( e:React.ChangeEvent<HTMLInputElement>):void => {
    const newTel = e.target.value.replace(telReplace, "").slice(0, 18)
    setTel(newTel) 

    const validTel: RegExpMatchArray | null = e.target.value.trim().match(telExp) 

    if (validTel) {
      setValid(true)
      Form.checkValidForm('tel', true)
    } else {
      setValid(false)
      Form.checkValidForm('tel', false)
    }
  }
  
  const blurHandler = (e:React.FocusEvent<HTMLInputElement>):void => {
    if(e.target.value.trim() === '') {
      setDirty(true)
    } 
  }

  return (
    <div className={classes['input-item']}>
      <label htmlFor='tel'> 
        <p>Номер телефона</p>
        <input 
          value={tel} 
          name='tel'
          id='tel'
          onChange={(e) => changeHandler(e)} 
          onBlur={(e) => blurHandler(e)}  
          type='tel' 
          placeholder='Введите номер телефона'
          required
        />
      </label>
        {dirty && !valid ? <p className={classes.error}>Tel Validation error message</p> : null}
    </div>

  )
}