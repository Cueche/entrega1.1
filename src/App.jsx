import { useState } from 'react'
import './App.css'
import quotes from "./json/quotes.json"
import CardQuotes from './components/CardQuotes'
import colors from "./utils/colors"

function App() {

  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }

  let quoteRandom = getRandomElement(quotes)
  let colorsRandom = getRandomElement(colors)

  const [randomQuote, setRandomQuote] = useState(quoteRandom)
  const [randomColors, setrandomColors] = useState(colorsRandom)

  const objStyle ={
    backgroundColor: randomColors
  }

  const getRandomAll = () => {
    quoteRandom = getRandomElement(quotes)
    colorsRandom = getRandomElement(colors)

    setRandomQuote(quoteRandom)
    setrandomColors(colorsRandom)
  }



  return (
    <div className="App" style={objStyle}>
      <CardQuotes 
       randomQuote={randomQuote} 
       randomColors={randomColors}
       getRandomAll={getRandomAll} />
    </div>
  )
}

export default App
