/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { _navComponent } from './_nav.component';

describe('_navComponent', () => {
  let component: _navComponent;
  let fixture: ComponentFixture<_navComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ _navComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(_navComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
