import React, { useState } from "react";
import * as XLSX from "xlsx";
import "./App.css";
import Component from "./Component";

function MultipleFiles() {
  const [value, setValue] = useState([]);
  const [option,setOption]=useState("react")
  
  function handleXl(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const files= workbook.SheetNames;
      const sheetsdata=[]
      for(var i=0;i<files.length;i++){
        var sheetName = workbook.SheetNames[i];
        var sheet = workbook.Sheets[sheetName];
        console.log(sheet);
        var sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        sheetsdata.push(sheetData)
       
      }
      setValue(sheetsdata);
    };
    reader.readAsArrayBuffer(file);
  }



  return (
    <div className="App">
      <input type="file" accept=".xlsx,.xls" onChange={handleXl} />
      <button type="button" onClick={()=>setOption("react")} >React</button>
      <button type="button" onClick={()=>setOption("node")}>Nodejs</button>
      {option === 'react' ? (
        <Component value={value[0]} />
      ) : option === 'node' ? (
        <Component value={value[1]} />
      ) : (
        <p>There is no such file</p>
      )}
    </div>
  );
}

export default MultipleFiles;
