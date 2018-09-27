import {Directive, EventEmitter, Output} from '@angular/core';
import {OnKeyPress} from './on-key-press';
import {KeyDetectionType} from './key-detection-type.enum';

@Directive({
  selector: '[onComma]',
  // tslint:disable-next-line:use-output-property-decorator
  outputs: ['action:onComma']
})
export class OnCommaDirective extends OnKeyPress {

  protected readonly commaKeyCode = 44;

  constructor() {
    super();
    this.keyDetectionType = KeyDetectionType.byCharCode;
    this.keys.push(this.commaKeyCode);
    this.prevent = true;
  }

}
