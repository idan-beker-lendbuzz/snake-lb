import React from 'react'
import ReactDOM from 'react-dom'
import SnakeGame from '../src/SnakeGame.jsx'
import './index.css'
import Logo from './components/Logo.jsx'
import { decorationBG } from './components/BoardDecoration.js'
const Score = ({ score }) => <div className='Score'>{score}</div>
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
      <div
        className='BoardDecoration'
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundImage: decorationBG,
        }}>
        <Score score={score} />
      </div>
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
    <Logo className='Logo' />
    <Game />
  </React.StrictMode>,
  document.getElementById('root')
)
