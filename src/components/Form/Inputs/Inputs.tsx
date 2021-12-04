import { observer } from 'mobx-react-lite'
import classes from './Inputs.module.scss'
import {Name} from './InputItems/Name'
import { Email } from './InputItems/Email';
import { Telephone } from './InputItems/Telephone';


export const Inputs: React.FC = observer(() =>  (
    <div className={classes.InputGroups}>
      <Name />

      <Email />

      <Telephone />
    </div>
))