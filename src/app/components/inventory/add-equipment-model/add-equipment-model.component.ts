import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipmentService } from 'src/app/services/equipment/equipment.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-equipment-model',
  templateUrl: './add-equipment-model.component.html',
  styleUrls: ['./add-equipment-model.component.css']
})
export class AddEquipmentModelComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private equipmentService: EquipmentService,
    private location: Location
  ) {}

  categories = [
    'Desktop',
    'Notebook',
    'Monitor'
  ];

  addEquipmentModelForm: FormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      category: [''],
      manufacturer: [''],
      modelno: ['']
  });

  addEquipmentModel():void {
    console.log(this.addEquipmentModelForm.value);
    this.equipmentService.createEquipmentModel(this.addEquipmentModelForm.value).subscribe();
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
  }

}
