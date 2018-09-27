import { OnCommaDirective } from './on-comma.directive';
import {async, TestBed} from '@angular/core/testing';
import {ElementRef} from '@angular/core';

describe('OnCommaDirective', () => {

  it('should create an instance', () => {
    const directive = new OnCommaDirective();
    expect(directive).toBeTruthy();
  });
});
