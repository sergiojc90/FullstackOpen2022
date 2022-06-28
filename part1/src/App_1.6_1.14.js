import { useState } from 'react'


const Button = ({handleClick,text}) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({text, value}) => <p>{text} {value}</p>

const Statistics = ({good, neutral, bad, count, score}) =>{
  if (count === 0) return <h2>No feedback given</h2>

  return(
    <div>
      <StatisticLine text="Good" value = {good}/>
      <StatisticLine text="Neutral" value = {neutral}/>
      <StatisticLine text="Bad" value = {bad}/>
      <StatisticLine text="All" value = {count}/>
      <StatisticLine text="Average" value = {score/count}/>
      <StatisticLine text="Positive" value = {good/count*100} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [count, setCount] = useState(0)
  const [score, setScore] = useState(0)

  const handleGood = () => {
    setCount(count + 1)
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
      <Statistics good ={good} neutral ={neutral} bad ={bad} count ={count} score ={score} />

    </div>
  )
}

export default App
