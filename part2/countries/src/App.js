import {useState} from 'react'
import {useEffect} from 'react'
import axios from 'axios'

function App() {
  
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState("")

  useEffect(()=>{
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response =>{
        setCountries(response.data)
      })
  },[])

  const handleCountryChange = (event) =>{
    setCountry(event.target.value)
  }

  const showCountries = countries.filter(item => item.name.common.toUpperCase().startsWith(country.toUpperCase()))

  const filter = () =>{
    if(showCountries.length>10) return "Too many matches, specify another filter"
    if(showCountries.length === 1) return (
    <div>
      <h1>{showCountries[0].name.common}</h1>
      <p>Capital:{showCountries[0].capital}</p>
      <h3>Languages</h3>
      <ul>
        {Object.values(showCountries[0].languages).map(item => <li key = {item}>{item}</li>)}
      </ul>
      <img src={showCountries[0].flags.png} alt = "Country flag">

      </img>
    </div>
    )

    return showCountries.map(item=><p key = {item.flag} >{item.name.common}</p>)
  }

  return (
    <div>
      <form>
        Find countries<input value = {country} onChange={handleCountryChange}/>
      </form>
        {filter()}
    </div>
  );
}

export default App;
