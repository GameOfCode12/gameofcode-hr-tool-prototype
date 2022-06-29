import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-checkout-equipment',
  templateUrl: './checkout-equipment.component.html',
  styleUrls: ['./checkout-equipment.component.css']
})
export class CheckoutEquipmentComponent implements OnInit {

  employees: Employee[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    public dialogRef: MatDialogRef<CheckoutEquipmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  checkoutEquipmentForm: FormGroup = this.formBuilder.group(
    {
      checkoutDate:[ new Date(), Validators.required],
      employee:['', Validators.required],
      expectedCheckinDate: ['']
    }
  );

  closeCheckoutEquipmentDialog(): void {
    this.dialogRef.close();
  }

  checkoutEquipment(): void {
    this.dialogRef.close(this.checkoutEquipmentForm.value);
  }

  private getEmployees(): void {
    this.employeeService.getEmployees().subscribe(
      employees => {
        this.employees = employees;
      }
    );
  }

  ngOnInit(): void {
    this.getEmployees();
  }

}
