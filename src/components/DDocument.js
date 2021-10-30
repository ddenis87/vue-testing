class DDocument {
  constructor() {
    this.ddocument = [];
    for (let i = 0; i < 4; i += 1) {
      this.ddocument[i] = [];
      for (let j = 0; j < 5; j += 1) {
        this.ddocument[i][j] = i + j;
      }
    }
  }

  getCellValue(row, column) { return this.ddocument[row][column]; }

  getColumnCount() { return this.ddocument[0].length - 1 || 0; }

  getDocument() { return this.ddocument; }

  getRowCount() { return this.ddocument.length - 1 || 0; }

  setCellValue(row, column, value) {
    this.ddocument[row][column] = value;
    this.ddocument = [...this.ddocument];
  }
}

export default DDocument;
