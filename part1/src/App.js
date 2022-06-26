import { useState } from "react"

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState(0)

  const handleLeftClick = () =>{
    setAll(allClicks.concat("L"))
    setLeft(left + 1)
  }

  const handleRightClick = () =>{
    setAll(allClicks.concat("R"))
    setRight(right + 1)
  }

  return(
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}> left </button>
      <button onClick={handleRightClick}> right </button>
      {clicks.right}
    </div>
  )
}

export default App
