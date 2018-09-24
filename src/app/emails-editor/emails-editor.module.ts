import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmailsEditorComponent } from './emails-editor.component';

@NgModule({
  declarations: [
    EmailsEditorComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    EmailsEditorComponent
  ]
})
export class EmailsEditorModule { }
