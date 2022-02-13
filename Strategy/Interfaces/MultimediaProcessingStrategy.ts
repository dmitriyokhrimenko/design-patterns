export interface MultimediaProcessingStrategy {
  saveToTemp(): string
  processing(): string
  saveToStorage(): string
  clearTemp(): string
}