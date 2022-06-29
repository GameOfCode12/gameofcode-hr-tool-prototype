import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesSkillsComponent } from './employees-skills.component';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { HelloComponent } from "./hello.component";
import { ScrolltopDirective } from "./scrolltop.directive";

describe('EmployeesSkillsComponent', () => {
  let component: EmployeesSkillsComponent;
  let fixture: ComponentFixture<EmployeesSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
