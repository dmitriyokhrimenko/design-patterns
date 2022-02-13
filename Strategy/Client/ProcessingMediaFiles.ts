import {MultimediaProcessingStrategy} from "../Interfaces/MultimediaProcessingStrategy";

export class ProcessingMediaFiles {

  private strategy;


  constructor(strategy: MultimediaProcessingStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: MultimediaProcessingStrategy) {
    this.strategy = strategy;
  }

  public async processingFile() {
    return new Promise((resolve, reject) => {
      resolve([
        this.strategy.saveToTemp(),
        this.strategy.processing(),
        this.strategy.saveToStorage(),
        this.strategy.clearTemp(),
      ]);
    })
  }
}