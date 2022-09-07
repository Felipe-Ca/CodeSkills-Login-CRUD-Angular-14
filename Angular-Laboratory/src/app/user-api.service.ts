import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  readonly LaboratoryApiUrl = "https://localhost:7052/api";

  constructor(private http: HttpClient) { }

  //Estos son los metodos que estaresmos utilizando para el CRUD (users).
  getUserList(): Observable<any[]> {
    return this.http.get<any>(this.LaboratoryApiUrl + '/users')

  }

  addUser(data: any) {
    return this.http.post(this.LaboratoryApiUrl + '/users', data);
  }
  updateUser(id: number | string, data: any) {
    return this.http.put(this.LaboratoryApiUrl + `/users/${id}`, data);
  }

  deleteUser(id: number | string) {
    return this.http.delete(this.LaboratoryApiUrl + `/users/${id}`);
  }

  // DocumentTypes

  getDocumentTypesList(): Observable<any[]> {
    return this.http.get<any>(this.LaboratoryApiUrl + '/documentTypes')

  }

  addDocumentType(data: any) {
    return this.http.post(this.LaboratoryApiUrl + '/documentTypes', data);
  }
  updateDocumentType(id: number | string, data: any) {
    return this.http.put(this.LaboratoryApiUrl + `/documentTypes/${id}`, data);
  }

  deleteDocumentType(id: number | string) {
    return this.http.delete(this.LaboratoryApiUrl + `/documentTypes/${id}`);
  }


}
