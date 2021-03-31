import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/car/carImage';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  
  apiUrl='https://localhost:44370/api/';

  constructor(private httpClient: HttpClient) { }



  getCarImages():Observable<listResponseModel<CarImage>> {
    return this.httpClient
      .get<listResponseModel<CarImage>>(this.apiUrl + 'carimages/getall');
  }

  getCarImageByCarId(carId:number):Observable<listResponseModel<CarImage>>{
    return this.httpClient
    .get<listResponseModel<CarImage>>(this.apiUrl + 'carimages/getimagesbycarid?carId=' + carId)
  }
}
