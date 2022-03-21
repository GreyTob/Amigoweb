import classes from './Header.module.scss'

const Header: React.FC = () =>  (
  <header className={classes.Header}>
    <legend>
      <h1 >Регистрация</h1>
    </legend>
    <span>Уже есть аккаунт?</span>&nbsp;<a href="/">Войти</a>
  </header>
)

export default Header