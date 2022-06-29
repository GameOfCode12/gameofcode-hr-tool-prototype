import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipmentService } from 'src/app/services/equipment/equipment.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-equipment-location',
  templateUrl: './add-equipment-location.component.html',
  styleUrls: ['./add-equipment-location.component.css']
})
export class AddEquipmentLocationComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private equipmentService: EquipmentService,
    private location: Location
  ) {}

  addEquipmentLocationForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    address: [''],
    city: [''],
    postalCode: [''],
    country: ['']
  });

  addEquipmentLocation(): void {
    this.equipmentService.createEquipmentLocation(this.addEquipmentLocationForm.value).subscribe();
  }

  goBack(): void {
    this.location.back();
  }


  ngOnInit(): void {

  }

}
