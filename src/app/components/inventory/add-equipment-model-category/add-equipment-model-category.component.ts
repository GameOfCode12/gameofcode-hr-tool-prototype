import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { EquipmentService } from 'src/app/services/equipment/equipment.service';

@Component({
  selector: 'app-add-equipment-model-category',
  templateUrl: './add-equipment-model-category.component.html',
  styleUrls: ['./add-equipment-model-category.component.css']
})
export class AddEquipmentModelCategoryComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private equipmentService: EquipmentService,
    private location: Location
  ) {}

  addEquipmentModelCategoryForm: FormGroup = this.formBuilder.group(
    {
      name: ['', Validators.required]
    }
  );

  addEquipmentModelCategory(): void {
    this.equipmentService.createEquipmentModelCategory(this.addEquipmentModelCategoryForm.value).subscribe();
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {

  }
}
