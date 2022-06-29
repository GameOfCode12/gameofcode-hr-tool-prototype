import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EquipmentService } from 'src/app/services/equipment/equipment.service';
import { EquipmentCompany } from 'src/app/models/equipment.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActionDialogComponent } from 'src/app/components/action-dialog/action-dialog.component';

@Component({
  selector: 'app-equipment-company',
  templateUrl: './equipment-company.component.html',
  styleUrls: ['./equipment-company.component.css']
})
export class EquipmentCompanyComponent implements OnInit {

  equipmentCompanyDataSource: MatTableDataSource<EquipmentCompany>;

  equipmentCompanyTableColumns = [
    'name',
    'action'
  ];

  constructor(
    private equipmentService: EquipmentService,
    private dialog: MatDialog
  ) {}

  getEquipmentCompanies(): void {
    this.equipmentService.getEquipmentCompanies().subscribe(
      equipmentCompany => {
        this.equipmentCompanyDataSource = new MatTableDataSource(equipmentCompany);
      }
    );
  }

  deleteEquipmentCompany(equipmentCompany: EquipmentCompany): void {
    const deleteActionDialogConfig = new MatDialogConfig();
    deleteActionDialogConfig.disableClose = true;
    deleteActionDialogConfig.width = '600px';
    deleteActionDialogConfig.data = {
      status: '',
      action: 'delete',
      item: 'equipment company',
    };

    const dialogActionRef = this.dialog.open(ActionDialogComponent, deleteActionDialogConfig);

    dialogActionRef.afterClosed().subscribe(status => {
       if(status === 'yes'){
          this.equipmentCompanyDataSource.data = this.equipmentCompanyDataSource.data.filter(el => el !== equipmentCompany);
          this.equipmentService.deleteEquipmentCompany(equipmentCompany.id).subscribe();
       }
    });
  }

  ngOnInit(): void {
    this.getEquipmentCompanies();
  }
}
