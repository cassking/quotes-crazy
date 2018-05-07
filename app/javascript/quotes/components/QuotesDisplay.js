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




// We are interested in the contents of the location object,
// as it gives us the query string part of the path
// (called search in React Router terms).
// So, if the user goes to http:
//our-website/?quotes=1, we will be ready to
// parse the ?quotes=1 part and fetch a quote
// with ID 1 from the database.
setQuoteIdFromQueryString(myquerystr){
  console.log('querys', myquerystr)
  this.qsParams = queryString.parse(myquerystr)//uses query-string gem
if (this.qsParams.quote) {
    // assign quote ID from the URL's query string
    this.quoteId=Number(this.qsParams.quote)
  } else{
    //if query string not found default to 1
    this.quoteId = 1
     // update URL in browser to reflect current quote in query string
     this.props.history.push(`/?quote=${this.quoteId}`)
     //React Router already parses the location
     //for you and passes it to your RouteComponent as props.
     //You can access the query (after ? in the url) part via


  }
}

fetchQuote(id){
   //the corresponding quote from  database
   //then update state
   //fetch vs axios here
   //https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5
  axios.get(`api/quotes/${id}`)
    .then(response => {
      console.log('response', response)
      this.setState({quote: response.data});
    })
    .catch(error => {
      console.log(error)
    })

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
  //clicking next need to rerender w diff props
  //user <link> to ensure shareable link for ea quote
  this.setQuoteIdFromQueryString(nextProps.location.search)
  this.fetchQuote(this.quoteId)
}
render () {
  const nextQuoteId = Number(this.state.quote.id) +1


  return(

<div>
  <Link className="next-quote" to={`/?quote=${nextQuoteId}`}>Next</Link>
  <h1>{this.state.quote.quote}</h1>
  <h2>author:<br />{this.state.quote.author}</h2>
  <h3>category: {this.state.quote.category}</h3>

</div>

  )
}


}

export default QuotesDisplay;
