import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EquipmentService } from 'src/app/services/equipment/equipment.service';
@Component({
  selector: 'app-add-equipment-supplier',
  templateUrl: './add-equipment-supplier.component.html',
  styleUrls: ['./add-equipment-supplier.component.css']
})
export class AddEquipmentSupplierComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private equipmentService: EquipmentService,
    private location: Location
  ) {}

  addEquipmentSupplierForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    contactPerson: [''],
    phone: [''],
    fax: [''],
    email: [''],
    address: ['']
  });

  addEquipmentSupplier(): void {
    this.equipmentService.createEquipmentSupplier(this.addEquipmentSupplierForm.value).subscribe();
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
  }

}
