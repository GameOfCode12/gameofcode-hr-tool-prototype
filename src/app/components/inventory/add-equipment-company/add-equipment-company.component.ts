import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipmentService } from 'src/app/services/equipment/equipment.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-equipment-company',
  templateUrl: './add-equipment-company.component.html',
  styleUrls: ['./add-equipment-company.component.css']
})
export class AddEquipmentCompanyComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private equipmentService: EquipmentService,
    private location: Location
  ) {}

  addEquipmentCompanyForm: FormGroup = this.formBuilder.group(
    {
      name:['', Validators.required]
    }
  );

  addEquipmentCompany(): void {
    this.equipmentService.createEquipmentCompany(this.addEquipmentCompanyForm.value).subscribe();
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {

  }

}
