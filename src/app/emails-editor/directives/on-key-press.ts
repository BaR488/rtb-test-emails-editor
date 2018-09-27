import {EventEmitter, HostListener} from '@angular/core';
import {KeyDetectionType} from './key-detection-type.enum';

export abstract class OnKeyPress {

  constructor() {
  }

  protected keys: Array<number | string> = [];

  public action: EventEmitter<undefined> = new EventEmitter();

  protected prevent: boolean;

  protected keyDetectionType: KeyDetectionType;

  @HostListener('keypress', ['$event'])
  protected onKeypressHandler(event: KeyboardEvent) {
    if (this.keys.some(key => this.validKey(event, key))) {
      this.action.emit();
      if (this.prevent) {
        event.preventDefault();
      }
    }
  }

  protected validKey(event: KeyboardEvent, key: number | string): boolean {
    switch (this.keyDetectionType) {
      case KeyDetectionType.byKey:
        return event.code === key;
        break;
      case KeyDetectionType.byChar:
        return event.char === key;
        break;
      case KeyDetectionType.byCharCode:
        return event.charCode === key;
        break;
    }
    return false;
  }
}
