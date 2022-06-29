import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EquipmentService } from 'src/app/services/equipment/equipment.service';
import { EquipmentSupplier } from 'src/app/models/equipment.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActionDialogComponent } from 'src/app/components/action-dialog/action-dialog.component';

@Component({
  selector: 'app-equipment-supplier',
  templateUrl: './equipment-supplier.component.html',
  styleUrls: ['./equipment-supplier.component.css']
})
export class EquipmentSupplierComponent implements OnInit {

  equipmentSupplierDataSource: MatTableDataSource<EquipmentSupplier>;

  constructor(
    private equipmentService: EquipmentService,
    private dialog: MatDialog
  ) {}

  equipmentSuppliersTableColumns = [
    'name',
    'contactPerson',
    'phone',
    'fax',
    'email',
    'address',
    'action'
  ];

  getEquipmentSuppliers(): void {
    this.equipmentService.getEquipmentSuppliers().subscribe(
      equipmentSuppliers => {
        this.equipmentSupplierDataSource = new MatTableDataSource(equipmentSuppliers);
      }
    );
  }

  deleteEquipmentSupplier( equipmentSupplier: EquipmentSupplier ): void {
    const deleteActionDialogConfig = new MatDialogConfig();
    deleteActionDialogConfig.disableClose = true;
    deleteActionDialogConfig.width = '600px';
    deleteActionDialogConfig.data = {
      status: '',
      action: 'delete',
      item: 'equipment supplier',
    };

    const dialogActionRef = this.dialog.open(ActionDialogComponent, deleteActionDialogConfig);

    dialogActionRef.afterClosed().subscribe(status => {
       if(status === 'yes'){
          this.equipmentSupplierDataSource.data = this.equipmentSupplierDataSource.data.filter(el => el !== equipmentSupplier);
          this.equipmentService.deleteEquipmentSupplier(equipmentSupplier.id).subscribe();
       }
    });
  }

  ngOnInit(): void {
    this.getEquipmentSuppliers();
  }
}
