import {MultimediaProcessingStrategy} from "../Interfaces/MultimediaProcessingStrategy";

export class VideoProcessing implements MultimediaProcessingStrategy{

  private file;

  constructor(file: object) {
    this.file = file;
  }

  public saveToTemp(): string {
    return `Video saved to temp dir`;
  }

  public processing(): string {
    return `Processing video`;
  }

  public saveToStorage(): string {
    return `Processing video`;
  }

  public clearTemp(): string {
    return `Video deleted from `;
  }
}