import {CarInterface} from "../../Abstraction/Car/CarInterface";

export class MinibusCar implements CarInterface {
  public type = 'minibuscar';

  public getTotalSeatPlaces(): number {
    return 10;
  }
}