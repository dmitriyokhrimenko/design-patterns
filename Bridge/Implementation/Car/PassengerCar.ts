import {CarInterface} from "../../Abstraction/Car/CarInterface";

export class PassengerCar implements CarInterface {
  public type = 'passengercar';

  public getTotalSeatPlaces(): number {
    return 4;
  }
}