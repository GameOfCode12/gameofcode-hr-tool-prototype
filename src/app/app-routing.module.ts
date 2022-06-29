import { SalarySlipsComponent } from './components/salary-slips/salary-slips.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { RoutePaths } from './route-paths.enum';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { NonWorkingHolidaysComponent } from './components/non-working-holidays/non-working-holidays.component';
import { BooksComponent } from './components/books/books.component';
import { PastEmployeesComponent } from './components/past-employees/past-employees.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './components/projects/projects.component';
import { EmergencyContactsComponent } from './components/emergency-contacts/emergency-contacts.component';
import { AddEmployerComponent } from './components/add-employer/add-employer.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { LoginComponent } from './components/login/login.component';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { EditBookComponent } from './components/books/edit-book/edit-book.component';
import { BookCheckoutComponent } from './components/books/book-checkout/book-checkout.component';
import { AddCheckoutBookComponent } from './components/books/add-checkout-book/add-checkout-book.component';
import { EditCheckoutBookComponent } from './components/books/edit-checkout-book/edit-checkout-book.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SalaryComponent } from './components/salary/salary.component';
import { SalaryBonusComponent } from './components/salary/salary-bonus/salary-bonus.component';
import { ReferralComponent } from './components/referral/referral.component';
import { AddReferralComponent } from './components/referral/add-referral/add-referral.component';
import { EditReferralComponent } from './components/referral/edit-referral/edit-referral.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { ConferenceComponent } from './components/conference/conference.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AddConferenceComponent } from './components/conference/add-conference/add-conference.component';
import { EditConferenceComponent } from './components/conference/edit-conference/edit-conference.component';
import { EditSalaryComponent } from './components/salary/edit-salary/edit-salary.component';
import { DetailSalaryComponent } from './components/salary/detail-salary/detail-salary.component';
import { AddSalaryBonusComponent } from './components/salary/salary-bonus/add-salary-bonus/add-salary-bonus.component';
import { EditSalaryBonusComponent } from './components/salary/salary-bonus/edit-salary-bonus/edit-salary-bonus.component';
import { AddEquipmentModelComponent } from './components/inventory/add-equipment-model/add-equipment-model.component';
import { EditEquipmentModelComponent } from './components/inventory/edit-equipment-model/edit-equipment-model.component';
import { AddEquipmentSupplierComponent } from './components/inventory/add-equipment-supplier/add-equipment-supplier.component';
import { EditEquipmentSupplierComponent } from './components/inventory/edit-equipment-supplier/edit-equipment-supplier.component';
import { AddEquipmentLocationComponent } from './components/inventory/add-equipment-location/add-equipment-location.component';
import { EditEquipmentLocationComponent } from './components/inventory/edit-equipment-location/edit-equipment-location.component';
import { EquipmentComponent } from './components/inventory/equipment/equipment.component';
import { AddEquipmentComponent } from './components/inventory/add-equipment/add-equipment.component';
import { EditEquipmentComponent } from './components/inventory/edit-equipment/edit-equipment.component';
import { EquipmentModelComponent } from './components/inventory/equipment-model/equipment-model.component';
import { EquipmentLocationComponent } from './components/inventory/equipment-location/equipment-location.component';
import { EquipmentSupplierComponent } from './components/inventory/equipment-supplier/equipment-supplier.component';
import { AddEquipmentCompanyComponent } from './components/inventory/add-equipment-company/add-equipment-company.component';
import { EditEquipmentCompanyComponent } from './components/inventory/edit-equipment-company/edit-equipment-company.component';
import { EquipmentCompanyComponent } from './components/inventory/equipment-company/equipment-company.component';
import { AddEquipmentModelCategoryComponent } from './components/inventory/add-equipment-model-category/add-equipment-model-category.component';
import { EditEquipmentModelCategoryComponent } from './components/inventory/edit-equipment-model-category/edit-equipment-model-category.component';
import { EquipmentModelCategoryComponent } from './components/inventory/equipment-model-category/equipment-model-category.component';
import { AuthGuard } from './guard/auth.guard';
import { EmployeesSkillsComponent } from './components/employees-skills/employees-skills.component';
import { EditTeamAllocationComponent } from './components/edit-team-allocation/edit-team-allocation.component';
import { GoogleAuthComponent } from './components/google-auth/google-auth.component';
import { TeamAllocationComponent } from './components/team-allocation/team-allocation.component';
import { VacationCalendarComponent } from './components/vacation-calendar/vacation-calendar.component';
import { MyVacationDaysComponent } from './components/my-vacation-days/my-vacation-days.component';
import { VacationFormComponent } from './components/vacation-form/vacation-form.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: `${RoutePaths.Employees}`,
        pathMatch: 'full',
      },
      {
        path: 'employee-details/:id',
        component: EmployeeDetailsComponent,
      },
      {
        path: `${RoutePaths.Employees}`,
        component: EmployeesComponent,
      },
      {
        path: `${RoutePaths.Employees}/${RoutePaths.EmployeeDetails}/:id`,
        component: EmployeeDetailsComponent,
      },
      {
        path: `${RoutePaths.Employees}/${RoutePaths.AddEmployee}`,
        component: AddEmployerComponent,
      },
      {
        path: `${RoutePaths.Employees}/${RoutePaths.EditEmployee}/:id`,
        component: EditEmployeeComponent,
      },
      {
        path: `${RoutePaths.PastEmployees}/${RoutePaths.EmployeeDetails}/:id`,
        component: EmployeeDetailsComponent,
      },
      {
        path: `${RoutePaths.Employees}/:id`,
        component: EmployeeDetailsComponent,
      },
      {
        path: `${RoutePaths.EmployeeDetails}/:id`,
        component: EmployeeDetailsComponent,
      },
      {
        path: `${RoutePaths.EditProject}`,
        component: EditProjectComponent,
      },
      {
        path: `${RoutePaths.EditeamAllocation}`,
        component: EditTeamAllocationComponent,
      },
      {
        path: `${RoutePaths.Projects}`,
        component: ProjectsComponent,
      },
      {
        path: `${RoutePaths.TeamAllocation}`,
        component: TeamAllocationComponent,
      },
      {
        path: `${RoutePaths.PastEmployees}`,
        component: PastEmployeesComponent,
      },
      {
        path: `${RoutePaths.AddBook}`,
        component: AddBookComponent,
      },
      {
        path: `${RoutePaths.AddBookCheckout}`,
        component: AddCheckoutBookComponent,
      },
      {
        path: `${RoutePaths.BookCheckouts}`,
        component: BookCheckoutComponent,
      },
      {
        path: `${RoutePaths.EditBookCheckout}`,
        component: EditCheckoutBookComponent,
      },
      {
        path: `${RoutePaths.EditBook}`,
        component: EditBookComponent,
      },
      {
        path: `${RoutePaths.Books}`,
        component: BooksComponent,
      },
      {
        path: `${RoutePaths.NonWorkingHolidays}`,
        component: NonWorkingHolidaysComponent,
      },
      {
        path: `${RoutePaths.EmergencyContacts}`,
        component: EmergencyContactsComponent,
      },
      {
        path: `${RoutePaths.AddReferralBonus}`,
        component: AddReferralComponent,
      },
      {
        path: `${RoutePaths.EditReferralBonus}`,
        component: EditReferralComponent,
      },
      {
        path: `${RoutePaths.ReferralBonus}`,
        component: ReferralComponent,
      },
      {
        path: `${RoutePaths.AddSalaryBonuses}`,
        component: AddSalaryBonusComponent,
      },
      {
        path: `${RoutePaths.EditSalaryBonuses}/:id`,
        component: EditSalaryBonusComponent,
      },
      {
        path: `${RoutePaths.SalaryBonuses}`,
        component: SalaryBonusComponent,
      },
      {
        path: `${RoutePaths.EditSalary}/:id`,
        component: EditSalaryComponent,
      },
      {
        path: `${RoutePaths.Salaries}/:id`,
        component: DetailSalaryComponent,
      },
      {
        path: `${RoutePaths.Salaries}`,
        component: SalaryComponent,
      },
      {
        path: `${RoutePaths.AddConference}`,
        component: AddConferenceComponent,
      },
      {
        path: `${RoutePaths.EditConference}/:id`,
        component: EditConferenceComponent,
      },
      {
        path: `${RoutePaths.Conferences}`,
        component: ConferenceComponent,
      },
      {
        path: `${RoutePaths.Settings}`,
        component: SettingsComponent,
      },
      {
        path: `${RoutePaths.AddEquipmentAssetModel}`,
        component: AddEquipmentModelComponent,
      },
      {
        path: `${RoutePaths.EditEquipmentAssetModel}/:id`,
        component: EditEquipmentModelComponent,
      },
      {
        path: `${RoutePaths.EquipmentAssetModel}`,
        component: EquipmentModelComponent,
      },
      {
        path: `${RoutePaths.AddEquipmentCompany}`,
        component: AddEquipmentCompanyComponent,
      },
      {
        path: `${RoutePaths.EditEquipmentCompany}/:id`,
        component: EditEquipmentCompanyComponent,
      },
      {
        path: `${RoutePaths.EquipmentCompanies}`,
        component: EquipmentCompanyComponent,
      },
      {
        path: `${RoutePaths.AddEquipmentModelCategory}`,
        component: AddEquipmentModelCategoryComponent,
      },
      {
        path: `${RoutePaths.EditEquipmentModelCategory}/:id`,
        component: EditEquipmentModelCategoryComponent,
      },
      {
        path: `${RoutePaths.EquipmentModelCategories}`,
        component: EquipmentModelCategoryComponent,
      },
      {
        path: `${RoutePaths.AddEquipmentSupplier}`,
        component: AddEquipmentSupplierComponent,
      },
      {
        path: `${RoutePaths.EditEquipmentSupplier}/:id`,
        component: EditEquipmentSupplierComponent,
      },
      {
        path: `${RoutePaths.EquipmentSuppliers}`,
        component: EquipmentSupplierComponent,
      },
      {
        path: `${RoutePaths.AddEquipmentLocation}`,
        component: AddEquipmentLocationComponent,
      },
      {
        path: `${RoutePaths.EquipmentLocations}`,
        component: EquipmentLocationComponent,
      },
      {
        path: `${RoutePaths.EditEquipmentLocation}/:id`,
        component: EditEquipmentLocationComponent,
      },
      {
        path: `${RoutePaths.AddEquipment}`,
        component: AddEquipmentComponent,
      },
      {
        path: `${RoutePaths.EditEquipment}/:id`,
        component: EditEquipmentComponent,
      },
      {
        path: `${RoutePaths.Equipments}`,
        component: EquipmentComponent,
      },
      {
        path: `${RoutePaths.SalarySlips}`,
        component: SalarySlipsComponent,
      },
      {
        path: `${RoutePaths.EditEmployee}/:id`,
        component: EditEmployeeComponent,
      },
      {
        path: 'edit/employee/:id',
        component: EditEmployeeComponent,
      },
      {
        path: `${RoutePaths.EmployeesSkills}`,
        component: EmployeesSkillsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: `${RoutePaths.AddEmployeeInSkills}`,
        component: AddEmployerComponent,
      },
      {
        path: `${RoutePaths.EmployeesSkills}/${RoutePaths.EditUserInSkills}/:id`,
        component: EditEmployeeComponent,
      },
      {
        path: `${RoutePaths.VacationForm}`,
        component: VacationFormComponent,
      },
      {
        path: `${RoutePaths.MyVacationDays}`,
        component: MyVacationDaysComponent,
      },
      {
        path: `${RoutePaths.VacationCalendar}`,
        component: VacationCalendarComponent,
      },
    ],
  },
  {
    path: `${RoutePaths.Login}`,
    component: LoginComponent,
  },
  {
    path: `${RoutePaths.Profile}`,
    component: ProfilePageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
