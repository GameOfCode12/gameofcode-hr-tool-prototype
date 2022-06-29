import { utils, WorkSheet, WorkBook, writeFile } from 'xlsx';

export default (data: any[], name: string): void => {
  const workSheet: WorkSheet = utils.json_to_sheet(data);

  // Form the cell width for each column
  workSheet['!cols'] = [];
  data.forEach((_) => workSheet['!cols'].push({ wch: 32 }));

  // Form the Excel workbook
  const workBook: WorkBook = utils.book_new();
  utils.book_append_sheet(workBook, workSheet, name);

  // Write and download the file
  writeFile(workBook, `${name}.xlsx`);
};
