import React, { useState } from "react";
import * as XLSX from "xlsx";
import "./App.css";
import Component from "./Component";

function MultipleFiles() {
  const [value, setValue] = useState([]);
  const [option,setOption]=useState("")
  const [titles,setTitles]=useState([])
  
  function handleXl(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const files= workbook.SheetNames;
      const sheetsdata=[]
      const title=[]
      for(var i=0;i<files.length;i++){
        var sheetName = workbook.SheetNames[i];
        title.push(sheetName)
        var sheet = workbook.Sheets[sheetName];
        var sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        sheetsdata.push(sheetData)
      }
      setValue(sheetsdata);
      setTitles(title);
    };
    reader.readAsArrayBuffer(file);
  }



  return (
    <div className="App">
      <input type="file" accept=".xlsx,.xls" onChange={handleXl} />
      {titles.map((num,key)=>(
      <button type="button" key={key} onClick={()=>setOption(key)} >{num}</button>
      ))} 
      <Component value={value[option]}/>
    </div>
  );
}

export default MultipleFiles;
