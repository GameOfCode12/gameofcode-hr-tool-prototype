import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { EquipmentService } from 'src/app/services/equipment/equipment.service';

@Component({
  selector: 'app-edit-equipment-company',
  templateUrl: './edit-equipment-company.component.html',
  styleUrls: ['./edit-equipment-company.component.css']
})
export class EditEquipmentCompanyComponent implements OnInit {

  equipmentCompanyId = +this.route.snapshot.paramMap.get('id');

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private equipmentService: EquipmentService,
    private location: Location
  ) {}

  editEquipmentCompanyForm: FormGroup = this.formBuilder.group(
      {
        name: ['', Validators.required]
      }
    );

  getEquipmentCompany(): void {
    this.equipmentService.getEquipmentCompany(this.equipmentCompanyId).subscribe(
      equipmentCompany => {
        this.editEquipmentCompanyForm.patchValue(
          {
            name: equipmentCompany.name
          }
        );
      }
    );
  }

  updateEquipmentCompany(): void {
    this.equipmentService.updateEquipmentCompany(this.editEquipmentCompanyForm.value, this.equipmentCompanyId).subscribe();
  }
  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getEquipmentCompany();
  }

}
