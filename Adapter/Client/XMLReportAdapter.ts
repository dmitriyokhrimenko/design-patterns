import {ReportInterface} from "../Interfaces/ReportInterface";
import {JSONReportGenerator} from "../Core/NewLib/JSONReportGenerator";
import {XMLReportGenerator} from "../Core/ExistingCode/XMLReportGenerator";

export class XMLReportAdapter implements ReportInterface{
    protected xmlReporter;

    constructor(XMLReporter: XMLReportGenerator) {
        this.xmlReporter = XMLReporter;
    }
    public generateReport(): string {
        return this.xmlReporter.generateXMLReport();
    }
}