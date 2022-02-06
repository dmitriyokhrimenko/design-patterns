import { Product } from "../Interfaces/ProductInterface";

export class ConcreteProduct2 implements Product{
  public operation(): string {
    return `Result of the ConcreteProduct2`;
  }
}