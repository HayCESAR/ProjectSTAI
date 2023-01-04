import { FileUpload } from '../components/files/FileUpload';
import { FilesTable } from '../components/files/FilesTable';
import React, { useEffect, useState } from "react";

export const Datasets = () => {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/dataset").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
        console.log(data)
      }
    )
  }, [])
  
  return (
    <>
      <FileUpload />
      <></>
      <FilesTable files={backendData}/>
    </>
  );
}