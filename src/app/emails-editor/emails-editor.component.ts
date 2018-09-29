import {Component, Input, OnInit, Output} from '@angular/core';
import {Email} from '../email';

@Component({
  selector: 'emails-editor',
  templateUrl: './emails-editor.component.html',
  styleUrls: ['./emails-editor.component.css'],
})
export class EmailsEditorComponent implements OnInit {

  @Input()
  emails: Array<Email> = [];

  currentInputValue: string;

  constructor() {
  }

  ngOnInit() {
    this.emails.push(new Email('sidorov@gmail.com'));
  }

  removeEmail(email: Email) {
    const index = this.emails.indexOf(email);
    this.emails.splice(index, 1);
  }

  addNewEmail(value: string) {
    if (value) {
      this.emails.push(new Email(value));
      this.currentInputValue = null;
    }
  }


}
