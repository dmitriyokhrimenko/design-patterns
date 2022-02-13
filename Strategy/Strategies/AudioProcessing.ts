import {MultimediaProcessingStrategy} from "../Interfaces/MultimediaProcessingStrategy";

export class AudioProcessing implements MultimediaProcessingStrategy{

  private file;

  constructor(file: object) {
    this.file = file;
  }

  public saveToTemp(): string {
    return `Audio saved to temp dir`;
  }

  public processing(): string {
    return `Processing audio`;
  }

  public saveToStorage(): string {
    return `Processing audio`;
  }

  public clearTemp(): string {
    return `Audio deleted from `;
  }
}