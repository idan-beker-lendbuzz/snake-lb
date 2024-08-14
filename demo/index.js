import React from 'react'
import ReactDOM from 'react-dom'
import SnakeGame from '../src/SnakeGame.jsx'
import './index.css'
import Logo from './components/Logo.jsx'
import GamePanel from './components/GamePanel.jsx'

const Game = () => {
  const [score, setScore] = React.useState(0)
  return (
    <>
      <div className='TurqoiseBorder'>
        <div className='GreenBorder'>
          <SnakeGame
            onChangeScore={(score) => {
              setScore(score)
            }}
          />
        </div>
      </div>
      <GamePanel score={score} />
    </>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <link rel='preconnect' href='https://fonts.googleapis.com' />
    <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
    <link
      href='https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap'
      rel='stylesheet'
    />
    <video>
      <source src='assets/Promo.mp4' type='video/mp4' />
    </video>
    <Logo className='Logo' />
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
)
