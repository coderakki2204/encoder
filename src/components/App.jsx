import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import UploadButton from './UploadButton';
import { encode, decode } from '../steganography';
import { useToasts } from 'react-toast-notifications';
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import "./App.css";
export default function App() {
  const { addToast } = useToasts();
  const [option, setOption] = useState('home');

  function handleClick(event) {

    const { name } = event.currentTarget;
    if (name === 'home') {
      setOption('home');
      document.getElementById('encoded-image').style.display = 'none';
    } else if (name === 'encode') {
      setOption('encode');
      addToast('Upload your image', { appearance: 'info', autoDismiss: true, autoDismissTimeout: 3000 });
    } else if (name === 'decode') {
      setOption('decode');
      addToast('Upload your image', { appearance: 'info', autoDismiss: true, autoDismissTimeout: 3000 });
    }
  }
  const imageuploadnotification = (fun, notiication) => {
    let msg = fun();
    addToast(`Image ${notiication} successfully`, { appearance: 'success', autoDismiss: true, autoDismissTimeout: 3000 });
    if (notiication === "encoded") {
      addToast(`Save below image for further use`, { appearance: 'info', autoDismiss: true, autoDismissTimeout: 3000 });
    }
    if (notiication === "decoded") {
      addToast(`The encoded message is : ${msg}`, { appearance: 'info', autoDismiss: true, autoDismissTimeout: 3000 });
    }
  }
  return (
    <div className='content'>
      <h1>IMAGE<span id="word"> Cryptor</span></h1>
      <div className='subcontent'>
        <div className='side-content'>
          <h2>Wellcome to Image Cryptor?</h2>
          <img src={image1} alt="stegnography"></img>
          <p>Steganography that is what this app is all
            about.
            Conceal your message in such a way that
            no one will ever think about it! Or reveal file
            secrets 👀
          </p>
        </div>
        <div className='main-content'>{option === 'home' && <Button style={{ margin: '1rem' }} name='encode' onClick={handleClick} variant="contained">Encode</Button>}
          {option === 'home' && <Button style={{ margin: '1rem' }} name='decode' onClick={handleClick} variant="contained">Decode</Button>}
          {option === 'encode' && <TextField variant="outlined" multiline type="text" id="secret" name="secret" placeholder="Enter secret message" />}
          {option !== 'home' && <UploadButton />}
          {option === 'encode' && <Button style={{ margin: '1rem' }} onClick={() => imageuploadnotification(encode, "encoded")} variant="contained">Encode</Button>}
          {option === 'decode' && <Button style={{ margin: '1rem' }} onClick={() => imageuploadnotification(decode, "decoded")} variant="contained">Decode</Button>}
          {option !== 'home' && <Button style={{ margin: '1rem' }} name='home' onClick={handleClick} variant="contained">Return</Button>}
          <img id="encoded-image" alt='encoded output'></img>
          <canvas id="canvas"></canvas></div>
        <div className='side-content'>
          <h2>What steganography actually is?</h2>
          <img src={image2} alt="stegnography"></img>
          <p>Steganography
            the study of
            communication in such a way that the
            presence of a message cannot be
            detected. Contrary to cryptography (where
            the presence of a message is not denied,
            but its content is secret), steganography
            tries to hide the fact of conducting
            communication.
          </p>
        </div>
      </div>
    </div>
  );
};
