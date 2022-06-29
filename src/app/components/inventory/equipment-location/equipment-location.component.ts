import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EquipmentLocation } from 'src/app/models/equipment.model';
import { EquipmentService } from 'src/app/services/equipment/equipment.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActionDialogComponent } from 'src/app/components/action-dialog/action-dialog.component';

@Component({
  selector: 'app-equipment-location',
  templateUrl: './equipment-location.component.html',
  styleUrls: ['./equipment-location.component.css']
})
export class EquipmentLocationComponent implements OnInit {

  equipmentLocationDataSource: MatTableDataSource<EquipmentLocation>;

  equipmentLocationTableColumns = [
    'name',
    'address',
    'city',
    'postalCode',
    'country',
    'action'
  ];

  constructor(
    private equipmentService: EquipmentService,
    private dialog: MatDialog
  ) {}

  getEquipmentLocations(): void {
    this.equipmentService.getEquipmentLocations().subscribe(
      equipmentLocations => {
        this.equipmentLocationDataSource = new MatTableDataSource(equipmentLocations);
      }
    );
  }

  deleteEquipmentLocation(equipmentLocation: EquipmentLocation): void {
    const deleteActionDialogConfig = new MatDialogConfig();
    deleteActionDialogConfig.disableClose = true;
    deleteActionDialogConfig.width = '600px';
    deleteActionDialogConfig.data = {
      status: '',
      action: 'delete',
      item: 'equipment location',
    };

    const dialogActionRef = this.dialog.open(ActionDialogComponent, deleteActionDialogConfig);

    dialogActionRef.afterClosed().subscribe(status => {
       if(status === 'yes'){
          this.equipmentLocationDataSource.data = this.equipmentLocationDataSource.data.filter(el => el !== equipmentLocation);
          this.equipmentService.deleteEquipmentLocation(equipmentLocation.id).subscribe();
       }
    });
  }

  ngOnInit(): void {
    this.getEquipmentLocations();
  }
}
