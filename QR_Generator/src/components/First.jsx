import React from 'react'
import { use } from 'react'
import { useState } from 'react'


export const First = () => {
const [img,setImg]  = useState("")
const [loading, setLoading] = useState()
const [qrData,setQrData] = useState("")
const [qrSize, setQrSize] = useState("")

async function generateQR() {
  setLoading(true);
  try {
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
    setImg(url);
  } catch (error) {
    console.error("Error Coming:", error);
  } finally {
    setLoading(false);
  }
}
  function downloadQR(){
    fetch(img)
    .then((response)=>response.blob())
    .then((blob)=>{
      const link = document.createElement("a")
      link.href = URI.createObjectURL(blob)   
      link.download = "qrcode.png"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    })
  }
    return (
    <div className='app-container'>
        <h1>QR Code Generator</h1>
        {loading && <p>Please wait...</p>}
        {img && <img src={img} className='image'></img>}
      <div>
        <label htmlFor='dataInput' className='input-label'>Data for QR Code</label> 
        <input type='text' placeholder='Enter the URL' id='dataInput' value={qrData} onChange={(event)=>setQrData(event.target.value)} />
        <label htmlFor='sizeInput' className='input-label'>Image Size</label> 
        <input type='text' placeholder='Enter the Image Size' id='sizeInput' value={qrSize} onChange={(event)=>setQrSize(event.target.value)} />
        <div>
        <button className='generateBtn' disabled={loading} onClick={generateQR}>Generate QR Code</button>
        <button className='downloadBtn'onClick={()=>downloadQR()}>Download QR Code</button>
        </div>
       </div>
       <p>Designed By <span className='spiky'>Spiky</span></p>
    </div>
  )
}
