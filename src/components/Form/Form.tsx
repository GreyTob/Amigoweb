import { Button } from './../UI/Button/Button';
import { Inputs } from './Inputs/Inputs';
import { Select } from './Select/Select';
import { Agree } from './Agree/Agree';
import form from '../store/form';
import { observer } from 'mobx-react-lite';
import { Header } from './Header/Header';

export const Form: React.FC = observer(() =>  (

      <form className='form-typography' action="" method='POST' noValidate>
        <fieldset>
          
          <Header />
          
          <Inputs />

          <Select />

          <Agree />
          
          <Button 
            type='submit' 
            disabled={!form.completed || Object.values(form.isFormValid).includes(false)} 
            value={'Зарегистрироваться'}
          />
        </fieldset>
      </form>

)) 