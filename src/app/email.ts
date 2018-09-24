export class Email {
  constructor(private _value: string) {

  }

  public get value(): string {
    return this._value;
  }
}
