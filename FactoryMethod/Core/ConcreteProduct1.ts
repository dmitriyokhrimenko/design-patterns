import { Product } from "../Interfaces/ProductInterface";

export class ConcreteProduct1 implements Product{
  public operation(): string {
    return `Result of the ConcreteProduct1`;
  }
}