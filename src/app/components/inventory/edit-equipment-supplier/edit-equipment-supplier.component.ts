import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EquipmentService } from 'src/app/services/equipment/equipment.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-equipment-supplier',
  templateUrl: './edit-equipment-supplier.component.html',
  styleUrls: ['./edit-equipment-supplier.component.css']
})
export class EditEquipmentSupplierComponent implements OnInit {

  equipmentSupplierId = +this.route.snapshot.paramMap.get('id');


  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private equipmentService: EquipmentService,
    private location: Location
  ) {}

  editEquipmentSupplierForm: FormGroup = this.formBuilder.group(
    {
      name: ['', Validators.required],
      contactPerson: [''],
      phone: [''],
      fax: [''],
      email: ['', Validators.email],
      address: ['']
    }
  );

  getEquipmentSupplier(): void {
    this.equipmentService.getEquipmentSupplier(this.equipmentSupplierId).subscribe(
      equipmentSupplier => {
        this.editEquipmentSupplierForm.patchValue(
          {
            name: equipmentSupplier.name,
            contactPerson: equipmentSupplier.contactPerson,
            phone: equipmentSupplier.phone,
            fax: equipmentSupplier.fax,
            email: equipmentSupplier.email,
            address: equipmentSupplier.address
          }
        );
      }
    );
  }

  updateEquipmentSupplier(): void {
    this.equipmentService.updateEquipmentSupplier(this.editEquipmentSupplierForm.value, this.equipmentSupplierId).subscribe();
  }

  goBack(): void {
    this.location.back();
  }


  ngOnInit(): void {
    this.getEquipmentSupplier();
  }

}
