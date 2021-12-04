
import { useState } from 'react'
import classes from './InputItems.module.scss'
import Form from '../../../store/form'

export const Telephone: React.FC = () => {
  const [tel, setTel] = useState<string>('')
  const [dirty, setDirty] = useState<boolean>(false)
  const [valid, setValid] = useState<boolean>(false)
  /* eslint-disable */
  const regExp: RegExp = /\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/

  return (
    <div className={classes['input-item']}>
      <label htmlFor='tel'> 
        <p>Номер телефона</p>
        <input 
          value={tel} 
          name='tel'
          id='tel'
          onChange={(e) => Form.changeHandler(e, setTel, setValid, setDirty, regExp)} 
          onBlur={(e) => Form.blurHandler(e, setDirty)}  
          type='tel' 
          placeholder='Введите номер телефона'
          required
          // list='dataTel'
        />
      </label>
        {dirty || valid ? <p className={[classes.error, 'error'].join(' ')}>Tel Validation error message</p> : null}

      {/* <datalist id='dataTel'>
        <option value="+7 (912) 000-00-00"/>
        <option value="+79120000000"/>
      </datalist> */}
    </div>

  )
}