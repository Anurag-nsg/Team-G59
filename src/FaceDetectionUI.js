import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/navbar";
import { Button } from 'react-bootstrap';

const FaceDetectionUI = () => {
  const [Camera,setCamera]=useState(true);
  const [vflip,setvflip]=useState(false);
  const HandleCamera = () => {
    const newCameraState = !Camera;
    if (newCameraState) {
        setCamera(true);
        fetch('http://172.168.1.114/control?var=face_recognize&val=0')
            .then(response => {
                console.log('URL Triggered Successfully');
            })
            .catch(error => {
                console.error('Error triggering URL:', error);
            });
    } else {
        setCamera(false);
        fetch('http://172.168.1.114/control?var=face_recognize&val=1')
            .then(response => {
                console.log('URL Triggered Successfully');
            })
            .catch(error => {
                console.error('Error triggering URL:', error);
            });
    }
}

const HandleFLIP = () => {
  const newCameraState = !vflip;
  if (newCameraState) {
      setvflip(true);
      fetch('http://172.168.1.114/control?var=vflip&val=1')
          .then(response => {
              console.log('URL Triggered Successfully');
          })
          .catch(error => {
              console.error('Error triggering URL:', error);
          });
  } else {
     setvflip(false);
      fetch('http://172.168.1.114/control?var=vflip&val=0')
          .then(response => {
              console.log('URL Triggered Successfully');
          })
          .catch(error => {
              console.error('Error triggering URL:', error);
          });
  }
}

  return (
    <>
      <Navbar />
      <div style={{
        width: '50%', height: '500px', minWidth: '300px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: 'auto', marginTop:'80px',marginBottom:'30px'
      }}>
        <img id="stream" src="http://172.168.1.114:81/stream" crossorigin="" style={{objectFit:'cover',width:'100%', height: '100%'}}></img>
      
      </div>

      <Button style={{width:'100px',height: '40px', borderRadius: '10px', marginRight: '5px'}} onClick={HandleCamera} >{Camera===true?"Trun ON":"Turn OFF"}</Button>
      <Button style={{width:'100px',height: '40px', borderRadius: '10px', marginRight: '5px'}} onClick={HandleFLIP} >{"FLIP"}</Button>
    </>
  );
};

export default FaceDetectionUI;
