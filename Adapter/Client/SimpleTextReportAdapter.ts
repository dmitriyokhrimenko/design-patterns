import {ReportInterface} from "../Interfaces/ReportInterface";
import {JSONReportGenerator} from "../Core/NewLib/JSONReportGenerator";
import {XMLReportGenerator} from "../Core/ExistingCode/XMLReportGenerator";
import {SimpleTextReportGenerator} from "../Core/NewLib/SimpleTextReportGenerator";

export class SimpleTextReportAdapter implements ReportInterface{
    protected simpleTextReporter;

    constructor(SimpleTextReporter: SimpleTextReportGenerator) {
        this.simpleTextReporter = SimpleTextReporter;
    }
    public generateReport(): string {
        return this.simpleTextReporter.generateSimpleTextReport();
    }
}