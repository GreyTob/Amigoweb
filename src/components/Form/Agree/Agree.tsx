import { observer } from 'mobx-react-lite'
import form from '../../store/form'
import classes from './Agree.module.scss'

export const Agree: React.FC = observer(() =>  (
    <div className={classes.Agree}>
      <input id='custom-checkbox' className={classes['custom-checkbox']} type="checkbox" onChange={() => form.agreeHandler()} required/>
      <label className='agree' htmlFor='custom-checkbox'>Принимаю&nbsp;<a href="/">условия</a>&nbsp;использования</label>  
    </div>
))