import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeesComponent } from './components/employees/employees.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PastEmployeesComponent } from './components/past-employees/past-employees.component';
import { BooksComponent } from './components/books/books.component';
import { NonWorkingHolidaysComponent } from './components/non-working-holidays/non-working-holidays.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EmergencyContactsComponent } from './components/emergency-contacts/emergency-contacts.component';
import { AddEmployerComponent } from './components/add-employer/add-employer.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { ActionDialogComponent } from './components/action-dialog/action-dialog.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { LoginComponent } from './components/login/login.component';
import { SetPastEmployeeComponent } from './components/set-past-employee/set-past-employee.component';
import { BreadcumbToolbarComponent } from './components/breadcumb-toolbar/breadcumb-toolbar.component';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { EditBookComponent } from './components/books/edit-book/edit-book.component';
import { BookCheckoutComponent } from './components/books/book-checkout/book-checkout.component';
import { AddCheckoutBookComponent } from './components/books/add-checkout-book/add-checkout-book.component';
import { EditCheckoutBookComponent } from './components/books/edit-checkout-book/edit-checkout-book.component';
import { SalaryComponent } from './components/salary/salary.component';
import { ReferralComponent } from './components/referral/referral.component';
import { AddReferralComponent } from './components/referral/add-referral/add-referral.component';
import { EditReferralComponent } from './components/referral/edit-referral/edit-referral.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ConferenceComponent } from './components/conference/conference.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SalaryBonusComponent } from './components/salary/salary-bonus/salary-bonus.component';
import { AddConferenceComponent } from './components/conference/add-conference/add-conference.component';
import { EditConferenceComponent } from './components/conference/edit-conference/edit-conference.component';
import { EditSalaryComponent } from './components/salary/edit-salary/edit-salary.component';
import { DetailSalaryComponent } from './components/salary/detail-salary/detail-salary.component';
import { AddNonWorkingHolidayComponent } from './components/add-non-working-holiday/add-non-working-holiday.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { AddSalaryBonusComponent } from './components/salary/salary-bonus/add-salary-bonus/add-salary-bonus.component';
import { EditSalaryBonusComponent } from './components/salary/salary-bonus/edit-salary-bonus/edit-salary-bonus.component';
import { AddEquipmentModelComponent } from './components/inventory/add-equipment-model/add-equipment-model.component';
import { EditEquipmentModelComponent } from './components/inventory/edit-equipment-model/edit-equipment-model.component';
import { EditEquipmentSupplierComponent } from './components/inventory/edit-equipment-supplier/edit-equipment-supplier.component';
import { AddEquipmentSupplierComponent } from './components/inventory/add-equipment-supplier/add-equipment-supplier.component';
import { AddEquipmentLocationComponent } from './components/inventory/add-equipment-location/add-equipment-location.component';
import { EditEquipmentLocationComponent } from './components/inventory/edit-equipment-location/edit-equipment-location.component';
import { EquipmentComponent } from './components/inventory/equipment/equipment.component';
import { AddEquipmentComponent } from './components/inventory/add-equipment/add-equipment.component';
import { EditEquipmentComponent } from './components/inventory/edit-equipment/edit-equipment.component';
import { EquipmentLocationComponent } from './components/inventory/equipment-location/equipment-location.component';
import { EquipmentModelComponent } from './components/inventory/equipment-model/equipment-model.component';
import { EquipmentSupplierComponent } from './components/inventory/equipment-supplier/equipment-supplier.component';
import { CheckoutEquipmentComponent } from './components/inventory/checkout-equipment/checkout-equipment.component';
import { AddEquipmentCompanyComponent } from './components/inventory/add-equipment-company/add-equipment-company.component';
import { EditEquipmentCompanyComponent } from './components/inventory/edit-equipment-company/edit-equipment-company.component';
import { AddEquipmentModelCategoryComponent } from './components/inventory/add-equipment-model-category/add-equipment-model-category.component';
import { EditEquipmentModelCategoryComponent } from './components/inventory/edit-equipment-model-category/edit-equipment-model-category.component';
import { EquipmentModelCategoryComponent } from './components/inventory/equipment-model-category/equipment-model-category.component';
import { EquipmentCompanyComponent } from './components/inventory/equipment-company/equipment-company.component';
import { EmployeesSkillsComponent } from './components/employees-skills/employees-skills.component';
import { SalarySlipsComponent } from './components/salary-slips/salary-slips.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HelloComponent } from './components/employees-skills/hello.component';
import { ScrolltopDirective } from './components/employees-skills/scrolltop.directive';
import { MatSliderModule } from '@angular/material/slider';
import { SkillDescriptionComponent } from './components/skill-description/skill-description.component';
import { EditTeamAllocationComponent } from './components/edit-team-allocation/edit-team-allocation.component';
import { TeamAllocationComponent } from './components/team-allocation/team-allocation.component';
import { EmployeesViewDialogComponent } from './components/team-allocation-all-employees-view-dialog/employees-view-dialog.component';
import { EditNonWorkingHolidayComponent } from './components/edit-non-working-holiday/edit-non-working-holiday.component';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { employeesReducer } from './reducers/employees.reducers';
import { EmployeesEffects } from './effects/employees.effects';
import { ConferencesEffects } from './effects/conferences.effects';
import { conferencesReducer } from './reducers/conferences.reducers';
import { holidaysReducer } from './reducers/non-working-holidays.reducers';
import { NonWorkingHolidaysEffects } from './effects/non-working-holidays.effects';
import { emergencyContactsReducer } from './reducers/emergency-contacts.reducers';
import { ProjectsEffects } from './effects/projects.effects';
import { EmergencyContactsEffects } from './effects/emergency-contacts.effects';
import { projectsReducer } from './reducers/projects.reducers';
import { EditProjectTeamViewComponent } from './components/edit-project-team-view/edit-project-team-view.component';
import { ViewSalaryCommentComponent } from './components/salary/view-salary-comment/view-salary-comment.component';
import { SalariesEffects } from './effects/salaries.effects';
import { salariesReducer } from './reducers/salaries.reducers';
import { salaryBonusesReducer } from './reducers/salary-bonuses.reducers';
import { SalaryBonusesEffects } from './effects/salary-bonuses.effects';
import { VacationCalendarComponent } from './components/vacation-calendar/vacation-calendar.component';
import { MyVacationDaysComponent } from './components/my-vacation-days/my-vacation-days.component';
import { VacationFormComponent } from './components/vacation-form/vacation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    ProjectsComponent,
    PastEmployeesComponent,
    BooksComponent,
    NonWorkingHolidaysComponent,
    NavigationComponent,
    EmergencyContactsComponent,
    AddEmployerComponent,
    AddProjectComponent,
    ActionDialogComponent,
    EditProjectComponent,
    EmployeeDetailsComponent,
    LoginComponent,
    SetPastEmployeeComponent,
    BreadcumbToolbarComponent,
    AddBookComponent,
    EditBookComponent,
    BookCheckoutComponent,
    AddCheckoutBookComponent,
    EditCheckoutBookComponent,
    SalaryComponent,
    ReferralComponent,
    AddReferralComponent,
    EditReferralComponent,
    EditEmployeeComponent,
    DashboardComponent,
    ConferenceComponent,
    SettingsComponent,
    SalaryBonusComponent,
    AddConferenceComponent,
    EditConferenceComponent,
    EditSalaryComponent,
    DetailSalaryComponent,
    AddNonWorkingHolidayComponent,
    ProfilePageComponent,
    AddSalaryBonusComponent,
    EditSalaryBonusComponent,
    AddEquipmentModelComponent,
    EditEquipmentModelComponent,
    EditEquipmentSupplierComponent,
    AddEquipmentSupplierComponent,
    AddEquipmentLocationComponent,
    EditEquipmentLocationComponent,
    EquipmentComponent,
    AddEquipmentComponent,
    EditEquipmentComponent,
    EquipmentLocationComponent,
    EquipmentModelComponent,
    EquipmentSupplierComponent,
    CheckoutEquipmentComponent,
    AddEquipmentCompanyComponent,
    EditEquipmentCompanyComponent,
    AddEquipmentModelCategoryComponent,
    EditEquipmentModelCategoryComponent,
    EquipmentModelCategoryComponent,
    EquipmentCompanyComponent,
    EmployeesSkillsComponent,
    SalarySlipsComponent,
    HelloComponent,
    ScrolltopDirective,
    SkillDescriptionComponent,
    EditTeamAllocationComponent,
    TeamAllocationComponent,
    EmployeesViewDialogComponent,
    EditNonWorkingHolidayComponent,
    EditProjectTeamViewComponent,
    ViewSalaryCommentComponent,
    VacationCalendarComponent,
    MyVacationDaysComponent,
    VacationFormComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatIconModule,
    MatRadioModule,
    MatSliderModule,
    StoreModule.forRoot({
      employees: employeesReducer,
      conferences: conferencesReducer,
      nonWorkingHolidays: holidaysReducer,
      projects: projectsReducer,
      emergencyContacts: emergencyContactsReducer,
      salaries: salariesReducer,
      salaryBonuses: salaryBonusesReducer,
    }),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    EffectsModule.forRoot([
      EmployeesEffects,
      ConferencesEffects,
      NonWorkingHolidaysEffects,
      ProjectsEffects,
      EmergencyContactsEffects,
      SalariesEffects,
      SalaryBonusesEffects,
    ]),
    MatSortModule,
    MatTableModule,
  ],
  exports: [MatSortModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
