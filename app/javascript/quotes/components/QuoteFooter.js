import React from 'react';
import { Link } from 'react-router-dom'


const QuoteFooter = (props) =>(
  <div className="quote-footer">
    <Link className='next-quote' to={`/?quote=${props.startingQuoteId}`}>
      Back to Beginning
    </Link>
  </div>

)

export default QuoteFooter;
