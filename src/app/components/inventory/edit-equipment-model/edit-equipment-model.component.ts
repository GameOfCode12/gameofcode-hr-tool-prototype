import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipmentService } from 'src/app/services/equipment/equipment.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EquipmentModelCategory } from 'src/app/models/equipment.model';

@Component({
  selector: 'app-edit-equipment-model',
  templateUrl: './edit-equipment-model.component.html',
  styleUrls: ['./edit-equipment-model.component.css']
})
export class EditEquipmentModelComponent implements OnInit {

  equipmentModelId = +this.route.snapshot.paramMap.get('id');

  equipmentModelCategories: EquipmentModelCategory[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private equipmentService: EquipmentService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  editEquipmentModelForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    category: [''],
    manufacturer: [''],
    modelno: ['']
  });

  categories = [
    'Desktop',
    'Notebook',
    'Monitor'
  ];

  updateEquipmentModel():void {
    this.equipmentService.updateEquipmentModel(this.editEquipmentModelForm.value, this.equipmentModelId).subscribe();
  }

  getEquipmentModel(): void {
    this.equipmentService.getEquipmentModel(this.equipmentModelId).subscribe(
      equipmentModel => {
        this.editEquipmentModelForm.patchValue(
          {
            name: equipmentModel.name,
            category: equipmentModel.category,
            manufacturer: equipmentModel.manufacturer,
            modelno: equipmentModel.modelno
          }
        );
      }
    );
  }

  getEquipmentModelCategories(): void {
    this.equipmentService.getEquipmentModelCategories().subscribe(
      equipmentModelCategories => {
        this.equipmentModelCategories = equipmentModelCategories;
      }
    );
  }

  goBack():void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getEquipmentModel();
    this.getEquipmentModelCategories();
  }

}
