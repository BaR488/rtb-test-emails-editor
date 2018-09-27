import {ElementRef} from '@angular/core';
import { OnEnterDirective } from './on-enter.directive';
import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from '../../app.component';

describe('OnEnterDirective', () => {
  it('should create an instance', () => {
    const directive = new OnEnterDirective();
    expect(directive).toBeTruthy();
  });
});
