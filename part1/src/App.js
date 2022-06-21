
const Hello = (props) =>{
  return(
    <div>
      <p>
        Hello World {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () =>{
  const now = new Date()
  const a = 10
  const b = 20
  const age = 34  

  return(
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a+b}
      </p>
      <Hello name = "Rich" age = {21+10}/>
      <Hello name = "Emma" age = {1}/>
      <Hello name = "Wendy" age = {age}/>
    </div>

  )
}


export default App;
