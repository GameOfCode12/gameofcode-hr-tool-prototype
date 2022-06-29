import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EquipmentAsset, EquipmentAssetModel, EquipmentCompany, EquipmentLocation, EquipmentModelCategory, EquipmentSupplier } from 'src/app/models/equipment.model';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {

  apiEquipmentAssetsUrl = `${environment.api_url}/equipment-assets`;

  apiEquipmentAssetModelssUrl = `${environment.api_url}/equipment-models`;

  apiEquipmentAssetSuppliersUrl = `${environment.api_url}/equipment-suppliers`;

  apiEquipmentAssetLocationsUrl = `${environment.api_url}/equipment-locations`;

  apiEquipmentAssetCompaniesUrl = `${environment.api_url}/equipment-companies`;

  apiEquipmentAssetModelCategories = `${environment.api_url}/equipment-model-categories`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) {}
  /**GET: Retrieve all equipments from server */
  getEquipments(): Observable<EquipmentAsset[]> {
    return this.http.get<EquipmentAsset[]>(this.apiEquipmentAssetsUrl, this.httpOptions);
  }
  /**GET: Retrieve equipment by id from server */
  getEquipment( equipmentId: number): Observable<EquipmentAsset> {
    return this.http.get<EquipmentAsset>(`${this.apiEquipmentAssetsUrl}/${equipmentId}`);
  }
  /**POST: Create equipment on server */
  createEquipment(equipment: EquipmentAsset):Observable<EquipmentAsset> {
   return this.http.post<EquipmentAsset>(this.apiEquipmentAssetsUrl, equipment, this.httpOptions);
  }
  /** PUT: Update equipment on server */
  updateEquipment(equipment: EquipmentAsset, equipmentId:number): Observable<EquipmentAsset>{
    const updateUrl = `${this.apiEquipmentAssetsUrl}/${equipmentId}`;
    return this.http.put<EquipmentAsset>(updateUrl, equipment, this.httpOptions);
  }
  /**DELETE: Delete equipment from server */
  deleteEquipment(equipmentId: number): Observable<EquipmentAsset>{
    const deleteUrl = `${this.apiEquipmentAssetsUrl}/${equipmentId}`;
    return this.http.delete<EquipmentAsset>(deleteUrl, this.httpOptions);
  }
  /** GET: Retrieve all equipment models from server */
  getEquipmentModels(): Observable<EquipmentAssetModel[]> {
    return this.http.get<EquipmentAssetModel[]>(this.apiEquipmentAssetModelssUrl, this.httpOptions);
  }
  /** GET: Retrieve equipment model by ID from server */
  getEquipmentModel(equipmentModelId: number): Observable<EquipmentAssetModel> {
    return this.http.get<EquipmentAssetModel>(`${this.apiEquipmentAssetModelssUrl}/${equipmentModelId}`, this.httpOptions);
  }
  /** POST: Create equipment model on server */
  createEquipmentModel(equipmentModel: EquipmentAssetModel): Observable<EquipmentAssetModel> {
    return this.http.post<EquipmentAssetModel>(this.apiEquipmentAssetModelssUrl, equipmentModel, this.httpOptions);
  }
  /** PUT: Update equipment model on server */
  updateEquipmentModel(equipmentModel: EquipmentAssetModel, equipmentModelId: number): Observable<EquipmentAssetModel> {
    const updateUrl = `${this.apiEquipmentAssetModelssUrl}/${equipmentModelId}`;
    return this.http.put<EquipmentAssetModel>(updateUrl, equipmentModel, this.httpOptions);
  }
  /** DELETE: Delete equipment model from server */
  deleteEquipmentModel(equipmentModelId: number): Observable<EquipmentAssetModel> {
    const deleteUrl = `${this.apiEquipmentAssetModelssUrl}/${equipmentModelId}`;
    return this.http.delete<EquipmentAssetModel>(deleteUrl, this.httpOptions);
  }
  /**GET: Retrieve all equipment suppliers from server */
  getEquipmentSuppliers(): Observable<EquipmentSupplier[]> {
    return this.http.get<EquipmentSupplier[]>(this.apiEquipmentAssetSuppliersUrl, this.httpOptions);
  }
  /**GET: Retrieve equipment supplier by id from server */
  getEquipmentSupplier(equipmentSupplierId: number): Observable<EquipmentSupplier> {
    return this.http.get<EquipmentSupplier>(`${this.apiEquipmentAssetSuppliersUrl}/${equipmentSupplierId}`, this.httpOptions);
  }
  /**POST: Create equipment supplier on server */
  createEquipmentSupplier(equipmentSupplier: EquipmentSupplier): Observable<EquipmentSupplier> {
    return this.http.post<EquipmentSupplier>(this.apiEquipmentAssetSuppliersUrl, equipmentSupplier , this.httpOptions);
  }
  /**PUT: Update equipment supplier on server */
  updateEquipmentSupplier(equipmentSupplier: EquipmentSupplier, equipmentSupplierId: number): Observable<EquipmentSupplier> {
    const updateUrl = `${this.apiEquipmentAssetSuppliersUrl}/${equipmentSupplierId}`;
    return this.http.put<EquipmentSupplier>(updateUrl, equipmentSupplier, this.httpOptions);
  }
  /**DELETE: Delete equipment supplier from server */
  deleteEquipmentSupplier(equipmentSupplierId: number): Observable<EquipmentSupplier>{
    const deleteUrl = `${this.apiEquipmentAssetSuppliersUrl}/${equipmentSupplierId}`;
    return this.http.delete<EquipmentSupplier>(deleteUrl, this.httpOptions);
  }
  /**GET: Retrieve all equipment locations from server */
  getEquipmentLocations(): Observable<EquipmentLocation[]> {
    return this.http.get<EquipmentLocation[]>(this.apiEquipmentAssetLocationsUrl, this.httpOptions);
  }
  /**GET: Retrieve equipment location by id from server */
  getEquipmentLocation(equipmentLocationId: number): Observable<EquipmentLocation>{
    return this.http.get<EquipmentLocation>(`${this.apiEquipmentAssetLocationsUrl}/${equipmentLocationId}`, this.httpOptions);
  }
  /**POST: Create equipment location on server */
  createEquipmentLocation(equipmentLocation: EquipmentLocation): Observable<EquipmentLocation> {
    return this.http.post<EquipmentLocation>(this.apiEquipmentAssetLocationsUrl, equipmentLocation, this.httpOptions);
  }
  /**PUT: Update equipment location on server */
  updateEquipmentLocation(equipmentLocation: EquipmentLocation, equipmentLocationId: number): Observable<EquipmentLocation>{
    const updateUrl = `${this.apiEquipmentAssetLocationsUrl}/${equipmentLocationId}`;
    return this.http.put<EquipmentLocation>(updateUrl, equipmentLocation, this.httpOptions);
  }
  /**DELETE: Delete equipment location from server */
  deleteEquipmentLocation(equipmentLocationId: number): Observable<EquipmentLocation> {
    const deleteUrl = `${this.apiEquipmentAssetLocationsUrl}/${equipmentLocationId}`;
    return this.http.delete<EquipmentLocation>(deleteUrl, this.httpOptions);
  }
  /**GET: Retrieve all equipment companies from server */
  getEquipmentCompanies(): Observable<EquipmentCompany[]> {
    return this.http.get<EquipmentCompany[]>(this.apiEquipmentAssetCompaniesUrl, this.httpOptions);
  }
  /**GET: Retrieve equipment company by id from server */
  getEquipmentCompany(equipmentCompanyId: number): Observable<EquipmentCompany> {
    return this.http.get<EquipmentCompany>(`${this.apiEquipmentAssetCompaniesUrl}/${equipmentCompanyId}`, this.httpOptions);
  }
  /**POST: Create equipment company on server */
  createEquipmentCompany(equipmentCompany: EquipmentCompany): Observable<EquipmentCompany> {
    return this.http.post<EquipmentCompany>(this.apiEquipmentAssetCompaniesUrl, equipmentCompany, this.httpOptions);
  }
  /**PUT: Update equipment company on server */
  updateEquipmentCompany(equipmentCompany: EquipmentCompany, equipmentCompanyId: number): Observable<EquipmentCompany>{
    const updateUrl = `${this.apiEquipmentAssetCompaniesUrl}/${equipmentCompanyId}`;
    return this.http.put<EquipmentCompany>(updateUrl, equipmentCompany, this.httpOptions);
  }
  /**DELETE: Delete equipment company from server */
  deleteEquipmentCompany( equipmentCompanyId: number ): Observable<EquipmentCompany> {
    const deleteUrl = `${this.apiEquipmentAssetCompaniesUrl}/${equipmentCompanyId}`;
    return this.http.delete<EquipmentCompany>(deleteUrl, this.httpOptions);
  }
  /**GET: Retrieve all equipment model categories from server */
  getEquipmentModelCategories(): Observable<EquipmentModelCategory[]> {
    return this.http.get<EquipmentModelCategory[]>(this.apiEquipmentAssetModelCategories, this.httpOptions);
  }
  /**GET: Retrieve equipment model category by id from server */
  getEquipmentModelCategory(equipmentModelCategoryId: number): Observable<EquipmentModelCategory> {
    return this.http.get<EquipmentModelCategory>(`${this.apiEquipmentAssetModelCategories}/${equipmentModelCategoryId}`, this.httpOptions);
  }
  /**POST: Create equipment model category on server */
  createEquipmentModelCategory(equipmentModelCategory: EquipmentModelCategory): Observable<EquipmentModelCategory> {
    return this.http.post<EquipmentModelCategory>(this.apiEquipmentAssetModelCategories, equipmentModelCategory, this.httpOptions);
  }
  /**PUT: Update equipment model category on server */
  updateEquipmentModelCategory(equipmentModelCategory: any, equipmentModelCategoryId: number): Observable<EquipmentModelCategory>{
    const updateUrl = `${this.apiEquipmentAssetModelCategories}/{equipmentModelCategoryId}`;
    return this.http.put<EquipmentModelCategory>(updateUrl, equipmentModelCategory, this.httpOptions);
  }
  /**DELETE: Delete equipment model category from server */
  deleteEquipmentModelCategory(equipmentModelCategoryId: number): Observable<EquipmentModelCategory> {
    const deleteUrl = `${this.apiEquipmentAssetModelCategories}/{equipmentModelCategoryId}`;
    return this.http.delete<EquipmentModelCategory>(deleteUrl, this.httpOptions);
  }
}
