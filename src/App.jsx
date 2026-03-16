import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card-title">
        <Welcome name="Nguyễn Ngọc Quỳnh Như"/>
        <p>Lớp: 26.SP.IT3</p>
        <p>Sở thích: Ngủ</p>
      </div>
    </>
  )
}

export default App