import {ProcessingMediaFiles} from "./ProcessingMediaFiles";
import {ImageProcessing} from "../Strategies/ImageProcessing";


const imageFile = {
  type: 'img',
  title: 'some image title'
};

const imageProcessingStrategy = new ImageProcessing(imageFile);
const processingMediaContext = new ProcessingMediaFiles(imageProcessingStrategy);

processingMediaContext.processingFile().then(res => console.log(res))
processingMediaContext.processingFile();