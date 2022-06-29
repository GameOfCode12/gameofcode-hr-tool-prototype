import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EquipmentService } from 'src/app/services/equipment/equipment.service';
import { EquipmentModelCategory } from 'src/app/models/equipment.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActionDialogComponent } from 'src/app/components/action-dialog/action-dialog.component';

@Component({
  selector: 'app-equipment-model-category',
  templateUrl: './equipment-model-category.component.html',
  styleUrls: ['./equipment-model-category.component.css']
})
export class EquipmentModelCategoryComponent implements OnInit {

  equipmentModelCategoryDataSource: MatTableDataSource<EquipmentModelCategory>;

  equipmentModelCategoryTableColumns = [
    'name',
    'action'
  ];

  constructor(
    private equipmentService: EquipmentService,
    private dialog: MatDialog
  ) {}

  getEquipmentModelCategories(): void {
    this.equipmentService.getEquipmentModelCategories().subscribe(
      equipmentModelCategories => {
        this.equipmentModelCategoryDataSource = new MatTableDataSource(equipmentModelCategories);
      }
    );
  }

  deleteEquipmentModelCategory(equipmentModelCategory: EquipmentModelCategory): void {
    const deleteActionDialogConfig = new MatDialogConfig();
    deleteActionDialogConfig.disableClose = true;
    deleteActionDialogConfig.width = '600px';
    deleteActionDialogConfig.data = {
      status: '',
      action: 'delete',
      item: 'equipment model category',
    };

    const dialogActionRef = this.dialog.open(ActionDialogComponent, deleteActionDialogConfig);

    dialogActionRef.afterClosed().subscribe(status => {
       if(status === 'yes'){
          this.equipmentModelCategoryDataSource.data = this.equipmentModelCategoryDataSource.data.filter(el => el !== equipmentModelCategory);
          this.equipmentService.deleteEquipmentModelCategory(equipmentModelCategory.id).subscribe();
       }
    });
  }

  ngOnInit(): void {
    this.getEquipmentModelCategories();
  }

}
