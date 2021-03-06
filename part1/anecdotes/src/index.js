import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({handleClick, text}) => {
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(anecdotes.map(() => 0))
  const mostVotes = votes.indexOf(Math.max(...votes))

  const voteForAnecdote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const displayRandomAnecdote = () => {
    const randInt = Math.floor(Math.random() * anecdotes.length)
    setSelected(randInt)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]} {votes[selected]} votes
      <Button handleClick={displayRandomAnecdote} text="next anecdote" />
      <Button handleClick={voteForAnecdote} text="vote" />
      <br/>
      <h1>Anecdote with most votes</h1>
      "{props.anecdotes[mostVotes]}" has {votes[mostVotes]} {(votes[mostVotes] === 1) ? 'vote' : 'votes'}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
