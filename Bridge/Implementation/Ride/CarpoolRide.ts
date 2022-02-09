import {RideInterface} from "../../Abstraction/Ride/RideInterface";
import {CarInterface} from "../../Abstraction/Car/CarInterface";

export class CarpoolRide implements RideInterface {

  public car;
  public rideType;

  constructor(car: CarInterface) {
    this.car = car;
    this.rideType = 'carpool';
  }


  public getRideStartDate(): string {
    return `2022-02-19`;
  }

  public getRideStartTime(): string {
    return `09:00`;
  }

  public getRideEndTime(): string {
    return `11:20`;
  }

  private getCarType(): string {
    return this.car.type;
  }

  public getRideInfo() {
    return `This ${this.rideType} ride will implement by ${this.getCarType()}`;
  }
}