import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder
  ) {}

  editPasswordForm: FormGroup = this.formBuilder.group({
    password: ['', Validators.required],
    rePassword: ['', Validators.required]
  });

  updatePassword():void {
    if(this.editPasswordForm.value.password === this.editPasswordForm.value.rePassword){
        // update password here
    }else {
      console.log('Please enter password correct');
    }
  }

  ngOnInit(): void {
  }

}
