import {CarInterface} from "../Car/CarInterface"

export interface RideInterface {
  car: CarInterface
  getRideStartTime(): string;
  getRideStartDate(): string;
  getRideEndTime(): string;
  getRideInfo(): string;
}