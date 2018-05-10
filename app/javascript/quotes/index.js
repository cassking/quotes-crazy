import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const quotes = document.querySelector('#quotes')

ReactDOM.render(
  <App
    // target the custom
    // data-starting-quote-id
    // from index
    startingQuoteId={quotes.dataset.startingQuoteId} />,
    quotes
  )
