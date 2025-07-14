import {useState, useEffect} from 'react'
import './App.css'

function App() {
  const [temporary, setTemporary] = useState('')
  const [word, setWord] = useState('')
  const [size, setSize] = useState(400)
  const [bgColor, setBgColor] = useState('fff')
  const [qrCode, setQrCode] = useState('')


  useEffect(() => {
    setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}
    !&size=${size}x${size}&bgcolor=${bgColor}`);
  }, [word,size, bgColor]);

  const handleClick = () => {
    setWord(temporary)
  }

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div className="input-box">
        <div className="gen">
          <input type='text' onChange={
            (e) => setTemporary(e.target.value)}
            placeholder="Enter text to encode"/>

          <button className="btn"  onClick={handleClick}>
            Generate
          </button>
        </div>
        <div className="extra">
          <h5>Background Color:</h5>
          <input type="color" onChange={(e)=>
            setBgColor(e.target.value.substring(1))}/>

          <h5>Dimension:</h5>
          <input type="range" min="200" max="600" value={size}
                 onChange={(e)=> {
                   setSize(e.target.value)}
                 }/>
        </div>
      </div>

      <div className="output-box">
        <img src={qrCode} alt="QR Code"/>
        <a href={qrCode} download="QRCode">
          <button className="btn">Download</button>
        </a>
      </div>
    </div>
  )
}

export default App