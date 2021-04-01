import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ConvertToCsvService {
  // this function takes two parameters: the data and the filename which is data by default.
  // it is required that the headerlist be updated to include all of the fields that are going to exist in the data
  // you must update the headerlist if you add any other fields to the table
  downloadFile(data, filename='data') {
    let csvData = this.ConvertToCSV(data,
      ['Activity','start date', 'end date', 'Hours Worked', 'Organization', 'Contact Name', 'Contact Title',
        'Contact Info', 'Activity Summary', 'Skills Learned']);
    console.log(csvData)
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
      dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", filename + ".csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }
  // this function is called by the download file and is responsible for converting the data into a csv format
  ConvertToCSV(objArray, headerList) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = 'S.No,';

    for (let index in headerList) {
      row += headerList[index] + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array.length; i++) {
      let line = (i+1)+'';
      for (let index in headerList) {
        let head = headerList[index];

        line += ',' + array[i][head];
      }
      str += line + '\r\n';
    }
    return str;
  }
}
