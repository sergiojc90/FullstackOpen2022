import { useState } from 'react'


const Button = ({handleClick,text}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [count, setCount] = useState(0)
  const [positive, setPositive] = useState(0)
  const [score, setScore] = useState(0)

  const handleGood = () => {
    setCount(count + 1)
    setPositive(positive + 1)
    setScore(score + +1)
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setCount(count + 1)
    setNeutral(neutral + 1)
  }
  
  const handleBad = () => {
    setCount(count + 1)
    setScore(score - 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGood} text = 'Good'/>
      <Button handleClick={handleNeutral} text = 'Neutral'/>
      <Button handleClick={handleBad} text = 'Bad'/>

      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {count}</p>
      <p>Average {score/count}</p>
      <p>Positive {positive/count*100}%</p>
    </div>
  )
}

export default App
