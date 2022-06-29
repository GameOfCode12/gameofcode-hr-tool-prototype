import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipmentService } from 'src/app/services/equipment/equipment.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EquipmentAssetModel, EquipmentSupplier, EquipmentLocation } from 'src/app/models/equipment.model';

@Component({
  selector: 'app-edit-equipment',
  templateUrl: './edit-equipment.component.html',
  styleUrls: ['./edit-equipment.component.css'],
})
export class EditEquipmentComponent implements OnInit {
  equipmentId: number = +this.route.snapshot.paramMap.get('id');
  companies = ['Cape Ann Enterprises'];
  equipmentStatus = ['Ready to Deploy', 'Deployed'];
  equipmentModels: EquipmentAssetModel[] = [];
  equipmentSuppliers: EquipmentSupplier[] = [];
  equipmentLocations: EquipmentLocation[] = [];
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private equipmentService: EquipmentService,
    private location: Location
  ) {}

  editEquipmentForm: FormGroup = this.formBuilder.group({
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

  getEquipment(): void {
    this.equipmentService.getEquipment(this.equipmentId).subscribe((equipment) => {
      this.editEquipmentForm.patchValue({
        assetTag: equipment.assetTag,
        company: equipment.company,
        model: equipment.model.id,
        status: equipment.status,
        serial: equipment.serial,
        assetName: equipment.assetName,
        purchaseDate: equipment.purchaseDate,
        supplier: equipment.supplier && equipment.supplier.id ? equipment.supplier.id.toString() : '',
        orderNumber: equipment.orderNumber,
        purchaseCost: equipment.purchaseCost,
        warranty: equipment.warranty,
        notes: equipment.notes,
        location: equipment.location && equipment.location.id ? equipment.location.id.toString() : '',
        employee: equipment.employee && equipment.employee.id ? equipment.employee.id.toString() : '',
      });
    });
  }

  updateEquipment(): void {
    this.equipmentService.updateEquipment(this.editEquipmentForm.value, this.equipmentId).subscribe();
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
    this.getEquipment();
    this.getEquipmentLocations();
    this.getEquipmentModels();
    this.getEquipmentSuppliers();
  }
}
