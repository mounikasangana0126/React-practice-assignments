import React, { useState } from "react";
import * as XLSX from "xlsx";
import "./App.css";

function App() {
  const [value, setValue] = useState(null);
  function handleXl(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      setValue(sheetData);
      console.log(sheetData[2][1]);
    };
    console.log((value));
    reader.readAsArrayBuffer(file);
  }
  return (
    <div className="App">
      <input type="file" accept=".xlsx,.xls" onChange={handleXl} />
      {value && (
        <table>
          <thead>
            <tr>
              {value[0].map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {value.slice(1).map((row,rowIndex) => (
              <tr key={rowIndex}>
              {row.map((data, index) => (
                <td key={index}>{data !==null ? data : ''}</td>
              ))}
            </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
