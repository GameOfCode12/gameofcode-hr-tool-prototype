import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipmentService } from 'src/app/services/equipment/equipment.service';
import { Location } from '@angular/common';
import { EquipmentAssetModel, EquipmentSupplier, EquipmentLocation } from 'src/app/models/equipment.model';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css'],
})
export class AddEquipmentComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private equipmentService: EquipmentService,
    private location: Location
  ) {}

  companies = ['Cape Ann Enterprises'];
  equipmentStatus = ['Ready to Deploy', 'Deployed'];
  equipmentModels: EquipmentAssetModel[] = [];
  equipmentSuppliers: EquipmentSupplier[] = [];
  equipmentLocations: EquipmentLocation[] = [];

  addEquipmentForm: FormGroup = this.formBuilder.group({
    assetTag: ['', Validators.required],
    company: [''],
    model: [''],
    status: [''],
    serial: [''],
    assetName: [''],
    purchaseDate: [''],
    supplier: [''],
    orderNumber: [''],
    purchaseCost: [''],
    warranty: [''],
    notes: [''],
    location: [''],
    employee: [''],
  });

  addEquipment(): void {
    this.equipmentService.createEquipment(this.addEquipmentForm.value).subscribe((equipment) => {});
  }

  getEquipmentModels(): void {
    this.equipmentService.getEquipmentModels().subscribe((equipmentModels) => {
      this.equipmentModels = equipmentModels;
    });
  }

  getEquipmentSuppliers(): void {
    this.equipmentService.getEquipmentSuppliers().subscribe((equipmentSuppliers) => {
      this.equipmentSuppliers = equipmentSuppliers;
    });
  }

  getEquipmentLocations(): void {
    this.equipmentService.getEquipmentLocations().subscribe((equipmentLocations) => {
      this.equipmentLocations = equipmentLocations;
    });
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getEquipmentModels();
    this.getEquipmentSuppliers();
    this.getEquipmentLocations();
  }
}
