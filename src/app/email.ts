export class Email {

  // tslint:disable-next-line:max-line-length
  private readonly emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private _value: string) {
  }

  public get value(): string {
    return this._value;
  }

  public get isValid(): boolean {
    return this.emailRegex.test(String(this._value).toLowerCase());
  };
}
