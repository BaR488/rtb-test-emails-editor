import {Component, OnInit} from '@angular/core';
import {Email} from '../email';

@Component({
  selector: 'emails-editor',
  templateUrl: './emails-editor.component.html',
  styleUrls: ['./emails-editor.component.css']
})
export class EmailsEditorComponent implements OnInit {

  emails: Array<Email>;

  constructor() {
  }

  ngOnInit() {
    this.emails = [new Email('test')];
  }

}
