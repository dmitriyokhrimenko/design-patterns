import {RideInterface} from "../../Abstraction/Ride/RideInterface";
import {CarInterface} from "../../Abstraction/Car/CarInterface";

export class RegularRide implements RideInterface {

  public car;
  public rideType;

  constructor(car: CarInterface) {
    this.car = car;
    this.rideType = 'regular';
  }

  public getRideStartDate(): string {
    return `2022-02-15`;
  }

  public getRideStartTime(): string {
    return `15:00`;
  }

  public getRideEndTime(): string {
    return `17:00`;
  }

  private getCarType(): string {
    return this.car.type;
  }

  public getRideInfo() {
    return `This ${this.rideType} ride will implement by ${this.getCarType()}`;
  }
}