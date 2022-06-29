import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EquipmentService } from 'src/app/services/equipment/equipment.service';
import { EquipmentAssetModel } from 'src/app/models/equipment.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActionDialogComponent } from 'src/app/components/action-dialog/action-dialog.component';

@Component({
  selector: 'app-equipment-model',
  templateUrl: './equipment-model.component.html',
  styleUrls: ['./equipment-model.component.css']
})
export class EquipmentModelComponent implements OnInit {

  equipmentModelDataSource: MatTableDataSource<EquipmentAssetModel>;

  constructor(
    private equipmentService: EquipmentService,
    private dialog: MatDialog
  ) {}

  equipmentModelsTableColumns = [
    'name',
    'category',
    'manufacturer',
    'modelno',
    'action'
  ];

  getEquipmentModels(): void {
    this.equipmentService.getEquipmentModels().subscribe(
      equipmentModels => {
        this.equipmentModelDataSource = new MatTableDataSource(equipmentModels);
      }
    );
  }

  deleteEquipmentModel(equipmentModel: EquipmentAssetModel): void {
    const deleteActionDialogConfig = new MatDialogConfig();
    deleteActionDialogConfig.disableClose = true;
    deleteActionDialogConfig.width = '600px';
    deleteActionDialogConfig.data = {
      status: '',
      action: 'delete',
      item: 'equipment model',
    };

    const dialogActionRef = this.dialog.open(ActionDialogComponent, deleteActionDialogConfig);

    dialogActionRef.afterClosed().subscribe(status => {
       if(status === 'yes'){
          this.equipmentModelDataSource.data = this.equipmentModelDataSource.data.filter(el => el !== equipmentModel);
          this.equipmentService.deleteEquipmentLocation(equipmentModel.id).subscribe();
       }
    });
  }

  ngOnInit(): void {
    this.getEquipmentModels();
  }
}
