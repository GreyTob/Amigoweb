import { makeAutoObservable } from "mobx"

class Form {

  isFormValid: any = {name: false, email: false, tel: false, lang: false,}
  completed:boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  public blurHandler = (e:React.FocusEvent<HTMLInputElement>, setDirty: any):void => {
    const value = e.target.value.trim()
    if(value === '') {
      setDirty(true)
    } else {
      setDirty(false)
    }
  }

  public changeHandler = (
    e:React.ChangeEvent<HTMLInputElement>, 
    setValue: (value: string) => void,  
    setValid: (status: boolean) => void, 
    setDirty: (status: boolean) => void, 
    regExp: RegExp, 
  ):void => {
    /* eslint-disable */
    switch(e.target.name) {
      case 'name':
        const regName: RegExp = /[\d!@#$%^&*()+="№;:?*_]+$/
        setValue(e.target.value.replace(regName, ''))
        break
      case 'email':
        setValue(e.target.value)
        break
      case 'tel':
        const regTel: RegExp =/[^\d\+\s\(\)\-]/g
        setValue(e.target.value.replace(regTel, "").substr(0, 18)) 
        break
    } 

    const valid: RegExpMatchArray | null = e.target.value.trim().match(regExp) 
    if (valid) {
      setValid(false)
      setDirty(false)
      this.isFormValid[e.target.name] = true
    } else {
      setValid(true)
      this.isFormValid[e.target.name] = false
    }
  }

  public agreeHandler = () => {
      this.completed = !this.completed
  }
}

export default new Form()