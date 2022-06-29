import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
})
export class AddProjectComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  addProjectForm = this.formBuilder.group({
    name: ['', Validators.required],
  });

  addProject(): void {
    this.dialogRef.close(this.addProjectForm.value);
  }
  closeAddProjectDialog(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
