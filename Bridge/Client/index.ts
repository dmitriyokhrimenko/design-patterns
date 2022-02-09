import {MinibusCar} from "../Implementation/Car/MinibusCar";
import {RegularRide} from "../Implementation/Ride/RegularRide";
import {PassengerCar} from "../Implementation/Car/PassengerCar";
import {CarpoolRide} from "../Implementation/Ride/CarpoolRide";

const miniBus = new MinibusCar();
const passengerCar = new PassengerCar();

const regularRide = new RegularRide(miniBus);
const carpoolRide = new CarpoolRide(passengerCar);


console.log(regularRide.getRideInfo())
console.log(carpoolRide.getRideInfo())