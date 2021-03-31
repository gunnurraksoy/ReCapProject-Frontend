import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand/brand';
import { Car } from '../models/car/car';
import { CarDto } from '../models/car/carDto';
import { listResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl='https://localhost:44370/api/';

  constructor(private httpClient:HttpClient) { }
  getCars():Observable<listResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetails"
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }
  getCarsByBrand(brandId:number):Observable<listResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetailsbybrandid?brandId="+ brandId
    return this.httpClient.get<listResponseModel<Car>>(newPath);
  }
  getCarsByColor(colorId:number):Observable<listResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getcardetailsbycolorid?colorId="+ colorId
    return this.httpClient.get<listResponseModel<Car>>(newPath);
 
}
getCarDtoList():Observable<listResponseModel<CarDto>> {
  let newPath=this.apiUrl+'cars/getcardtocarId?carId'
  return this.httpClient.get<listResponseModel<CarDto>>(newPath);
}

getCarDtoCarId(carId:number):Observable<listResponseModel<CarDto>>{
  let newPath=this.apiUrl +'cars/getcardtocarId?carId='+carId
return this.httpClient.get<listResponseModel<CarDto>>(newPath);
 }
}
