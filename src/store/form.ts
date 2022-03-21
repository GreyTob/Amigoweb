import { makeAutoObservable } from 'mobx';

class Form {
  inputsValid: object[] = [
    { name: false },
    { email: false },
    { tel: false },
    { lang: false },
  ];
  isFormValid: boolean = false;
  completed: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  public checkValidForm = (input: string, valid: boolean): void => {
    this.inputsValid = this.inputsValid.map((i) =>
      Object.keys(i).toString() === input ? { [input]: valid } : i
    );
    this.formValid();
  };

  public formValid = (): void => {
    this.isFormValid = !this.inputsValid.filter((i) =>
      Object.values(i).includes(false)
    ).length;
  };

  public agreeHandler = (): void => {
    if (this.isFormValid) {
      console.log('if', this.isFormValid);

      this.completed = !this.completed;
    } else {
      this.completed = false;
      console.log('else', this.isFormValid);
    }
  };
}

export default new Form();
