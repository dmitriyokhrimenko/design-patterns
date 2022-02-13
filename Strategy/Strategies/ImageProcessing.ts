import {MultimediaProcessingStrategy} from "../Interfaces/MultimediaProcessingStrategy";

export class ImageProcessing implements MultimediaProcessingStrategy{

  private file;

  constructor(file: object) {
    this.file = file;
    console.log(this.file)
  }

  public saveToTemp(): string {
    return `Image saved to temp dir`;
  }

  public processing(): string {
    return `Processing image`;
  }

  public saveToStorage(): string {
    return `Processing image`;
  }

  public clearTemp(): string {
    return `Image deleted from `;
  }
}