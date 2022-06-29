import { Employee } from './employee.model';

export class EquipmentAsset{
  id?: number;
  company: string;
  assetTag: string;
  model: EquipmentAssetModel;
  status: string;
  serial: string;
  assetName: string;
  purchaseDate: Date;
  supplier: EquipmentSupplier;
  orderNumber: string;
  purchaseCost: number;
  warranty: number;
  notes: string;
  location: EquipmentLocation;
  employee?: Employee;
  checkoutDate?: Date;
  expectedCheckinDate?: Date;
}
export class EquipmentAssetModel {
  id?: number;
  name: string;
  category: string;
  manufacturer: string;
  modelno: string;
}
export class EquipmentSupplier {
  id?: number;
  name: string;
  contactPerson: string;
  phone: string;
  fax: string;
  email: string;
  address: string;
}
export class EquipmentLocation {
  id?: number;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}
export class EquipmentCompany {
  id?: number;
  name: string;
}
export class EquipmentModelCategory {
  id?: number;
  name: string;
}
