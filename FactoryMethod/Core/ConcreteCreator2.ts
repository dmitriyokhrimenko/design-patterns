import {Creator} from "./Creator";
import {Product} from "../Interfaces/ProductInterface";
import {ConcreteProduct2} from "./ConcreteProduct2";

export class ConcreteCreator2 extends Creator{
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}