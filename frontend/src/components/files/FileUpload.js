import {
    Flex,
    Button,
  } from '@chakra-ui/react'
  import React, { useState } from "react";
  
export const FileUpload = ()  => {
    const [selectedFile, setSelectedFile] = useState();

    const changeHandler = (event) => {
        setSelectedFile(event.target.file);
    };

    const handleUpload = (e) => {
        e.preventDefault();

        const formData = new FormData();
        
        formData.append('file', document.getElementById('file').files[0]);
        
        fetch('/dataset/upload',
            {
                method: 'POST',
                body: formData,
            }
        ).then((response) => 
            response.json()
        ).then((result) => {
            console.log('Success:', {result});
        }).catch((error) => {
            console.error('Error:', {error});
        });
    };

    return(
        <>
            <input
            type="file"
            id="file"
            name="file"
            value={selectedFile}
            accept={".csv"}
            onChange={changeHandler}
            />
            <Button onClick={handleUpload}>
            Upload
            </Button>
        </>
    );
}