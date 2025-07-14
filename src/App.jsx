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


}