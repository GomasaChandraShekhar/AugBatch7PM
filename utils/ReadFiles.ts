import fs from 'fs';
import { parse } from 'csv-parse/sync';
import * as XLSX from 'xlsx';

export default class ReadFiles {

    readJsonFile(filePath: string): any {
        const fileData = fs.readFileSync(filePath, 'utf-8');
        const jsonData = JSON.parse(fileData);
        return jsonData;
    }

    readCsvFile(filePath: string): any {
        return parse(fs.readFileSync(filePath, 'utf-8'),
            { columns: true, skip_empty_lines: true }
        );
    }

    readExcelFile(filePath: string): any {
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        return XLSX.utils.sheet_to_json(worksheet);
    }


}


