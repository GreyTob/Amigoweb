import {useRef} from 'react'
import Form from '../../../store/form'
import classes from './Select.module.scss'

export const Select: React.FC = () => {
  const languages: string[] = ['Русский', 'Английский', 'Китайский', 'Испанский' ]
  const selectSingle = useRef<any>(null)
  const selectSingle_title = useRef<any>(null)

  const selectHandler = () => {
    if ('active' === selectSingle.current!.getAttribute('data-state')) {
      selectSingle.current!.setAttribute('data-state', '');
    } else {
      selectSingle.current!.setAttribute('data-state', 'active');
    }
  }

  const labelsHandler = (e: any) => {
    selectSingle_title.current.textContent = e.target.textContent
    selectSingle.current!.setAttribute('data-state', '');

    if(selectSingle_title.current.textContent) {
      Form.checkValidForm('lang', true)
    } 
  }

  return (
    <> 
      <p>Язык</p>
      <div ref={selectSingle} data-state='' className={classes.Select} >
          <div ref={selectSingle_title} onClick={() => selectHandler()} className={classes.title}>
            <span className={classes.title_placeholder}>Язык</span> 
          </div>

          <div className={classes.content} >
            {languages.map(i => (
                <div key={i}>
                  <input  id={i} className={classes.input} type="radio"/>
                  <label  onClick={(e) => labelsHandler(e)}  htmlFor={i} className={classes.label}>{i}</label>
                </div>)
            )}
          </div>
      </div>
    </>
  )
} 