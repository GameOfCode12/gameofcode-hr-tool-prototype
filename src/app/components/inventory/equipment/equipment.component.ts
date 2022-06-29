import { Component, OnInit } from '@angular/core';
import { EquipmentService } from 'src/app/services/equipment/equipment.service';
import { EquipmentAsset } from 'src/app/models/equipment.model';
import { MatTableDataSource } from '@angular/material/table';
import { RoutePaths } from 'src/app/route-paths.enum';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CheckoutEquipmentComponent } from 'src/app/components/inventory/checkout-equipment/checkout-equipment.component';
import { ActionDialogComponent } from 'src/app/components/action-dialog/action-dialog.component';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css'],
})
export class EquipmentComponent implements OnInit {
  equipmentDataSource: MatTableDataSource<EquipmentAsset>;

  routePaths: typeof RoutePaths;

  equipmentTableColumns = [
    'assetTag',
    'serial',
    'model',
    'status',
    'checkedOutTo',
    'location',
    'category',
    'eol',
    'notes',
    'orderNumber',
    'checkoutDate',
    'expectedCheckinDate',
    'inOut',
    'action',
  ];

  constructor(private equipmentService: EquipmentService, private dialog: MatDialog) {}

  getEquipments(): void {
    this.equipmentService.getEquipments().subscribe((equipments) => {
      this.equipmentDataSource = new MatTableDataSource(equipments);
    });
  }

  checkOutEquipment(equipment: EquipmentAsset): void {
    const checkoutEquipmentDialogConfig = new MatDialogConfig();

    checkoutEquipmentDialogConfig.disableClose = true;

    checkoutEquipmentDialogConfig.width = '600px';

    checkoutEquipmentDialogConfig.data = {};

    const dialogRef = this.dialog.open(CheckoutEquipmentComponent, checkoutEquipmentDialogConfig);

    dialogRef.afterClosed().subscribe((equipmentData) => {
      if (equipmentData && equipmentData.checkoutDate && equipmentData.employee) {
        equipment.checkoutDate = equipmentData.checkoutDate;
        equipment.employee = equipmentData.employee;
        if (equipmentData.expectedCheckinDate) {
          equipment.expectedCheckinDate = equipmentData.expectedCheckinDate;
        }
        this.equipmentService.updateEquipment(equipment, equipment.id).subscribe((updatedEquipment) => {
          const equipmentIndex = this.equipmentDataSource.data.findIndex(
            (equipment) => equipment.id == updatedEquipment.id
          );
          let updatedEquipmentDataSource = [...this.equipmentDataSource.data];
          updatedEquipmentDataSource[equipmentIndex] = updatedEquipment;
          this.equipmentDataSource.data = updatedEquipmentDataSource;
        });
      }
    });
  }

  checkInEquipment(equipment: EquipmentAsset): void {
    const checkinEquipmentActionDialogConfig = new MatDialogConfig();
    checkinEquipmentActionDialogConfig.disableClose = true;
    checkinEquipmentActionDialogConfig.width = '600px';
    checkinEquipmentActionDialogConfig.data = {
      status: '',
      action: 'checkin',
      item: 'equipment',
    };

    const dialogActionRef = this.dialog.open(ActionDialogComponent, checkinEquipmentActionDialogConfig);

    dialogActionRef.afterClosed().subscribe((status) => {
      if (status === 'yes') {
        equipment.checkoutDate = null;
        equipment.employee = null;
        equipment.expectedCheckinDate = null;
        this.equipmentService.updateEquipment(equipment, equipment.id).subscribe();
      }
    });
  }

  deleteEquipment(equipment: EquipmentAsset): void {
    const deleteActionDialogConfig = new MatDialogConfig();
    deleteActionDialogConfig.disableClose = true;
    deleteActionDialogConfig.width = '600px';
    deleteActionDialogConfig.data = {
      status: '',
      action: 'delete',
      item: 'equipment',
    };

    const dialogActionRef = this.dialog.open(ActionDialogComponent, deleteActionDialogConfig);

    dialogActionRef.afterClosed().subscribe((status) => {
      if (status === 'yes') {
        this.equipmentDataSource.data = this.equipmentDataSource.data.filter((el) => el !== equipment);
        this.equipmentService.deleteEquipment(equipment.id).subscribe();
      }
    });
  }

  ngOnInit(): void {
    this.getEquipments();
    this.routePaths = RoutePaths;
  }
}
