import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44370/api/rentals/getrentaldetails";

  constructor(private httpclient:HttpClient) { }

  getRentals():Observable<listResponseModel<Rental>>{
    return this.httpclient.get<listResponseModel<Rental>>(this.apiUrl);
  }
}
