import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car/car';
import { CarDto } from 'src/app/models/car/carDto';
import { CarImage } from 'src/app/models/car/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carImages: CarImage[]=[];
  carDtos: CarDto[];
  dataLoaded = false;
  currentImage:CarImage;
  

  constructor(private carService: CarService,
    private carImageService:CarImageService,
    private activatedRoute: ActivatedRoute) { }

   ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarDetailsByCarId(params["carId"]);
        this.getCarImagesByCarId(params["carId"]);
      } 
    })
  }

  getCarDetailsByCarId(carId:number){
    this.carService.getCarDtoCarId(carId).subscribe(response=>{
      this.carDtos= response.data
      this.dataLoaded = true;
    })
  }
  
  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImageByCarId(carId).subscribe(response=>{
      this.carImages = response.data
      this.dataLoaded = true;
    })
  }

  sliderItemActive(index: number){
    if(index === 0){
      return "carousel-item active";
    }
    else{
      return "carousel-item";
    }
  } 

}
