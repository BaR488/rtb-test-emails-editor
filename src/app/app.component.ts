import {Component} from '@angular/core';
import {Email} from './email';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rtb-test-emails-editor';

  sharedEmails: Array<Email> = [];

  private getRandomString(): string {
    return Math.random().toString(36).substring(2, Math.random() * (15 - 3) + 3);
  }

  addEmail() {
    this.sharedEmails.push(new Email(`${this.getRandomString()}@${this.getRandomString()}.${this.getRandomString()}`));
  }

  getEmailCount() {
    alert(this.sharedEmails.length);
  }
}
