import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeesSkillsComponent } from '../../components/employees-skills/employees-skills.component';
import { Skill } from 'src/app/models/skill.model';
import { Employee } from 'src/app/models/employee.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-skill-description',
  templateUrl: './skill-description.component.html',
  styleUrls: ['./skill-description.component.css'],
})
export class SkillDescriptionComponent implements OnInit {
  form: FormGroup;
  name: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { parent: EmployeesSkillsComponent; skill: Skill; employee: Employee }
  ) {}
  ngOnInit() {}
}
