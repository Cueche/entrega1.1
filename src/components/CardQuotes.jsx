import React from 'react'

const CardQuotes = ({randomQuote, randomColors, getRandomAll}) => {

  console.log(randomColors)

  const colorStyle = {
    color: randomColors
  }

  const bgColorStyle = {
    backgroundColor: randomColors
  }

  return (
      <div className="card" style={colorStyle}>
        <article className="card__container">
        <h2 className="card__quote">{randomQuote.quote}</h2>
        <p className="card__author">{randomQuote.author}</p>
        <button onClick={getRandomAll} style={bgColorStyle} className="card__button">&#62;</button>
        </article>
      </div>
  )
}

export default CardQuotes