import { useState } from 'react';
import classes from './InputItems.module.scss';
import Form from '../../../../store/form';

export const Name: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [dirty, setDirty] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);
  /* eslint-disable */
  const nameReplace: RegExp = /[\d!@#$%^&*()+="№;:?*_]+$/;

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const nameVlue = e.target.value.replace(nameReplace, '');
    setName(nameVlue);

    if (nameVlue) {
      setValid(true);
      Form.checkValidForm('name', true);
    } else {
      setValid(false);
      Form.checkValidForm('name', false);
    }
  };

  const blurHandler = (e: React.FocusEvent<HTMLInputElement>): void => {
    if (e.target.value.trim() === '') {
      setDirty(true);
    }
  };

  return (
    <div className={classes['input-item']}>
      <label htmlFor="name">
        <p>Имя</p>
        <input
          value={name}
          name="name"
          id="name"
          onChange={(e) => changeHandler(e)}
          onBlur={(e) => blurHandler(e)}
          type="text"
          placeholder="Введите ваше имя"
          required
        />
      </label>
      {dirty && !valid ? (
        <p className={classes.error}>Name Validation error message</p>
      ) : null}
    </div>
  );
};
