import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EquipmentService } from 'src/app/services/equipment/equipment.service';

@Component({
  selector: 'app-edit-equipment-model-category',
  templateUrl: './edit-equipment-model-category.component.html',
  styleUrls: ['./edit-equipment-model-category.component.css']
})
export class EditEquipmentModelCategoryComponent implements OnInit {

  equipmentModelCategoryId = +this.route.snapshot.paramMap.get('id');

  constructor(
    private formBuilder: FormBuilder,
    private equipmentService: EquipmentService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  editEquipmentModelCategoryForm = this.formBuilder.group(
    {
      name: ['', Validators.required]
    }
  );

  updateEquipmentModelCategory():void {
    this.equipmentService.updateEquipmentModelCategory(this.editEquipmentModelCategoryForm.value, this.equipmentModelCategoryId).subscribe(
      equipmentModelCategory => {
        this.editEquipmentModelCategoryForm.patchValue(
          {
            name: equipmentModelCategory.name
          }
        );
      }
    );
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
  }

}
