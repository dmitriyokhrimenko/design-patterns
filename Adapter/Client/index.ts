import {XMLReportGenerator} from "../Core/ExistingCode/XMLReportGenerator"
import {JSONReportGenerator} from "../Core/NewLib/JSONReportGenerator";
import {XMLReportAdapter} from "./XMLReportAdapter";
import {SimpleTextReportAdapter} from "./SimpleTextReportAdapter";
import {SimpleTextReportGenerator} from "../Core/NewLib/SimpleTextReportGenerator";

const reporter = new XMLReportGenerator();
console.log(reporter.generateXMLReport());

const jsonReporter = new JSONReportGenerator();
console.log(jsonReporter.generateReport());

const xmlReporter = new XMLReportAdapter(new XMLReportGenerator());
console.log(xmlReporter.generateReport());


const simpleTextReporter = new SimpleTextReportAdapter(new SimpleTextReportGenerator());
console.log(simpleTextReporter.generateReport());