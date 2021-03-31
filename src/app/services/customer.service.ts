import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer/customer';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl='https://localhost:44370/api/customers/getall';
  constructor(private httpclient:HttpClient) { }
  getCustomers():Observable<listResponseModel<Customer>>{
    return this.httpclient.get<listResponseModel<Customer>>(this.apiUrl);
}}
