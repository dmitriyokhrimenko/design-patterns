import {ReportInterface} from "../../Interfaces/ReportInterface";

export class JSONReportGenerator implements ReportInterface{
    public generateReport(): string {
        return `JSON report`;
    }
}