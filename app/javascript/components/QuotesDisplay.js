import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';


class QuotesDisplay extends React.Component {
  constructor() {
    super();
    this.state ={
      quote: {}
    }

    this.fetchQuote = this.fetchQuote.bind(this);
    this.setQuoteIdFromQueryString = this.setQuoteIdFromQueryString.bind(this)
  }


fetchQuote(id){
   //perform an AJAX call with axios to pull
   //the corresponding quote from  database
   //then update state
  fetch(`api/quotes/${id}`)
    .then(response => {
      this.setState({quote: response.data});
    })
    .catch(error => {
      console.log(error)
    })

}


setQuoteIdFromQueryString(querys){
  this.qsParams = queryString.parse(querys)//uses query-string gem
  console.log('params', this.qsParams)
  if (this.qsParams.quote) {
    // assign quote ID from the URL's query string
    this.quoteId=Number(this.qsParams.quote)
  } else{
    //if query string not found default to 1
    this.quoteId =1
     // update URL in browser to reflect current quote in query string
     this.props.history.push(`/?quote=$${this.quoteId}`)
     //React Router already parses the location
     //for you and passes it to your RouteComponent as props.
     //You can access the query (after ? in the url) part via


  }
}
componentDidMount(){
  //use query-string to parse the props.location.search
  //this.props.location.search
  // parse the query parameters  using an existing
  // package such as query-string.
  this.setQuoteIdFromQueryString(this.props.location.search)
  this.fetchQuote(this.quoteId)
}

componentWillReceiveProps(nextProps){
  this.setQuoteIdFromQueryString(nextProps.location.search)
  this.fetchQuote(this.quoteId)
}
render () {
  const nextQuoteId = Number(this.state.quote.id) +1


  return(

<div>
  <Link to={`/?quote=${nextQuoteId}`}>Next</Link>
  <p>{this.state.quote.quote}</p>
  <p>{this.state.quote.author}</p>
  <p>{this.state.quote.category}</p>


</div>

  )
}







}

export default QuotesDisplay;
