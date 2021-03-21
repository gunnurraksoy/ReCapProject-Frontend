import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../models/customer/customerResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl='https://localhost:44370/api/customers/getall';
  constructor(private httpclient:HttpClient) { }
  getCustomers():Observable<CustomerResponseModel>{
    return this.httpclient.get<CustomerResponseModel>(this.apiUrl);
}}
