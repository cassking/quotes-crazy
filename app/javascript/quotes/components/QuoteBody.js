import React from 'react';

const QuoteBody = (props) => (
  <div className='quote'>
    <div className='quote-text'>
      <h1>{props.quote.quote}</h1>
    </div>
    <div className='quote-author'>
      <h2>{props.quote.author}</h2>
    </div>
  </div>
)
export default QuoteBody;
