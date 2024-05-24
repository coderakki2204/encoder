import React from 'react';
import { Button } from '@material-ui/core';
import { loadImage } from '../steganography';
import { useToasts } from 'react-toast-notifications';
export default function UploadButton() {
  const { addToast } = useToasts();
  const handlechange=(event)=>{
     loadImage(event);
     console.log("hi");
     addToast('Image uploaded successfully!', { appearance: 'success' ,autoDismiss: true, autoDismissTimeout: 3000});
  }
  return (
    <label htmlFor="upload-photo">
      <input
        style={{ display: 'none' }}
        id="upload-photo"
        name="upload-photo"
        type="file"
        onChange={handlechange}
      />
      <div>
        <Button style={{margin: '1rem'}} variant="contained" component="span">
          Upload Image
        </Button>
      </div>
    </label>
  );
}