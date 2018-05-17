import React from 'react';
import { Link } from 'react-router-dom'


const QuoteNavigation = (props) => {
  let element = null

  console.log('navigation', props);

  if (props.direction === 'previous') {
    element = (
      <Link className="next-quote link-previous"
       to={`/?quote=${props.otherQuoteId}`}><i className='fa fa-angle-left' aria-hidden='true'></i>Previous
     </Link>
    )
  } else {
    element = (
    <Link className="next-quote link-next"
     to={`/?quote=${props.otherQuoteId}`}>Next<i className='fa fa-angle-right' aria-hidden='true'></i>


    </Link>
    )
  }
  return element;

}
export default QuoteNavigation;
