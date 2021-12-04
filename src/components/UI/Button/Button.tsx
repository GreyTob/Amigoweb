import classes from './Button.module.scss'

interface IButtonProps {
  value: string
  disabled:boolean
  type: any
}

export const Button: React.FC<IButtonProps> = ({value, disabled, type}) => {
  const cls = [classes.Button]

  if (disabled)
    cls.push(classes.disabled)
    
  return <button type={type} disabled={disabled} className={cls.join(' ')}>{value}</button>
 
}

