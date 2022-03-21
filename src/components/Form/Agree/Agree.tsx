import { observer } from 'mobx-react-lite';
import form from '../../../store/form';
import classes from './Agree.module.scss';

const Agree: React.FC = () => (
  <div className={classes.agree}>
    <input
      id="custom-checkbox"
      className={classes['custom-checkbox']}
      type="checkbox"
      onChange={() => form.agreeHandler()}
      disabled={!form.isFormValid}
      // checked={form.isFormValid}
      required
    />
    <label htmlFor="custom-checkbox">
      Принимаю&nbsp;<a href="/">условия</a>&nbsp;использования
    </label>
  </div>
);

export default observer(Agree);
