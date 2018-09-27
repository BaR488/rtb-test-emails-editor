import {Directive, ElementRef, EventEmitter, Output} from '@angular/core';
import {OnKeyPress} from './on-key-press';
import {KeyDetectionType} from './key-detection-type.enum';

const selector = 'onEnter';

@Directive({
  selector: '[onEnter]',
  // tslint:disable-next-line:use-output-property-decorator
  outputs: ['action:onEnter']
})
export class OnEnterDirective extends OnKeyPress {

  protected readonly enterKeyCode = 13;

  constructor() {
    super();
    this.keyDetectionType = KeyDetectionType.byCharCode;
    this.keys.push(this.enterKeyCode);
    this.prevent = true;
  }
}
