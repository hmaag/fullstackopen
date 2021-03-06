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

const Statistic = ({stat, value}) => {
  return (
    <div>
      <p>{stat} {value}</p>
    </div>
  )
}

const Statistics = ({counts}) => {
  const total = counts.reduce((sum, value) => sum + value, 0)
  if (total === 0) {
    return (
      <div>No feedback given</div>
    )
  }

  const average = total !== 0 ? (counts[0] - counts[2]) / total : 0
  const positive = total !== 0 ? (counts[0] / total) * 100 : 0
  console.log(total)
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td><Statistic stat="good" value={counts[0]} /></td>
          </tr>
          <tr>
            <td><Statistic stat="neutral" value={counts[1]} /></td>
          </tr>
          <tr>
            <td><Statistic stat="bad" value={counts[2]} /></td>
          </tr>
          <tr>
            <td><Statistic stat="all" value={total} /></td>
          </tr>
          <tr>
            <td><Statistic stat="average" value={average} /></td>
          </tr>
          <tr>
            <td><Statistic stat="positive" value={positive} /></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const counts = [good, neutral, bad]

  const handleGoodClick = () => {
    setGood(good + 1)
    counts.concat(good)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    counts.concat(neutral)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    counts.concat(bad)
  }

  return (
    <div>
      <Header text="give feedback" />
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <Header text="statistics" />
      <Statistics counts={counts} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
