import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = ({text}) => {
  return (
    <div>
      <h2>{text}</h2>
    </div>
  )
}

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistic = ({text, statistic}) => {
  return (
    <div>
      {text} {statistic}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text="give feedback" />
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Header text="statistics" />
      <Statistic text="good" statistic={good} />
      <Statistic text="neutral" statistic={neutral} />
      <Statistic text="bad" statistic={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
