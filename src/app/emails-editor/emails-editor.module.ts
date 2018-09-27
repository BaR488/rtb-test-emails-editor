import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EmailsEditorComponent} from './emails-editor.component';
import {OnEnterDirective} from './directives/on-enter.directive';
import {OnCommaDirective} from './directives/on-comma.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EmailsEditorComponent,
    OnEnterDirective,
    OnCommaDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    EmailsEditorComponent
  ]
})
export class EmailsEditorModule {
}
