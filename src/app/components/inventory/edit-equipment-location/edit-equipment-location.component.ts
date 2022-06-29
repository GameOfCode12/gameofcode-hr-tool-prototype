import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipmentService } from 'src/app/services/equipment/equipment.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-equipment-location',
  templateUrl: './edit-equipment-location.component.html',
  styleUrls: ['./edit-equipment-location.component.css']
})
export class EditEquipmentLocationComponent implements OnInit {

  equipmentLocationId = +this.route.snapshot.paramMap.get('id');

  constructor(
    private formBuilder: FormBuilder,
    private equipmentService: EquipmentService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  editEquipmentLocationForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    address: [''],
    city: [''],
    postalCode: [''],
    country: ['']
  });

  getEquipmentLocation(): void {
    this.equipmentService.getEquipmentLocation(this.equipmentLocationId).subscribe(
      equipmentLocation => {
        this.editEquipmentLocationForm.patchValue({
          name: equipmentLocation.name,
          address: equipmentLocation.address,
          city: equipmentLocation.city,
          postalCode: equipmentLocation.postalCode,
          country: equipmentLocation.country
        });
      }
      );
  }

  updateEquipmentLocation():void {
    this.equipmentService.updateEquipmentLocation(this.editEquipmentLocationForm.value, this.equipmentLocationId).subscribe();
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getEquipmentLocation();
  }
}
