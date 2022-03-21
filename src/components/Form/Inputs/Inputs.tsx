import { observer } from 'mobx-react-lite'

import { Name } from './InputItems/Name'
import { Email } from './InputItems/Email';
import { Telephone } from './InputItems/Telephone';


const Inputs: React.FC = () =>  (
    <>
      <Name />

      <Email />

      <Telephone />
    </>
)

export default observer(Inputs)