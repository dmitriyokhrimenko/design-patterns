import {CarInterface} from "../../Abstraction/Car/CarInterface";

export class BusCar implements CarInterface {
  public type = 'buscar';

  public getTotalSeatPlaces(): number {
    return 20;
  }
}